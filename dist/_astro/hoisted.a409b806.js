const A=document.querySelectorAll("#landing-header li");document.querySelector("#mobile-bg");A.forEach(t=>{t.addEventListener("mouseenter",o=>{})});const x=document.querySelector("#landing-header"),I={root:null,rootMargin:"0px",threshold:.9},k=new IntersectionObserver(t=>{t.forEach(o=>{const{isIntersecting:l}=o;if(l){const i=o.target.getAttribute("data-header-color");x.style.color=i}})},I),M=document.querySelectorAll(".landing-section");M.forEach(t=>k.observe(t));const y=document.querySelector(".hamburger-button"),a=document.querySelector("nav"),w=document.querySelector("#mobile-bg");let g=document.querySelectorAll(".show-menu ul li");y.addEventListener("click",()=>{const t=y.getAttribute("aria-expanded");!t||t==="false"?y.setAttribute("aria-expanded","true"):y.setAttribute("aria-expanded","false"),a.classList.toggle("show-menu"),a.classList.remove("menu"),w.classList.toggle("mobile-bg"),a.classList.contains("show-menu")?(setTimeout(()=>{a.style.opacity="1",a.style.transform="translateX(0)"},1),g=document.querySelectorAll(".show-menu ul li"),a.addEventListener("transitionend",()=>{g.forEach((o,l)=>{setTimeout(()=>{o.classList.add("show-item")},l*60)}),a.removeEventListener("transitionend",()=>{})})):(g.forEach(o=>{o.classList.remove("show-item")}),setTimeout(()=>{a.style.opacity="0",a.style.transform="translateX(100%)"},100))});const B=document.querySelectorAll("#open-popup"),T=document.querySelector("#close-popup"),r=document.querySelector("#popup-card"),m=document.querySelector(".calendar-body"),O=document.querySelector(".calendar-month-year"),H=document.querySelector(".prev-month-btn"),Y=document.querySelector(".next-month-btn");let f=new Date,s=f.getMonth(),d=f.getFullYear();function L(){f=new Date(d,s,1);const t=new Date(d,s,1),o=new Date(d,s+1,0),l=t.getDay();O.textContent=new Intl.DateTimeFormat("es-LA",{year:"numeric",month:"long"}).format(f),m.innerHTML="";const i=["Dom","Lun","Mar","Mie","Jue","Vie","Sab"];for(let n=0;n<i.length;n++){const e=document.createElement("div");e.textContent=i[n],e.classList.add("day-label"),e.style.cursor="default",n===0&&e.classList.add("first-day-label"),m.appendChild(e)}document.querySelectorAll(".first-day-label").forEach(n=>{n instanceof HTMLElement&&(n.style.color="#E74C3C",n.style.cursor="default")});for(let n=0;n<l;n++){const e=document.createElement("div");e.classList.add("empty-day"),m.appendChild(e)}for(let n=1;n<=o.getDate();n++){const e=document.createElement("a");e.textContent=n.toString(),e.id="open-popup-day",e.style.cursor="pointer";let c=null,p=null;e.addEventListener("click",v=>{const h=v.target;document.getElementById("card-container");const E=document.getElementById("day-card"),b=document.getElementById("card-day-text");if(document.getElementById("card-content"),p===h){E.style.display="none",c=null,p=null;return}b.textContent="Dia "+h.textContent,c&&(c.style.display="none"),E.style.display="block",c=E,p=h;function D(){const u=document.getElementById("day-card");u&&(u.style.display="none",c=null)}document.addEventListener("click",u=>{const C=u.target,S=C.closest(".calendar"),q=C.closest("#day-card");!S&&!q&&D()})}),(n-1+l)%7===0&&e.classList.add("first-column-day"),e.classList.contains("first-column-day")||(e.addEventListener("mouseover",()=>{e.style.transition="color 0.3s ease",e.style.color="orangered"}),e.addEventListener("mouseout",()=>{e.style.color=""})),m.appendChild(e)}document.querySelectorAll(".first-column-day").forEach(n=>{n instanceof HTMLElement&&(n.style.color="#E74C3C")})}H.addEventListener("click",()=>{s>0?s--:(s=11,d--),L();function t(){const o=document.getElementById("day-card");o&&(o.style.display="none")}t()});Y.addEventListener("click",()=>{s<11?s++:(s=0,d++),L();function t(){const o=document.getElementById("day-card");o&&(o.style.display="none")}t()});B.forEach(t=>{t.addEventListener("click",()=>{r.classList.remove("hidden"),r.offsetWidth,r.classList.add("open"),L()})});T.addEventListener("click",()=>{r.classList.remove("open"),setTimeout(()=>{r.classList.add("hidden")},500)});function F(t){const o=t.target.textContent;console.log(o)}document.querySelectorAll(".calendar-body div:not(.empty-day)").forEach(t=>{t.addEventListener("click",F)});
