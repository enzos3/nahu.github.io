const x=document.querySelectorAll("#landing-header li");document.querySelector("#mobile-bg");x.forEach(e=>{e.addEventListener("mouseenter",o=>{})});const I=document.querySelector("#landing-header"),B={root:null,rootMargin:"0px",threshold:.9},w=new IntersectionObserver(e=>{e.forEach(o=>{const{isIntersecting:c}=o;if(c){const i=o.target.getAttribute("data-header-color");I.style.color=i}})},B),M=document.querySelectorAll(".landing-section");M.forEach(e=>w.observe(e));const y=document.querySelector(".hamburger-button"),l=document.querySelector("nav"),T=document.querySelector("#mobile-bg");let L=document.querySelectorAll(".show-menu ul li");y.addEventListener("click",()=>{const e=y.getAttribute("aria-expanded");!e||e==="false"?y.setAttribute("aria-expanded","true"):y.setAttribute("aria-expanded","false"),l.classList.toggle("show-menu"),l.classList.remove("menu"),T.classList.toggle("mobile-bg"),l.classList.contains("show-menu")?(setTimeout(()=>{l.style.opacity="1",l.style.transform="translateX(0)"},1),L=document.querySelectorAll(".show-menu ul li"),l.addEventListener("transitionend",()=>{L.forEach((o,c)=>{setTimeout(()=>{o.classList.add("show-item")},c*60)}),l.removeEventListener("transitionend",()=>{})})):(L.forEach(o=>{o.classList.remove("show-item")}),setTimeout(()=>{l.style.opacity="0",l.style.transform="translateX(100%)"},100))});document.getElementById("day-card");const O=document.querySelectorAll("#open-popup"),H=document.querySelector("#close-popup"),r=document.querySelector("#popup-card"),m=document.querySelector(".calendar-body"),Y=document.querySelector(".calendar-month-year"),F=document.querySelector(".prev-month-btn"),P=document.querySelector(".next-month-btn");let p=new Date,s=p.getMonth(),d=p.getFullYear();function v(){p=new Date(d,s,1);const e=new Date(d,s,1),o=new Date(d,s+1,0),c=e.getDay();Y.textContent=new Intl.DateTimeFormat("es-LA",{year:"numeric",month:"long"}).format(p),m.innerHTML="";const i=["Dom","Lun","Mar","Mie","Jue","Vie","Sab"];for(let n=0;n<i.length;n++){const t=document.createElement("div");t.textContent=i[n],t.classList.add("day-label"),t.style.cursor="default",n===0&&t.classList.add("first-day-label"),m.appendChild(t)}document.querySelectorAll(".first-day-label").forEach(n=>{n instanceof HTMLElement&&(n.style.color="#E74C3C",n.style.cursor="default")});for(let n=0;n<c;n++){const t=document.createElement("div");t.classList.add("empty-day"),m.appendChild(t)}for(let n=1;n<=o.getDate();n++){const t=document.createElement("a");t.textContent=n.toString(),t.id="open-popup-day",t.style.cursor="pointer";let a=null,g=null;t.addEventListener("click",S=>{const E=S.target;document.getElementById("card-container");const h=document.getElementById("day-card"),D=document.getElementById("card-day-text");if(document.getElementById("card-content"),g===E){h.style.display="none",a=null,g=null;return}D.textContent="Dia "+E.textContent,a&&(a.style.display="none"),h.style.display="block",a=h,g=E;function q(){const u=document.getElementById("day-card");u&&(u.style.display="none",a=null)}document.addEventListener("click",u=>{const C=u.target,A=C.closest("#popup-card"),k=C.closest("#day-card");!A&&!k&&q()})}),(n-1+c)%7===0&&t.classList.add("first-column-day"),t.classList.contains("first-column-day")||(t.addEventListener("mouseover",()=>{t.style.transition="color 0.3s ease",t.style.color="orangered"}),t.addEventListener("mouseout",()=>{t.style.color=""})),m.appendChild(t)}document.querySelectorAll(".first-column-day").forEach(n=>{n instanceof HTMLElement&&(n.style.color="#E74C3C")})}F.addEventListener("click",()=>{s>0?s--:(s=11,d--),v();function e(){const o=document.getElementById("day-card");o&&(o.style.display="none")}e()});P.addEventListener("click",()=>{s<11?s++:(s=0,d++),v();function e(){const o=document.getElementById("day-card");o&&(o.style.display="none")}e()});O.forEach(e=>{e.addEventListener("click",()=>{r.classList.remove("hidden"),r.offsetWidth,r.classList.add("open"),v()})});H.addEventListener("click",()=>{r.classList.remove("open"),setTimeout(()=>{r.classList.add("hidden")},500)});function X(e){const o=e.target.textContent;console.log(o)}document.querySelectorAll(".calendar-body div:not(.empty-day)").forEach(e=>{e.addEventListener("click",X)});const b=document.querySelectorAll("#open-appoint"),J=document.querySelector("#close-appoint"),f=document.querySelector(".card-container");b.forEach((e,o)=>{e.addEventListener("click",()=>{f.style.visibility="visible",f.style.opacity="1",console.log("open")})});J.addEventListener("click",()=>{f.style.opacity="0",console.log("close"),setTimeout(()=>{f.style.visibility="hidden"},300)});console.log(b);console.log("working");