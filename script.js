// DE PEYE TOURS · Since 2020
const WHATSAPP_NUMBER = "525573538114";

const tours = [
 {name:"Tecolutla",type:"playa",tag:"PLAYA",meta:"Veracruz · Noviembre 2026",price:"$1,999",desc:"Mar, arena y descanso. Un fin de semana para disfrutar la costa veracruzana.",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85",duration:"3 días · 2 noches",route:["Tecámac","Tecolutla","Playa","Centro de Tecolutla"],included:["Transporte turístico","2 noches de hospedaje","Coordinación del grupo"],highlights:["Tiempo libre en playa","Recorrido por Tecolutla","Espacio para disfrutar la gastronomía local"]},
 {name:"Veracruz & Boca del Río",type:"playa",tag:"PLAYA",meta:"Veracruz · Fecha por confirmar",price:"$2,199",desc:"Mar, malecón, gastronomía y los puntos más conocidos de la zona conurbada.",img:"https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=85",duration:"3 días · 2 noches",route:["Tecámac","Veracruz","Malecón","Boca del Río"],included:["Transporte turístico","Hospedaje","Coordinación del grupo"],highlights:["Malecón de Veracruz","Boca del Río","Tiempo libre para conocer y comer"]},
 {name:"Acapulco",type:"playa",tag:"PLAYA",meta:"Guerrero · Fecha por confirmar",price:"$2,299",desc:"Una escapada de playa para disfrutar del mar, el paisaje y el ambiente de Acapulco.",img:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85",duration:"3 días · 2 noches",route:["Tecámac","Acapulco","Zona Costera","Playa"],included:["Transporte turístico","Hospedaje","Coordinación del grupo"],highlights:["Tiempo libre frente al mar","Zona costera","Experiencia de fin de semana"]},
 {name:"Huasca & Real del Monte",type:"naturaleza",tag:"NATURALEZA",meta:"Hidalgo · Fecha por confirmar",price:"$1,699",desc:"Bosque, pueblos y paisajes para una escapada diferente.",img:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",duration:"2 días · 1 noche",route:["Tecámac","Huasca de Ocampo","Prismas Basálticos","Real del Monte"],included:["Transporte turístico","Hospedaje","Coordinación del grupo"],highlights:["Prismas Basálticos","Pueblo de Huasca","Real del Monte"]},
 {name:"Zacatlán & Chignahuapan",type:"pueblos",tag:"PUEBLOS",meta:"Puebla · Fecha por confirmar",price:"$1,799",desc:"Pueblos mágicos, naturaleza y gastronomía en una sola salida.",img:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",duration:"2 días · 1 noche",route:["Tecámac","Zacatlán","Mirador","Chignahuapan"],included:["Transporte turístico","Hospedaje","Coordinación del grupo"],highlights:["Centro de Zacatlán","Paisajes y miradores","Chignahuapan"]},
 {name:"Bernal & Tequisquiapan",type:"pueblos",tag:"PUEBLOS",meta:"Querétaro · Fecha por confirmar",price:"$1,899",desc:"Pueblo, viñedos y un fin de semana para disfrutar sin prisas.",img:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=85",duration:"2 días · 1 noche",route:["Tecámac","Bernal","Peña de Bernal","Tequisquiapan"],included:["Transporte turístico","Hospedaje","Coordinación del grupo"],highlights:["Pueblo de Bernal","Vista de la Peña","Tiempo libre en Tequisquiapan"]}
];

const grid=document.querySelector("#tourGrid");
function render(filter="all"){
 grid.innerHTML=tours.filter(t=>filter==="all"||t.type===filter).map(t=>`
 <article class="tour">
  <div class="tour-img" style="background-image:linear-gradient(180deg,transparent 55%,rgba(0,0,0,.28)),url('${t.img}')"><span class="tag">${t.tag}</span></div>
  <div class="tour-body"><span class="tour-meta">${t.meta}</span><h3>${t.name}</h3><p>${t.desc}</p>
   <div class="tour-bottom"><div class="price"><small>REFERENCIA · POR PERSONA</small><strong>${t.price}*</strong></div><button class="btn ghost experience" data-tour="${t.name}">Ver experiencia</button></div>
  </div>
 </article>`).join("");
 document.querySelectorAll(".experience").forEach(b=>b.addEventListener("click",()=>openTour(b.dataset.tour)));
}
function openTour(name){
 const t=tours.find(x=>x.name===name); if(!t)return;
 let modal=document.querySelector("#tourModal");
 if(!modal){modal=document.createElement("div");modal.id="tourModal";modal.className="tour-modal";document.body.appendChild(modal);}
 const route=t.route.map((r,i)=>'<div class="route-stop"><b>'+String(i+1).padStart(2,"0")+'</b><span>'+r+'</span></div>').join("");
 const highlights=t.highlights.map(x=>'<li>✓ '+x+'</li>').join("");
 const included=t.included.map(x=>'<li>✓ '+x+'</li>').join("");
 modal.innerHTML='<div class="tour-modal-backdrop" data-close></div><div class="tour-modal-card"><button class="modal-close" data-close aria-label="Cerrar">×</button><div class="modal-photo" style="background-image:linear-gradient(180deg,transparent,rgba(0,0,0,.35)),url(\''+t.img+'\')"><span class="tag">'+t.tag+'</span></div><div class="modal-content"><p class="eyebrow">'+t.meta+'</p><h2>'+t.name+'</h2><p class="modal-desc">'+t.desc+'</p><div class="modal-facts"><span>◷ '+t.duration+'</span><span>◉ Desde Tecámac</span><span>◈ '+t.price+'*</span></div><h3>El recorrido</h3><div class="route">'+route+'</div><h3>Lo que vas a vivir</h3><ul class="highlights">'+highlights+'</ul><h3>Incluye</h3><ul class="highlights">'+included+'</ul><p class="modal-note">El recorrido es una referencia. El programa final, horarios y hospedaje se confirman para cada salida.</p><button class="btn primary modal-reserve" data-tour="'+t.name+'">Reservar este viaje</button></div></div>';
 modal.classList.add("open");
 modal.querySelectorAll("[data-close]").forEach(x=>x.addEventListener("click",closeModal));
 modal.querySelector(".modal-reserve").addEventListener("click",()=>reserve(t.name));
}
function closeModal(){document.querySelector("#tourModal")?.classList.remove("open")}
function reserve(tour){
 const message="Hola, DE PEYE TOURS. Me interesa reservar el viaje a "+tour+". Somos ___ personas. Quisiera conocer disponibilidad, precio final, qué incluye y formas de pago.";
 window.open("https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(message),"_blank");
}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.filter)}));
document.querySelector(".menu").addEventListener("click",()=>document.querySelector(".nav").classList.toggle("open"));
render();
