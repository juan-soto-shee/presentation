const galleries={
  grinding:['mol1.png','mol2.png','mol3.png','mol4.png'].map(f=>'assets/img/software/grinding/'+f),
  flotation:['flot1.png','flot2.png','flot3.png'].map(f=>'assets/img/software/flotation/'+f),
  organizer:['org1.png','org2.png'].map(f=>'assets/img/software/organizer/'+f),
  modelos:['mat1.png','mat2.png','mat3.png'].map(f=>'assets/img/software/modelos/'+f),
  stats:['stats1.png','stats2.png','stats3.png','stats4.png'].map(f=>'assets/img/software/stats/'+f),
  lab:['met1.png','met2.png','met3.png'].map(f=>'assets/img/software/lab/'+f),
  anclajes:['mc1.png','mc2.png'].map(f=>'assets/img/software/anclajes/'+f)
};
const reveal=()=>document.querySelectorAll('.reveal').forEach(el=>{if(el.getBoundingClientRect().top<innerHeight-80)el.classList.add('visible')});
addEventListener('scroll',reveal);addEventListener('load',reveal);
document.querySelector('.menu-toggle').addEventListener('click',()=>document.querySelector('.nav').classList.toggle('open'));
let current=[],idx=0;const lb=document.getElementById('lightbox'),img=lb.querySelector('img'),cap=lb.querySelector('p');
function show(){img.src=current[idx];cap.textContent=`Captura ${idx+1} de ${current.length}`;lb.classList.add('active');lb.setAttribute('aria-hidden','false')}
document.querySelectorAll('.software-card').forEach(card=>card.addEventListener('click',()=>{current=galleries[card.dataset.gallery];idx=0;show()}));
lb.querySelector('.close').onclick=()=>{lb.classList.remove('active');lb.setAttribute('aria-hidden','true')};
lb.querySelector('.prev').onclick=()=>{idx=(idx-1+current.length)%current.length;show()};
lb.querySelector('.next').onclick=()=>{idx=(idx+1)%current.length;show()};
addEventListener('keydown',e=>{if(!lb.classList.contains('active'))return;if(e.key==='Escape')lb.querySelector('.close').click();if(e.key==='ArrowRight')lb.querySelector('.next').click();if(e.key==='ArrowLeft')lb.querySelector('.prev').click();});
