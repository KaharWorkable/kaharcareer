"use strict";(self.webpackChunkkaharcareer=self.webpackChunkkaharcareer||[]).push([[284],{284:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var a=r(43),c=r(338),s=r(204),n=r(579);const o=()=>{const[e,t]=(0,a.useState)([]);return(0,a.useEffect)((()=>{(async()=>{try{console.log("Fetching data...");const e=await(0,c.P_)("about");console.log("Data fetched:",e),t(e)}catch(e){console.error("Error fetching data:",e)}})()}),[]),(0,n.jsx)("div",{className:"min-h-screen flex flex-col justify-center items-center bg-blue-500 text-white",children:(0,n.jsx)("div",{className:"container mx-auto px-4 py-10 text-center",children:(0,n.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-center",children:[(0,n.jsx)("img",{src:"https://media.licdn.com/dms/image/C4D03AQHBCxycOLTXvA/profile-displayphoto-shrink_200_200/0/1654167793922?e=1723680000&v=beta&t=aM19HVp2fPjZV_1EZUwLQY4QWQrhyNh9ldWx-1bE_2Y",alt:"Kahar",className:"w-512 h-512 rounded-full mb-64 md:mb-0 md:mr-24"}),(0,n.jsxs)("div",{className:"md:text-left",children:[(0,n.jsxs)("h1",{className:"text-4xl font-bold mb-2",children:["Hello ",(0,n.jsx)("span",{className:"inline-block",children:"\ud83d\udc4b"})," I'm Kahar,"]}),e.length>0?e.map((e=>(0,n.jsx)("h1",{className:"text-3xl leading-relaxed mb-4",children:e.me},e.id))):(0,n.jsx)("p",{className:"text-lg text-gray-500",children:"Loading..."}),(0,n.jsxs)("div",{className:"flex justify-center md:justify-start space-x-6 mt-4",children:[(0,n.jsx)("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(s.QEs,{className:"text-2xl hover:text-gray-300"})}),(0,n.jsx)("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(s.ao$,{className:"text-2xl hover:text-gray-300"})}),(0,n.jsx)("a",{href:"https://yourwebsite.com",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(s.QCr,{className:"text-2xl hover:text-gray-300"})})]})]})]})})})}},338:(e,t,r)=>{r.d(t,{Nn:()=>o,P_:()=>l,lU:()=>n,tI:()=>s});var a=r(207),c=r(472);const s=async(e,t)=>{try{const r=(new Date).toISOString();await(0,c.gS)((0,c.rJ)(a.db,e),{...t,created_at:r,updated_at:r})}catch(r){console.error("Error adding document to ".concat(e,":"),r)}},n=async(e,t,r)=>{try{const s=(new Date).toISOString(),n=(0,c.H9)(a.db,e,t);await(0,c.mZ)(n,{...r,updated_at:s})}catch(s){console.error("Error updating document in ".concat(e,":"),s)}},o=async(e,t)=>{try{const r=(0,c.H9)(a.db,e,t);await(0,c.kd)(r)}catch(r){console.error("Error deleting document from ".concat(e,":"),r)}},l=async e=>{try{return(await(0,c.GG)((0,c.rJ)(a.db,e))).docs.map((e=>({id:e.id,...e.data()})))}catch(t){return console.error("Error fetching documents from ".concat(e,":"),t),[]}}}}]);
//# sourceMappingURL=284.0fbec12e.chunk.js.map