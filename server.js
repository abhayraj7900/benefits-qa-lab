const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.md':'text/markdown; charset=utf-8'};
http.createServer((req,res)=>{let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname); if(pathname==='/') pathname='/index.html'; const file=path.resolve(root,'.'+pathname); if(!file.startsWith(root+path.sep)){res.writeHead(403).end('Forbidden');return;} fs.readFile(file,(err,data)=>{if(err){res.writeHead(404).end('Not found');return;}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});res.end(data);});}).listen(process.env.PORT||4173,()=>console.log(`QA Lab available at http://localhost:${process.env.PORT||4173}`));
