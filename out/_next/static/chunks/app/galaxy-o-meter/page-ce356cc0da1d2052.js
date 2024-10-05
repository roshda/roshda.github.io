(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[708],{918:function(e,t,a){Promise.resolve().then(a.bind(a,6913))},6913:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var n=a(5790),s=a(7876);let r={"The Acolyte":{releaseDate:"2024",summary:"A mystery-thriller series set in the final days of the High Republic era."},"The Mandalorian":{releaseDate:"2019 - 2023",summary:"The story of a lone bounty hunter in the outer reaches of the galaxy."},Andor:{releaseDate:"2022 -",summary:"A prequel to Rogue One focusing on Cassian Andor's early days in the Rebellion."}};function l(){let[e,t]=(0,s.useState)(null),[a,l]=(0,s.useState)(!0),[o,c]=(0,s.useState)(null);if((0,s.useEffect)(()=>{fetch("/galaxy-o-meter/averageSentiment.json").then(e=>{if(!e.ok)throw Error("HTTP error! status: ".concat(e.status));return e.json()}).then(e=>t(e)).catch(e=>console.error("Error fetching sentiment data:",e))},[]),!e)return(0,n.jsx)("p",{children:"Loading sentiment data..."});let i=(e,t)=>{c({text:t,x:e.clientX,y:e.clientY})},u=()=>{c(null)},h=(e,t)=>{let s=100*t.AveragePositive,l=100*t.AverageNeutral,o=100*t.AverageNegative,c=a?s+l+o:s+o,h="https://twitter.com/search?q=".concat(encodeURIComponent(e),"&src=typed_query");return(0,n.jsxs)("div",{className:"mb-8 relative",children:[(0,n.jsx)("h2",{className:"font-semibold text-xl mb-1",children:(0,n.jsx)("a",{href:h,target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:e})}),(0,n.jsxs)("p",{className:"text-sm text-neutral-500 dark:text-neutral-400 mb-4",children:[r[e].releaseDate," • ",r[e].summary]}),(0,n.jsxs)("div",{className:"relative w-full h-6 bg-neutral-200 rounded-full mb-2 overflow-hidden",children:[(0,n.jsx)("div",{className:"absolute top-0 left-0 h-full bg-green-500 rounded-l-full cursor-pointer",style:{width:"".concat(s/c*100,"%")},onMouseEnter:e=>i(e,"Positive count: ".concat(t.CountPositive," (").concat(t.AveragePositive.toFixed(2),"%)")),onMouseLeave:u}),a&&(0,n.jsx)("div",{className:"absolute top-0 h-full bg-yellow-500 cursor-pointer",style:{left:"".concat(s/c*100,"%"),width:"".concat(l/c*100,"%")},onMouseEnter:e=>i(e,"Neutral count: ".concat(t.CountNeutral," (").concat(t.AverageNeutral.toFixed(2),"%)")),onMouseLeave:u}),(0,n.jsx)("div",{className:"absolute top-0 h-full bg-red-500 cursor-pointer ".concat(a?"":"rounded-r-full"),style:{left:"".concat((a?(s+l)/c:s/c)*100,"%"),width:"".concat(o/c*100,"%")},onMouseEnter:e=>i(e,"Negative count: ".concat(t.CountNegative," (").concat(t.AverageNegative.toFixed(2),"%)")),onMouseLeave:u})]}),(0,n.jsx)("div",{className:"mt-2 text-xs text-neutral-500",children:(0,n.jsxs)("p",{children:[t.CountPositive+t.CountNeutral+t.CountNegative," tweets analyzed as of 07/10/2024"]})})]},e)};return(0,n.jsxs)("section",{children:[(0,n.jsx)("h1",{className:"font-semibold text-2xl mb-8 tracking-tighter",children:"Galaxy-O-Meter: How do the Fans Feel?"}),(0,n.jsx)("p",{className:"mb-2",children:"Using Azure Cognitive Services, I ran a sentiment analysis on tweets referencing three recent Star Wars shows."}),(0,n.jsxs)("p",{className:"mb-6",children:["View source code ",(0,n.jsx)("a",{href:"https://github.com/roshda/galaxy-o-meter",className:"text-blue-500 hover:underline",children:"here"}),"."]}),(0,n.jsxs)("div",{className:"flex items-center mb-6",children:[(0,n.jsx)("span",{className:"mr-2 text-sm text-neutral-600 dark:text-neutral-400",children:"Show Neutral Sentiment"}),(0,n.jsxs)("label",{className:"relative inline-block w-10 h-6 align-middle select-none",children:[(0,n.jsx)("input",{type:"checkbox",checked:a,onChange:()=>l(!a),className:"toggle-checkbox absolute opacity-0 w-0 h-0"}),(0,n.jsx)("span",{className:"toggle-label block w-10 h-6 rounded-full cursor-pointer transition-colors duration-300 ease-in-out ".concat(a?"bg-blue-500":"bg-gray-300"),children:(0,n.jsx)("span",{className:"absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out ".concat(a?"translate-x-4":"")})})]}),(0,n.jsx)("span",{className:"ml-4 text-sm text-neutral-600 dark:text-neutral-400",children:"hover/click the charts below to see data \uD83D\uDC46"})]}),Object.entries(e).map(e=>{let[t,a]=e;return h(t,a)}),o&&(0,n.jsx)("div",{className:"absolute bg-black text-white text-xs rounded px-2 py-1",style:{top:o.y+10,left:o.x+10},children:o.text})]})}}},function(e){e.O(0,[815,264,744],function(){return e(e.s=918)}),_N_E=e.O()}]);