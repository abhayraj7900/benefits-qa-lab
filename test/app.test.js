const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { spawn } = require('node:child_process');
const root = path.resolve(__dirname, '..');
test('app seeds 40 unique cases as Not Run and includes core workflow features', () => {
  const source = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
  const seed = source.match(/const titles=\[(.*?)\];/s)?.[1] || '';
  const titles = [...seed.matchAll(/'([^']+)'/g)];
  assert.equal(titles.length, 40);
  assert.match(source, /status:'Not Run'/);
  assert.match(source, /localStorage\.setItem/);
  assert.match(source, /crypto\.randomUUID/);
  assert.match(source, /function exportCsv/);
  assert.match(source, /Requirements \/ RTM/);
  assert.match(source, /requirementLinks/);
  assert.match(source, /function viewRequirements/);
  assert.match(source, /function viewEvidence/);
  assert.match(source, /accept="image\/\*"/);
  assert.match(source, /750\*1024/);
});
test('local server serves the app and client assets', async t => {
  const child = spawn(process.execPath, ['server.js'], { cwd: root, env: { ...process.env, PORT: '4189' }, stdio: 'ignore' });
  t.after(() => child.kill());
  const get = path => new Promise((resolve, reject) => { const req = http.get(`http://127.0.0.1:4189${path}`, res => { let body='';res.setEncoding('utf8');res.on('data',x=>body+=x);res.on('end',()=>resolve({status:res.statusCode,body}));});req.on('error',reject); });
  let response; for(let i=0;i<30;i++){try{response=await get('/');break}catch{await new Promise(r=>setTimeout(r,100));}}
  assert.equal(response.status,200); assert.match(response.body,/Benefits QA Lab/);
  const js=await get('/app.js'); assert.equal(js.status,200); assert.match(js.body,/employee@example\.com/);
});
const vmRunner = require('node:vm');
const runtimeCrypto = require('node:crypto').webcrypto;

test('all existing sidebar sections and added RTM route render without changing navigation', () => {
  const source = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
  const expected = ['Overview','Employee Login','Employee Benefits','Test Scenarios','Test Cases','Test Execution','Defect Reports','Summary Report','Test Data','SQL Practice','SDLC / STLC','Documentation','Requirements / RTM'];
  const pageBlock = source.match(/const pages=\[(.*?)\];/)?.[1] || '';
  const labels = [...pageBlock.matchAll(/\['[^']+','[^']+','([^']+)'\]/g)].map(m => m[1]);
  assert.deepEqual(labels, expected);
  for (const route of ['overview','login','benefits','scenarios','cases','execution','defects','summary','data','sql','learning','docs','rtm']) {
    const nodes = new Map();
    const makeNode = () => ({innerHTML:'',textContent:'',value:'',classList:{add(){},remove(){}},querySelectorAll(){return[]},showModal(){}});
    const document = {querySelector(sel){if(!nodes.has(sel)) nodes.set(sel,makeNode()); return nodes.get(sel)},querySelectorAll(){return[]},createElement(){return makeNode()}};
    vmRunner.runInNewContext(source,{document,window:{addEventListener(){}},location:{hash:'#'+route},localStorage:{getItem(){return null},setItem(){}},confirm(){return true},setTimeout(){},crypto:runtimeCrypto,console},{timeout:1000});
    const html=nodes.get('#content').innerHTML;
    assert.ok(html.length>0,`${route} should render`);
    assert.ok(!html.includes('undefined'),`${route} should not render undefined`);
    if(route==='summary') assert.match(html,/0%/);
    if(route==='scenarios') assert.match(html,/TS-024/);
    if(route==='rtm') assert.match(html,/FR-022/);
    if(route==='sql') assert.match(html,/Subquery/);
  }
});

test('summary CSV reflects saved execution records and storage remains backward-compatible', () => {
  const source=fs.readFileSync(path.join(root,'app.js'),'utf8');
  const saved={cases:[{id:'TC-OLD',title:'Existing case',requirement:'FR-001',status:'Pass'}],executions:[{id:'RUN-1',caseId:'TC-OLD',caseTitle:'Existing case',status:'Pass',actual:'Observed match',tester:'QA',date:'2026-10-27T00:00:00.000Z',notes:'manual'}],defects:[{id:'BUG-OLD',summary:'Existing saved defect',severity:'High',priority:'High',status:'Open'}],tester:'QA'};
  let exported=''; const store=new Map([['benefits-qa-lab-v1',JSON.stringify(saved)]]); const nodes=new Map();
  const makeNode=()=>({innerHTML:'',textContent:'',value:'',classList:{add(){},remove(){}},querySelectorAll(){return[]},showModal(){},click(){}});
  const document={querySelector(sel){if(!nodes.has(sel))nodes.set(sel,makeNode());return nodes.get(sel)},querySelectorAll(){return[]},createElement(){return makeNode()}};
  class CaptureBlob{constructor(parts){exported=parts.join('')}}
  const context={document,window:{addEventListener(){}},location:{hash:'#summary'},localStorage:{getItem(k){return store.get(k)||null},setItem(k,v){store.set(k,v)}},confirm(){return true},setTimeout(){},crypto:runtimeCrypto,Blob:CaptureBlob,URL:{createObjectURL(){return 'blob:csv'},revokeObjectURL(){}},console};
  vmRunner.runInNewContext(source,context,{timeout:1000});
  const report=nodes.get('#content').innerHTML;
  assert.match(report,/Executed cases/); assert.match(report,/Execution runs/); assert.match(report,/Requirements covered/);
  nodes.get('#export').onclick();
  assert.match(exported,/RUN-1/); assert.match(exported,/Observed match/); assert.match(exported,/manual/);
  const after=JSON.parse(store.get('benefits-qa-lab-v1'));
  assert.equal(after.cases[0].id,'TC-OLD'); assert.equal(after.executions[0].id,'RUN-1'); assert.equal(after.defects[0].id,'BUG-OLD');
});

test('defect lifecycle changes persist across a simulated page refresh', () => {
  const source=fs.readFileSync(path.join(root,'app.js'),'utf8');
  const initial={cases:[],executions:[],defects:[{id:'BUG-1',summary:'Fictional practice issue',severity:'Low',priority:'Low',status:'Open'}],tester:'QA'};
  const store=new Map([['benefits-qa-lab-v1',JSON.stringify(initial)]]);
  function boot(){
    const nodes=new Map(); const statusControl={dataset:{def:'BUG-1'},value:'Retest'};
    const makeNode=()=>({innerHTML:'',textContent:'',value:'',classList:{add(){},remove(){}},querySelectorAll(){return[]},showModal(){}});
    const document={querySelector(sel){if(!nodes.has(sel))nodes.set(sel,makeNode());return nodes.get(sel)},querySelectorAll(sel){return sel==='[data-def]'?[statusControl]:[]},createElement(){return makeNode()}};
    vmRunner.runInNewContext(source,{document,window:{addEventListener(){}},location:{hash:'#defects'},localStorage:{getItem(k){return store.get(k)||null},setItem(k,v){store.set(k,v)}},confirm(){return true},setTimeout(){},crypto:runtimeCrypto,console},{timeout:1000});
    return {nodes,statusControl};
  }
  const first=boot(); first.statusControl.onchange();
  assert.equal(JSON.parse(store.get('benefits-qa-lab-v1')).defects[0].status,'Retest');
  const refreshed=boot();
  assert.match(refreshed.nodes.get('#content').innerHTML,/Retest/);
});
