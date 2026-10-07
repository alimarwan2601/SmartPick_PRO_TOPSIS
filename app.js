const phones=[
["A1","Samsung Galaxy A26 5G",4999000,8,256,771279,50,5000,"Samsung"],
["A2","Samsung Galaxy A36 5G",5699000,8,256,844447,50,5000,"Samsung"],
["A3","Samsung Galaxy A37 5G",7299000,8,256,1064079,50,5000,"Samsung"],
["A4","Samsung Galaxy A56 5G",6699000,8,256,1258240,50,5000,"Samsung"],
["A5","Redmi Note 14 5G",3199000,8,256,676648,108,5110,"Xiaomi"],
["A6","Redmi Note 14 Pro 5G",4399000,8,256,855596,200,5110,"Xiaomi"],
["A7","POCO X7 5G",3799000,8,256,854970,50,5110,"POCO"],
["A8","POCO X7 Pro 5G",5199000,12,512,1940364,50,6000,"POCO"],
["A9","POCO F7",5999000,12,512,2288306,50,6500,"POCO"],
["A10","realme 14 5G",4399000,8,256,980508,50,6000,"realme"],
["A11","realme 14T 5G",3799000,8,256,569901,50,6000,"realme"],
["A12","vivo V50 5G",6499000,8,256,1018053,50,6000,"vivo"],
["A13","OPPO Reno13 F 5G",5599000,8,256,749828,50,5800,"OPPO"],
["A14","Infinix Note 60",4999000,8,256,977113,50,6500,"Infinix"],
["A15","Infinix Note 60 Pro",5499000,8,256,1065801,50,6500,"Infinix"]
];
const criteria=[["Harga","Cost"],["RAM","Benefit"],["Storage","Benefit"],["Performa","Benefit"],["Kamera","Benefit"],["Baterai","Benefit"]];
const defaults=[4,3,3,4,2,4];
const grid=document.getElementById("criteriaGrid");
criteria.forEach((c,i)=>{let el=document.createElement("div");el.className="criterion";el.innerHTML=`<div class="criterion-top"><div><div class="criterion-name">${c[0]}</div><div class="criterion-type">${c[1]}</div></div><div class="criterion-value" id="cv${i}">${defaults[i]}</div></div><input class="slider" id="sl${i}" type="range" min="1" max="4" value="${defaults[i]}"><div class="scale"><span>1</span><span>2</span><span>3</span><span>4</span></div>`;grid.appendChild(el);el.querySelector("input").addEventListener("input",()=>{document.getElementById("cv"+i).textContent=el.querySelector("input").value;});});
function money(n){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n)}
function calculate(){
 let raw=[0,1,2,3,4,5].map(i=>+document.getElementById("sl"+i).value),total=raw.reduce((a,b)=>a+b,0),w=raw.map(v=>v/total);
 document.getElementById("weightTotal").textContent="100%";
 let m=phones.map(p=>p.slice(2,8)),den=m[0].map((_,j)=>Math.sqrt(m.reduce((s,r)=>s+r[j]**2,0))),r=m.map(row=>row.map((x,j)=>x/den[j])),y=r.map(row=>row.map((x,j)=>x*w[j]));
 let plus=[],minus=[];
 for(let j=0;j<6;j++){let c=y.map(r=>r[j]);plus[j]=j===0?Math.min(...c):Math.max(...c);minus[j]=j===0?Math.max(...c):Math.min(...c)}
 let out=phones.map((p,i)=>{let dp=Math.sqrt(y[i].reduce((s,x,j)=>s+(x-plus[j])**2,0)),dm=Math.sqrt(y[i].reduce((s,x,j)=>s+(x-minus[j])**2,0));return{p,v:dm/(dm+dp)}}).sort((a,b)=>b.v-a.v);
 renderResults(out);return out;
}
function renderResults(out){
 let top=out[0];document.getElementById("winner").innerHTML=`<div><div class="winner-label">🏆 REKOMENDASI UTAMA</div><div class="winner-name">${top.p[1]}</div><div style="color:#718093;font-size:11px;margin-top:4px">${top.p[3]} GB RAM · ${top.p[4]} GB storage · ${money(top.p[2])}</div></div><div class="winner-score"><b>${top.v.toFixed(6)}</b><small>NILAI PREFERENSI (V)</small></div>`;
 document.getElementById("rankingBody").innerHTML=out.map((x,i)=>`<tr><td>${i+1}</td><td><b>${x.p[1]}</b></td><td>${money(x.p[2])}</td><td>${x.p[3]} GB</td><td>${x.p[4]} GB</td><td>${x.p[6].toLocaleString("id-ID")}</td><td class="score">${x.v.toFixed(6)}</td></tr>`).join("");
}
function renderPhones(list=phones){document.getElementById("phoneGrid").innerHTML=list.map(p=>`<article class="phone-item"><div class="phone-icon"><div></div></div><div class="brand-label">${p[8]}</div><h3>${p[1]}</h3><div class="specs"><span>${p[3]} GB RAM</span><span>${p[4]} GB</span><span>${p[7].toLocaleString("id-ID")} mAh</span><span>${p[6]} MP</span></div><div class="price">${money(p[2])}</div></article>`).join("")}
const brands=[...new Set(phones.map(p=>p[8]))];brands.forEach(b=>{let o=document.createElement("option");o.value=b;o.textContent=b;document.getElementById("brandFilter").appendChild(o)});
function filter(){let q=document.getElementById("search").value.toLowerCase(),b=document.getElementById("brandFilter").value;renderPhones(phones.filter(p=>(p[1].toLowerCase().includes(q)||p[8].toLowerCase().includes(q))&&(!b||p[8]===b)))}
document.getElementById("search").addEventListener("input",filter);document.getElementById("brandFilter").addEventListener("change",filter);
document.getElementById("calculate").addEventListener("click",()=>{calculate();document.getElementById("results").scrollIntoView({behavior:"smooth"});toast("Rekomendasi berhasil dihitung ✦")});
function toast(t){let e=document.getElementById("toast");e.textContent=t;e.classList.add("show");setTimeout(()=>e.classList.remove("show"),2200)}
renderPhones();calculate();
