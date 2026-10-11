const smartphones = [
{id:"HP001",name:"Infinix Smart 8",brand:"Infinix",price:1199000,performance:325539,camera_score:1,battery:5000,display_score:1,ram:"4 GB",storage:"128 GB",chipset:"MediaTek Helio G36",specNote:"Konfigurasi dapat berbeda menurut pasar."},
{id:"HP002",name:"Redmi 14C",brand:"Redmi",price:1799000,performance:362983,camera_score:1,battery:5160,display_score:1,ram:"6/8 GB",storage:"128/256 GB",chipset:"MediaTek Helio G81-Ultra",specNote:"Varian RAM/storage yang tersedia dapat berbeda menurut wilayah."},
{id:"HP003",name:"POCO C71",brand:"POCO",price:1599000,performance:322517,camera_score:0,battery:5200,display_score:1,ram:"4 GB",storage:"128 GB",chipset:"Unisoc T7250",specNote:"Mengacu pada konfigurasi umum yang dipasarkan."},
{id:"HP004",name:"TECNO POVA 7 Neo",brand:"TECNO",price:1977000,performance:561891,camera_score:1,battery:7000,display_score:2,ram:"8 GB",storage:"128/256 GB",chipset:"Perlu verifikasi varian",specNote:"Nama chipset dan konfigurasi perlu dicocokkan dengan varian resmi yang digunakan."},
{id:"HP005",name:"Infinix Note 40",brand:"Infinix",price:2309000,performance:575446,camera_score:2,battery:5000,display_score:3,ram:"8 GB",storage:"256 GB",chipset:"MediaTek Helio G99 Ultimate",specNote:"Konfigurasi umum; cek SKU/varian lokal."},
{id:"HP006",name:"Infinix Hot 50 Pro+",brand:"Infinix",price:2599000,performance:566719,camera_score:1,battery:5000,display_score:2,ram:"8 GB",storage:"256 GB",chipset:"MediaTek Helio G100",specNote:"Konfigurasi umum; cek SKU/varian lokal."},
{id:"HP007",name:"Samsung Galaxy A07 5G",brand:"Samsung",price:2799000,performance:528428,camera_score:1,battery:5000,display_score:2,ram:"4/6 GB",storage:"128 GB",chipset:"Perlu verifikasi varian",specNote:"Pastikan chipset dan konfigurasi cocok dengan varian Galaxy A07 5G yang dipakai."},
{id:"HP008",name:"POCO M7 Pro 5G",brand:"POCO",price:2999000,performance:661238,camera_score:2,battery:5110,display_score:3,ram:"8/12 GB",storage:"256/512 GB",chipset:"MediaTek Dimensity 7025-Ultra",specNote:"Varian yang tersedia dapat berbeda menurut pasar."},
{id:"HP009",name:"Redmi Note 15",brand:"Redmi",price:2599000,performance:825374,camera_score:1,battery:6000,display_score:3,ram:"6/8/12 GB",storage:"128/256/512 GB",chipset:"Qualcomm Snapdragon 6 Gen 3",specNote:"Konfigurasi merujuk pada lini Redmi Note 15 5G; pastikan varian yang sesuai dengan dataset."},
{id:"HP010",name:"TECNO POVA Curve 5G",brand:"TECNO",price:3035000,performance:765777,camera_score:1,battery:5500,display_score:2,ram:"6/8 GB fisik",storage:"128/256 GB",chipset:"MediaTek Dimensity 7300 Ultimate",specNote:"Angka RAM tidak menghitung RAM virtual/ekstensi."},
{id:"HP011",name:"Samsung Galaxy A17 5G",brand:"Samsung",price:3699000,performance:603772,camera_score:2,battery:5000,display_score:2,ram:"4/8 GB",storage:"128/256 GB",chipset:"Samsung Exynos 1330",specNote:"Konfigurasi dapat berbeda menurut wilayah."},
{id:"HP012",name:"iQOO Z11x",brand:"iQOO",price:3699000,performance:983562,camera_score:1,battery:7200,display_score:1,ram:"Perlu verifikasi",storage:"Perlu verifikasi",chipset:"Perlu verifikasi varian",specNote:"Lengkapi setelah memastikan spesifikasi resmi iQOO Z11x untuk pasar yang digunakan."},
{id:"HP013",name:"Redmi Note 14 5G",brand:"Redmi",price:3799000,performance:660807,camera_score:2,battery:5110,display_score:4,ram:"8/12 GB",storage:"256/512 GB",chipset:"MediaTek Dimensity 7025-Ultra",specNote:"Varian yang tersedia dapat berbeda menurut pasar."},
{id:"HP014",name:"POCO X7",brand:"POCO",price:3799000,performance:803683,camera_score:4,battery:5110,display_score:5,ram:"8/12 GB",storage:"256/512 GB",chipset:"MediaTek Dimensity 7300-Ultra",specNote:"Konfigurasi umum untuk POCO X7."},
{id:"HP015",name:"Samsung Galaxy A26 5G",brand:"Samsung",price:3999000,performance:754064,camera_score:4,battery:5000,display_score:2,ram:"8 GB",storage:"256 GB",chipset:"Samsung Exynos 1380",specNote:"Konfigurasi umum; cek varian lokal."},
{id:"HP016",name:"Infinix GT 30 Pro",brand:"Infinix",price:3999000,performance:1591019,camera_score:4,battery:5500,display_score:5,ram:"12 GB",storage:"256/512 GB",chipset:"MediaTek Dimensity 8350 Ultimate",specNote:"RAM virtual tidak dihitung sebagai RAM fisik."},
{id:"HP017",name:"Redmi Note 14 Pro 5G",brand:"Redmi",price:4399000,performance:804731,camera_score:4,battery:5110,display_score:5,ram:"8/12 GB",storage:"256/512 GB",chipset:"MediaTek Dimensity 7300-Ultra",specNote:"Varian yang tersedia dapat berbeda menurut pasar."},
{id:"HP018",name:"realme 14 5G",brand:"realme",price:4399000,performance:980508,camera_score:2,battery:6000,display_score:3,ram:"8 GB",storage:"256 GB",chipset:"Qualcomm Snapdragon 6 Gen 4",specNote:"Konfigurasi umum; cek varian lokal."},
{id:"HP019",name:"Redmi Note 15 Pro 5G",brand:"Redmi",price:4699000,performance:876387,camera_score:4,battery:6580,display_score:5,ram:"8/12 GB",storage:"256/512 GB",chipset:"MediaTek Dimensity 7400-Ultra",specNote:"Konfigurasi mengikuti spesifikasi lini Redmi Note 15 Pro 5G; varian lokal perlu dicek."},
{id:"HP020",name:"POCO X8 Pro",brand:"POCO",price:4999000,performance:1977887,camera_score:3,battery:6500,display_score:5,ram:"8/12 GB",storage:"256/512 GB",chipset:"MediaTek Dimensity 8500-Ultra",specNote:"Varian yang tersedia dapat berbeda menurut pasar."},
{id:"HP021",name:"POCO F7",brand:"POCO",price:5999000,performance:2199079,camera_score:3,battery:6500,display_score:5,ram:"12 GB",storage:"256/512 GB",chipset:"Qualcomm Snapdragon 8s Gen 4",specNote:"Konfigurasi umum; cek varian lokal."},
{id:"HP022",name:"Redmi Note 15 Pro+ 5G",brand:"Redmi",price:5999000,performance:975892,camera_score:4,battery:6500,display_score:5,ram:"8/12 GB",storage:"256/512 GB",chipset:"Perlu verifikasi varian",specNote:"Pastikan chipset dan konfigurasi sesuai varian resmi Redmi Note 15 Pro+ 5G yang digunakan."},
{id:"HP023",name:"Infinix GT 50 Pro",brand:"Infinix",price:6499000,performance:1959760,camera_score:4,battery:6500,display_score:5,ram:"Perlu verifikasi",storage:"Perlu verifikasi",chipset:"Perlu verifikasi varian",specNote:"Lengkapi setelah memastikan spesifikasi resmi Infinix GT 50 Pro untuk pasar yang digunakan."},
{id:"HP024",name:"Xiaomi 14T",brand:"Xiaomi",price:6499000,performance:1559755,camera_score:5,battery:5000,display_score:5,ram:"12 GB",storage:"256/512 GB",chipset:"MediaTek Dimensity 8300-Ultra",specNote:"Spesifikasi resmi Xiaomi 14T; pilihan storage dapat berbeda menurut pasar."},
{id:"HP025",name:"Motorola Edge 60 Pro",brand:"Motorola",price:7999000,performance:1537550,camera_score:5,battery:6000,display_score:5,ram:"12 GB",storage:"512 GB",chipset:"MediaTek Dimensity 8350 Extreme",specNote:"Konfigurasi umum; cek varian lokal."},
{id:"HP026",name:"Samsung Galaxy A57 5G",brand:"Samsung",price:8299000,performance:1359649,camera_score:4,battery:5000,display_score:2,ram:"Perlu verifikasi",storage:"Perlu verifikasi",chipset:"Perlu verifikasi varian",specNote:"Pastikan nama model dan spesifikasi Galaxy A57 5G cocok dengan varian resmi yang digunakan."},
{id:"HP027",name:"Xiaomi 17T",brand:"Xiaomi",price:8999000,performance:2026828,camera_score:5,battery:6500,display_score:5,ram:"12 GB",storage:"256/512 GB",chipset:"MediaTek Dimensity 8500-Ultra",specNote:"Spesifikasi mengikuti halaman resmi Xiaomi 17T; varian lokal perlu dicek."},
{id:"HP028",name:"Xiaomi 14T Pro",brand:"Xiaomi",price:8999000,performance:2129644,camera_score:5,battery:5000,display_score:5,ram:"12 GB",storage:"256/512 GB",chipset:"MediaTek Dimensity 9300+",specNote:"Konfigurasi resmi Xiaomi 14T Pro; cek varian lokal."},
{id:"HP029",name:"Samsung Galaxy S25 FE",brand:"Samsung",price:9999000,performance:2000659,camera_score:5,battery:4900,display_score:2,ram:"8 GB",storage:"128/256/512 GB",chipset:"Samsung Exynos 2400",specNote:"Kapasitas yang dijual dapat berbeda menurut pasar."},
{id:"HP030",name:"Samsung Galaxy S24 FE",brand:"Samsung",price:9999000,performance:1849346,camera_score:5,battery:4700,display_score:2,ram:"8 GB",storage:"128/256/512 GB",chipset:"Samsung Exynos 2400e",specNote:"Kapasitas yang dijual dapat berbeda menurut pasar."}
];

const criteria = [
 {key:"price",name:"Harga",type:"cost",hint:"Seberapa penting mendapatkan harga yang lebih murah?"},
 {key:"performance",name:"Performa",type:"benefit",hint:"Penting untuk gaming, multitasking, dan aplikasi berat."},
 {key:"camera_score",name:"Kamera",type:"benefit",hint:"Penting untuk foto dan video sehari-hari."},
 {key:"battery",name:"Baterai",type:"benefit",hint:"Penting untuk pemakaian lama tanpa sering mengisi daya."},
 {key:"display_score",name:"Layar",type:"benefit",hint:"Kualitas panel, refresh rate, resolusi, dan kecerahan."}
];

const $ = id => document.getElementById(id);
const rupiah = n => new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
const number = n => new Intl.NumberFormat("id-ID").format(n);

function renderCriteria(){
  $("criteriaGrid").innerHTML = criteria.map((c,i)=>`
    <div class="criteria-card">
      <label>${c.name}</label>
      <div class="hint">${c.hint}</div>
      <select id="w${i}">
        <option value="1">1 · Tidak penting</option>
        <option value="2">2 · Kurang penting</option>
        <option value="3" selected>3 · Penting</option>
        <option value="4">4 · Sangat penting</option>
      </select>
    </div>
  `).join("");
}

function weightsFromRaw(raw){
  const total = raw.reduce((a,b)=>a+b,0);
  return raw.map(x=>x/total);
}

function getWeights(){
  return weightsFromRaw(criteria.map((_,i)=>Number($("w"+i).value)));
}

function topsis(candidates, weights){
  if(candidates.length===1) return [{...candidates[0],score:1}];

  const columns = criteria.map(c=>candidates.map(x=>Number(x[c.key])));
  const denominators = columns.map(col=>Math.sqrt(col.reduce((sum,x)=>sum+x*x,0)));

  const normalized = candidates.map((_,i)=>
    criteria.map((_,j)=>columns[j][i]/(denominators[j]||1))
  );

  const weighted = normalized.map(row=>row.map((v,j)=>v*weights[j]));
  const idealPlus = [], idealMinus = [];

  criteria.forEach((c,j)=>{
    const col = weighted.map(row=>row[j]);
    idealPlus[j] = c.type==="benefit" ? Math.max(...col) : Math.min(...col);
    idealMinus[j] = c.type==="benefit" ? Math.min(...col) : Math.max(...col);
  });

  return candidates.map((x,i)=>{
    let plus=0, minus=0;
    criteria.forEach((_,j)=>{
      plus += (weighted[i][j]-idealPlus[j])**2;
      minus += (weighted[i][j]-idealMinus[j])**2;
    });
    const dp=Math.sqrt(plus), dm=Math.sqrt(minus);
    return {...x,score:dm/(dm+dp||1)};
  }).sort((a,b)=>b.score-a.score);
}

function explainWinner(w,weights,candidateCount){
  const sorted = criteria.map((c,i)=>({name:c.name,weight:weights[i]})).sort((a,b)=>b.weight-a.weight);
  const a=sorted[0], b=sorted[1];
  return `Dari ${candidateCount} smartphone yang masuk budget, ${w.name} memperoleh nilai TOPSIS tertinggi (${w.score.toFixed(4)}). Preferensi terbesar kamu adalah ${a.name} (${(a.weight*100).toFixed(1)}%) dan ${b.name} (${(b.weight*100).toFixed(1)}%), sehingga hasil akhir mengikuti kombinasi kebutuhan tersebut.`;
}

function showSpecs(id){
  const phone = smartphones.find(x => x.id === id);
  if(!phone) return;
  $("specModalTitle").textContent = phone.name;
  $("specModalPrice").textContent = rupiah(phone.price);
  $("specModalRam").textContent = phone.ram || "Belum tersedia";
  $("specModalStorage").textContent = phone.storage || "Belum tersedia";
  $("specModalChipset").textContent = phone.chipset || "Belum tersedia";
  $("specModalBattery").textContent = `${number(phone.battery)} mAh`;
  $("specModalNote").textContent = phone.specNote || "Konfigurasi dapat berbeda menurut wilayah dan varian.";
  $("specModal").classList.remove("hidden");
  document.body.classList.add("modal-open");
  $("specModalClose").focus();
}

function closeSpecs(){
  $("specModal").classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function renderResults(results,weights,budget){
  const winner=results[0];
  $("results").classList.remove("hidden");
  const selectedBrand=$("brandFilter").value;
  $("activeFilters").innerHTML=`<span class="filter-chip">${selectedBrand==="all"?"Semua merek":selectedBrand}</span><span class="filter-chip">Budget ≤ ${rupiah(budget)}</span><span class="filter-count">${results.length} dari ${smartphones.length} smartphone</span>`;
  $("winnerName").textContent=winner.name;
  $("winnerPrice").textContent=rupiah(winner.price);
  $("winnerScore").textContent=winner.score.toFixed(4);
  $("candidateCount").textContent=`${results.length} kandidat dalam budget`;
  $("winnerMeta").innerHTML=`
    <span class="meta-pill">Performa ${number(winner.performance)}</span>
    <span class="meta-pill">Kamera ${winner.camera_score}/5</span>
    <span class="meta-pill">Baterai ${number(winner.battery)} mAh</span>
    <span class="meta-pill">Layar ${winner.display_score}/5</span>
  `;
  $("winnerExplanation").textContent=explainWinner(winner,weights,results.length);
  $("winnerSpecsBtn").onclick=()=>showSpecs(winner.id);

  $("rankingBody").innerHTML=results.map((r,i)=>`
    <tr class="${i===0?"best":""}">
      <td>${String(i+1).padStart(2,"0")}</td>
      <td>${r.name}${i===0?'<span class="top-badge">TOP</span>':""}</td>
      <td>${rupiah(r.price)}</td>
      <td>${number(r.performance)}</td>
      <td>${r.camera_score}/5</td>
      <td>${number(r.battery)} mAh</td>
      <td>${r.display_score}/5</td>
      <td>${r.score.toFixed(4)}</td>
      <td><button class="btn-ghost table-detail-btn" type="button" data-spec-id="${r.id}">Detail ↗</button></td>
    </tr>
  `).join("");
  $("rankingBody").querySelectorAll("[data-spec-id]").forEach(btn=>{
    btn.addEventListener("click",()=>showSpecs(btn.dataset.specId));
  });

  runSensitivity(results.map(r=>smartphones.find(x=>x.id===r.id)));
  $("results").scrollIntoView({behavior:"smooth",block:"start"});
}

function runSensitivity(candidates){
  const counts=Object.fromEntries(candidates.map(x=>[x.id,0]));
  const rankSums=Object.fromEntries(candidates.map(x=>[x.id,0]));
  let total=0;

  for(let a=1;a<=4;a++) for(let b=1;b<=4;b++) for(let c=1;c<=4;c++)
  for(let d=1;d<=4;d++) for(let e=1;e<=4;e++){
    const weights=weightsFromRaw([a,b,c,d,e]);
    const ranked=topsis(candidates,weights);
    ranked.forEach((x,i)=>rankSums[x.id]+=i+1);
    counts[ranked[0].id]++;
    total++;
  }

  const rows=candidates.map(x=>({
    ...x,
    wins:counts[x.id],
    pct:counts[x.id]/total*100,
    avg:rankSums[x.id]/total
  })).sort((a,b)=>b.wins-a.wins || a.avg-b.avg);

  const leader=rows[0];
  $("sensitivityWinner").textContent=leader.name;
  $("sensitivityPct").textContent=`${leader.pct.toFixed(2)}% menjadi peringkat #1`;
  $("avgRank").textContent=leader.avg.toFixed(2);

  $("sensitivityBody").innerHTML=rows.map((x,i)=>`
    <tr class="${i===0?"best":""}">
      <td>${x.name}</td>
      <td>${x.wins}/1024</td>
      <td>${x.pct.toFixed(2)}%</td>
      <td>${x.avg.toFixed(3)}</td>
    </tr>
  `).join("");
}

function recommend(){
  const budgetInput=$("budget");
  const budget=Number(budgetInput.value);
  if(!budgetInput.value || !Number.isFinite(budget) || budget<1000000){
    alert("Budget minimum adalah Rp1.000.000.");
    budgetInput.value=1000000;
    budgetInput.focus();
    return;
  }
  if(budget>10000000){
    alert("Budget maksimum adalah Rp10.000.000 sesuai rentang dataset.");
    budgetInput.value=10000000;
    budgetInput.focus();
    return;
  }
  const selectedBrand=$("brandFilter").value;
  const candidates=smartphones.filter(x=>x.price<=budget && (selectedBrand==="all" || x.brand===selectedBrand));
  if(!candidates.length){
    alert("Tidak ada smartphone yang sesuai dengan budget tersebut.");
    return;
  }
  const weights=getWeights();
  const results=topsis(candidates,weights);
  renderResults(results,weights,budget);
}

function reset(){
  $("budget").value=5000000;
  $("brandFilter").value="all";
  criteria.forEach((_,i)=>$("w"+i).value=3);
  $("results").classList.add("hidden");
  window.scrollTo({top:0,behavior:"smooth"});
}

renderCriteria();
$("recommendBtn").addEventListener("click",recommend);
$("resetBtn").addEventListener("click",reset);
$("changeBtn").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
$("budget").addEventListener("change",()=>{
  const input=$("budget");
  if(input.value!=="" && Number(input.value)<1000000) input.value=1000000;
  if(input.value!=="" && Number(input.value)>10000000) input.value=10000000;
});
$("budget").addEventListener("keydown",e=>{if(e.key==="Enter") recommend();});

$("specModalClose").addEventListener("click",closeSpecs);
$("specModalBackdrop").addEventListener("click",closeSpecs);
document.addEventListener("keydown",e=>{if(e.key==="Escape") closeSpecs();});
