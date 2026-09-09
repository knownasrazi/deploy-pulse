import { useState,useEffect } from "react";
export default function App(){
  const [deploys]=useState([{id:"abc123",status:"success",time:"2m ago"},{id:"def456",status:"building",time:"now"}]);
  const [logs,setLogs]=useState("Building...\n✔ Compiled");
  useEffect(()=>{ const t=setTimeout(()=>setLogs(l=>l+"\n✔ Deployed"),1500); return ()=>clearTimeout(t); },[]);
  return (
    <main className="bg-[#fdfcfa] min-h-screen text-[#1a1a1a]">
      <div className="mx-auto max-w-3xl px-6 py-8">
        <h1 className="text-2xl font-light">deploy-pulse</h1>
        <div className="mt-4 space-y-2">
          {deploys.map(d=>(
            <div key={d.id} className="flex items-center gap-3 rounded-2xl border border-[#ebe7e0] bg-white p-4">
              <span className={"h-2 w-2 rounded-full "+(d.status==="success"?"bg-green-500":"bg-yellow-500")} />
              <span className="text-sm font-mono">{d.id}</span>
              <span className="text-sm text-[#9a9590]">{d.status} · {d.time}</span>
            </div>
          ))}
        </div>
        <pre className="mt-6 rounded-2xl border border-[#ebe7e0] bg-white p-4 text-xs">{logs}</pre>
      </div>
    </main>
  );
}
