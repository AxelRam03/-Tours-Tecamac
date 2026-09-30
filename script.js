// WhatsApp oficial de DE PEYE TOURS.
const WHATSAPP_NUMBER = "525573538114";

const tours = [
 {name:"Tecolutla",type:"playa",tag:"PLAYA",meta:"Veracruz · Noviembre 2026",price:"$1,999",desc:"Mar, arena y descanso. Propuesta de fin de semana desde Tecámac.",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"},
 {name:"Veracruz & Boca del Río",type:"playa",tag:"PLAYA",meta:"Veracruz · Fecha por confirmar",price:"$2,199",desc:"Malecón, gastronomía, playa y una escapada con ambiente.",img:"https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80"},
 {name:"Acapulco",type:"playa",tag:"PLAYA",meta:"Guerrero · Fecha por confirmar",price:"$2,299",desc:"Un clásico de playa para desconectarte durante el fin de semana.",img:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"},
 {name:"Huasca & Real del Monte",type:"naturaleza",tag:"NATURALEZA",meta:"Hidalgo · Fecha por confirmar",price:"$1,699",desc:"Bosque, pueblos y paisajes para una escapada diferente.",img:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80"},
 {name:"Zacatlán & Chignahuapan",type:"pueblos",tag:"PUEBLOS",meta:"Puebla · Fecha por confirmar",price:"$1,799",desc:"Pueblos mágicos, naturaleza y gastronomía en una sola salida.",img:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"},
 {name:"Bernal & Tequisquiapan",type:"pueblos",tag:"PUEBLOS",meta:"Querétaro · Fecha por confirmar",price:"$1,899",desc:"Pueblo, viñedos y un fin de semana para disfrutar sin prisas.",img:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80"}
];

const grid=document.querySelector("#tourGrid");
function render(filter="all"){
 grid.innerHTML=tours.filter(t=>filter==="all"||t.type===filter).map(t=>`
 <article class="tour">
  <div class="tour-img" style="background-image:linear-gradient(180deg,transparent 55%,rgba(0,0,0,.28)),url('${t.img}')"><span class="tag">${t.tag}</span></div>
  <div class="tour-body"><span class="tour-meta">${t.meta}</span><h3>${t.name}</h3><p>${t.desc}</p>
   <div class="tour-bottom"><div class="price"><small>REFERENCIA · POR PERSONA</small><strong>${t.price}*</strong></div><button class="btn primary reserve" data-tour="${t.name}">Reservar</button></div>
  </div>
 </article>`).join("");
 document.querySelectorAll(".reserve").forEach(b=>b.addEventListener("click",()=>reserve(b.dataset.tour)));
}
function reserve(tour){
 const message=`Hola, DE PEYE TOURS. Me interesa reservar el tour a ${tour}. Somos ___ personas y salimos desde Tecámac. Quisiera conocer disponibilidad, precio final, qué incluye y formas de pago.`;
 window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,"_blank");
}
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.filter)}));
document.querySelector(".menu").addEventListener("click",()=>document.querySelector(".nav").classList.toggle("open"));
render();
