// DE PEYE TOURS · Since 2020
const WHATSAPP_NUMBER="525573538114";
const tours=[
{name:"Tecolutla",type:"playa",tag:"PLAYA",meta:"Veracruz · Noviembre 2026",price:"$1,999",desc:"Mar, arena y descanso. Un fin de semana para disfrutar la costa veracruzana.",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85",duration:"3 días · 2 noches",route:["Tecámac","Tecolutla","Playa","Centro de Tecolutla"],included:["Transporte turístico","2 noches de hospedaje","Coordinación del grupo"],highlights:["Tiempo libre en playa","Recorrido por Tecolutla","Espacio para disfrutar la gastronomía local"]},
{name:"Veracruz & Boca del Río",type:"playa",tag:"PLAYA",meta:"Veracruz · Fecha por confirmar",price:"$2,199",desc:"Mar, malecón, gastronomía y los puntos más conocidos de la zona conurbada.",img:"https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=85",duration:"3 días · 2 noches",route:["Tecámac","Veracruz","Malecón","Boca del Río"],included:["Transporte turístico","Hospedaje","Coordinación del grupo"],highlights:["Malecón de Veracruz","Boca del Río","Tiempo libre para conocer y comer"]},
{name:"Acapulco",type:"playa",tag:"PLAYA",meta:"Guerrero · Fecha por confirmar",price:"$2,299",desc:"Una escapada de playa para disfrutar del mar, el paisaje y el ambiente de Acapulco.",img:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85",duration:"3 días · 2 noches",route:["Tecámac","Acapulco","Zona Costera","Playa"],included:["Transporte turístico","Hospedaje","Coordinación del grupo"],highlights:["Tiempo libre frente al mar","Zona costera","Experiencia de fin de semana"]},
{name:"Huasca & Real del Monte",type:"naturaleza",tag:"NATURALEZA",meta:"Hidalgo · Fecha por confirmar",price:"$1,699",desc:"Bosque, pueblos y paisajes para una escapada diferente.",img:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",duration:"2 días · 1 noche",route:["Tecámac","Huasca de Ocampo","Prismas Basálticos","Real del Monte"],included:["Transporte turístico","Hospedaje","Coordinación del grupo"],highlights:["Prismas Basálticos","Pueblo de Huasca","Real del Monte"]},
{name:"Zacatlán & Chignahuapan",type:"pueblos",tag:"PUEBLOS",meta:"Puebla · Fecha por confirmar",price:"$1,799",desc:"Pueblos mágicos, naturaleza y gastronomía en una sola salida.",img:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",duration:"2 días · 1 noche",route:["Tecámac","Zacatlán","Mirador","Chignahuapan"],included:["Transporte turístico","Hospedaje","Coordinación del grupo"],highlights:["Centro de Zacatlán","Paisajes y miradores","Chignahuapan"]},
{name:"Bernal & Tequisquiapan",type:"pueblos",tag:"PUEBLOS",meta:"Querétaro · Fecha por confirmar",price:"$1,899",desc:"Pueblo, viñedos y un fin de semana para disfrutar sin prisas.",img:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=85",duration:"2 días · 1 noche",route:["Tecámac","Bernal","Peña de Bernal","Tequisquiapan"],included:["Transporte turístico","Hospedaje","Coordinación del grupo"],highlights:["Pueblo de Bernal","Vista de la Peña","Tiempo libre en Tequisquiapan"]}
];
const grid=document.querySelector("#tourGrid");
function render(filter="all"){grid.innerHTML=tours.filter(t=>filter==="all"||t.type===filter).map(t=>'<article class="tour"><div class="tour-img" style="background-image:linear-gradient(180deg,transparent 55%,rgba(0,0,0,.28)),url("'+t.img+'")"><span class="tag">'+t.tag+'</span></div><div class="tour-body"><span class="tour-meta">'+t.meta+'</span><h3>'+t.name+'</h3><p>'+t.desc+'</p><div class="tour-bottom"><div class="price"><small>REFERENCIA · POR PERSONA</small><strong>'+t.price+'*</strong></div><button class="btn ghost experience" data-tour="'+t.name+'">Ver experiencia</button></div></div></article>').join("");document.querySelectorAll(".experience").forEach(b=>b.addEventListener("click",()=>openTour(b.dataset.tour)));}
function openTour(name){const t=tours.find(x=>x.name===name);if(!t)return;let modal=document.querySelector("#tourModal");if(!modal){modal=document.createElement("div");modal.id="tourModal";modal.className="tour-modal";document.body.appendChild(modal)}const route=t.route.map((r,i)=>'<div class="route-stop"><b>'+String(i+1).padStart(2,"0")+'</b><span>'+r+'</span></div>').join("");const highlights=t.highlights.map(x=>"<li>✓ "+x+"</li>").join("");const included=t.included.map(x=>"<li>✓ "+x+"</li>").join("");modal.innerHTML='<div class="tour-modal-backdrop" data-close></div><div class="tour-modal-card"><button class="modal-close" data-close aria-label="Cerrar">×</button><div class="modal-photo" style="background-image:linear-gradient(180deg,transparent,rgba(0,0,0,.35)),url(\''+t.img+'\')"><span class="tag">'+t.tag+'</span></div><div class="modal-content"><p class="eyebrow">'+t.meta+'</p><h2>'+t.name+'</h2><p class="modal-desc">'+t.desc+'</p><div class="modal-facts"><span>◷ '+t.duration+'</span><span>◉ Desde Tecámac</span><span>◈ '+t.price+'*</span></div><h3>El recorrido</h3><div class="route">'+route+'</div><h3>Lo que vas a vivir</h3><ul class="highlights">'+highlights+'</ul><h3>Incluye</h3><ul class="highlights">'+included+'</ul><p class="modal-note">El recorrido es una referencia. El programa final, horarios y hospedaje se confirman para cada salida.</p><button class="btn primary modal-reserve">Reservar este viaje</button></div></div>';modal.classList.add("open");modal.querySelectorAll("[data-close]").forEach(x=>x.addEventListener("click",closeModal));modal.querySelector(".modal-reserve").addEventListener("click",()=>reserve(t.name));}
function closeModal(){document.querySelector("#tourModal")?.classList.remove("open")}
function reserve(tour){const message="Hola, DE PEYE TOURS. Me interesa reservar el viaje a "+tour+". Somos ___ personas. Quisiera conocer disponibilidad, precio final, qué incluye y formas de pago.";window.open("https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(message),"_blank")}
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.filter)}));
document.querySelector(".menu").addEventListener("click",()=>document.querySelector(".nav").classList.toggle("open"));
document.querySelectorAll(".reserve").forEach(b=>b.addEventListener("click",()=>reserve(b.dataset.tour)));
document.querySelectorAll("[data-quick]").forEach(b=>b.addEventListener("click",()=>{document.querySelector("#botLaunch").click();setTimeout(()=>botChoose(b.dataset.quick),120)}));

const botLaunch=document.querySelector("#botLaunch"),chat=document.querySelector("#chat"),chatBody=document.querySelector("#chatBody"),chatOptions=document.querySelector("#chatOptions"),chatForm=document.querySelector("#chatForm"),chatInput=document.querySelector("#chatInput");

function scrollChat(){chatBody.scrollTop=chatBody.scrollHeight}
function addBot(text){chatBody.insertAdjacentHTML("beforeend",'<div class="msg bot-msg">'+text+'<span class="bot-time">PeyeBot · ahora</span></div>');scrollChat()}
function addUser(text){chatBody.insertAdjacentHTML("beforeend",'<div class="msg user-msg">'+text+"</div>");scrollChat()}
function options(items){chatOptions.innerHTML=items.map(i=>'<button type="button" data-bot="'+i[0]+'">'+i[1]+"</button>").join("");chatOptions.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>botChoose(b.dataset.bot)))}
function showTyping(){const el=document.createElement("div");el.className="msg bot-msg";el.id="typing";el.innerHTML='<div class="bot-typing"><span></span><span></span><span></span></div>';chatBody.appendChild(el);scrollChat();return el}
function botAnswer(text,delay=350){const t=showTyping();setTimeout(()=>{t.remove();addBot(text)},delay)}
function tourCard(t){return '<div class="bot-tour"><img src="'+t.img+'" alt="'+t.name+'"><div class="bot-tour-content"><b>'+t.name+'</b><span>'+t.duration+' · desde '+t.price+'*</span><button type="button" data-tour-card="'+t.name+'">Ver experiencia</button></div></div>'}
function showTours(list){const cards=list.map(t=>tourCard(t)).join("");addBot(cards);chatBody.querySelectorAll("[data-tour-card]").forEach(b=>b.addEventListener("click",()=>openTour(b.dataset.tourCard)))}
function resetOptions(){options([["playa","🌊 Quiero playa"],["pueblos","🏘️ Pueblos"],["naturaleza","🌲 Naturaleza"],["precio","💰 Por precio"]])}
function openBot(){
 chat.classList.add("open");chat.setAttribute("aria-hidden","false");
 if(!chatBody.children.length){
   addBot("¡Hola! Soy <b>PeyeBot</b> ✦, el asistente de DE PEYE TOURS.");
   addBot("Te ayudo a encontrar una escapada desde Tecámac. Puedes preguntarme lo que quieras o elegir una opción:");
   resetOptions();
 }
 setTimeout(()=>chatInput?.focus(),80);
}
function sendWhatsApp(){window.open("https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent("Hola DE PEYE TOURS. Vi su página y quiero ayuda para elegir una escapada."),"_blank")}
function botChoose(choice){
 const labels={playa:"Quiero playa",pueblos:"Quiero pueblos",naturaleza:"Quiero naturaleza",precio:"Quiero ver opciones por precio",Tecolutla:"Quiero ver Tecolutla",Huasca:"Quiero ver Huasca"};
 if(labels[choice])addUser(labels[choice]);
 if(choice==="playa"){const list=tours.filter(t=>t.type==="playa");botAnswer("Si lo que necesitas es mar y desconectarte, estas son las opciones que tenemos como referencia:");setTimeout(()=>{showTours(list);options([["precio","💰 Comparar por precio"],["whatsapp","Hablar con DE PEYE TOURS"],["restart","Empezar de nuevo"]])},430)}
 else if(choice==="pueblos"){const list=tours.filter(t=>t.type==="pueblos");botAnswer("Si prefieres caminar, conocer lugares y comer rico, mira estas escapadas:");setTimeout(()=>{showTours(list);options([["naturaleza","🌲 Ver naturaleza"],["whatsapp","Hablar con nosotros"],["restart","Empezar de nuevo"]])},430)}
 else if(choice==="naturaleza"){const list=tours.filter(t=>t.type==="naturaleza");botAnswer("Para cambiar ciudad por paisajes y pueblos, esta es la opción disponible como referencia:");setTimeout(()=>{showTours(list);options([["whatsapp","Consultar disponibilidad"],["restart","Empezar de nuevo"]])},430)}
 else if(choice==="precio"){const sorted=[...tours].sort((a,b)=>parseInt(a.price.replace(/\D/g,""))-parseInt(b.price.replace(/\D/g,"")));botAnswer("Te puedo ordenar las opciones por el precio de referencia. Ojo: son precios de diseño y deben confirmarse para cada salida.");setTimeout(()=>{showTours(sorted);options([["whatsapp","Consultar precio real"],["restart","Empezar de nuevo"]])},430)}
 else if(choice==="whatsapp"){sendWhatsApp()}
 else if(choice==="restart"){chatBody.innerHTML="";chatOptions.innerHTML="";openBot()}
 else if(choice==="Tecolutla"){openTour("Tecolutla")}
 else if(choice==="Huasca"){openTour("Huasca & Real del Monte")}
}
function processMessage(raw){
 const text=raw.trim();if(!text)return;
 addUser(text);chatInput.value="";chatOptions.innerHTML="";
 const q=text.toLowerCase();
 if(/(hola|buenas|hey|qué tal)/.test(q)){botAnswer("¡Hola! ✦ Cuéntame qué buscas: playa, pueblos, naturaleza o algo que no pase de cierto presupuesto.");setTimeout(resetOptions,450);return}
 if(/(playa|mar|arena|costa|calor)/.test(q)){botChoose("playa");return}
 if(/(pueblo|pueblos|bern(al|al)|tequis|zacatl(á|a)n|chignahuapan)/.test(q)){botChoose("pueblos");return}
 if(/(naturaleza|bosque|montaña|montana|prismas|huasca|real del monte)/.test(q)){botChoose("naturaleza");return}
 if(/(precio|barato|econ(ó|o)mico|economico|cuesta|costo|presupuesto|pesos|\$)/.test(q)){botChoose("precio");return}
 if(/(incluye|incluido|hotel|hospedaje|transporte)/.test(q)){botAnswer("En cada experiencia puedes revisar lo que está considerado. El hotel, transporte, horarios y precio final se confirman antes de reservar porque dependen de la salida.");setTimeout(()=>options([["playa","🌊 Ver playa"],["pueblos","🏘️ Ver pueblos"],["whatsapp","Preguntar por WhatsApp"]]),450);return}
 if(/(recomiendas|recomienda|mejor|cuál|cual|ayuda|no sé|no se)/.test(q)){botAnswer("Claro. Dime solo una cosa: ¿quieres <b>playa</b>, <b>pueblo</b>, <b>naturaleza</b> o algo <b>económico</b>? Con eso te enseño opciones.");setTimeout(resetOptions,450);return}
 if(/(whatsapp|persona|asesor|humano|reservar|reserva)/.test(q)){botAnswer("Claro. Te paso directo con DE PEYE TOURS por WhatsApp para revisar disponibilidad y precio final.");setTimeout(sendWhatsApp,450);return}
 botAnswer("Puedo ayudarte con destinos, precios de referencia, duración y qué incluye cada experiencia. Por ejemplo: <b>“quiero playa”</b>, <b>“algo económico”</b> o <b>“¿qué incluye?”</b>.",500);setTimeout(resetOptions,650)
}
botLaunch.addEventListener("click",openBot);
document.querySelector("#chatClose").addEventListener("click",()=>{chat.classList.remove("open");chat.setAttribute("aria-hidden","true")});
chatForm.addEventListener("submit",e=>{e.preventDefault();processMessage(chatInput.value)});
document.querySelectorAll("[data-quick]").forEach(b=>b.addEventListener("click",()=>{openBot();setTimeout(()=>botChoose(b.dataset.quick),180)}));
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeModal();chat.classList.remove("open")}});
render();
