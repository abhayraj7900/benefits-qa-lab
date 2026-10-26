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
