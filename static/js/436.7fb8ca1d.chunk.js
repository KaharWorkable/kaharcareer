"use strict";(self.webpackChunkkaharcareer=self.webpackChunkkaharcareer||[]).push([[436],{436:(t,e,a)=>{a.r(e),a.d(e,{default:()=>o});var r=a(43),c=a(338),n=a(579);const o=()=>{const[t,e]=(0,r.useState)([]);return(0,r.useEffect)((()=>{(async()=>{try{console.log("Fetching reviews data...");const t=await(0,c.P_)("reviews");console.log("Data fetched:",t),e(t)}catch(t){console.error("Error fetching reviews data:",t)}})()}),[]),(0,n.jsxs)("div",{className:"container mx-auto px-4 py-6",children:[(0,n.jsx)("h2",{className:"text-3xl font-bold mb-4",children:"Reviews"}),t.length>0?t.map((t=>(0,n.jsx)("p",{className:"text-lg",children:t.content},t.id))):(0,n.jsx)("p",{className:"text-lg",children:"Loading..."})]})}},338:(t,e,a)=>{a.d(e,{Nn:()=>s,P_:()=>d,lU:()=>o,tI:()=>n});var r=a(207),c=a(472);const n=async(t,e)=>{try{const a=(new Date).toISOString();await(0,c.gS)((0,c.rJ)(r.db,t),{...e,created_at:a,updated_at:a})}catch(a){console.error("Error adding document to ".concat(t,":"),a)}},o=async(t,e,a)=>{try{const n=(new Date).toISOString(),o=(0,c.H9)(r.db,t,e);await(0,c.mZ)(o,{...a,updated_at:n})}catch(n){console.error("Error updating document in ".concat(t,":"),n)}},s=async(t,e)=>{try{const a=(0,c.H9)(r.db,t,e);await(0,c.kd)(a)}catch(a){console.error("Error deleting document from ".concat(t,":"),a)}},d=async t=>{try{return(await(0,c.GG)((0,c.rJ)(r.db,t))).docs.map((t=>({id:t.id,...t.data()})))}catch(e){return console.error("Error fetching documents from ".concat(t,":"),e),[]}}}}]);
//# sourceMappingURL=436.7fb8ca1d.chunk.js.map