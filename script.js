const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const light=document.getElementById('lightbox'), img=document.getElementById('lightImg');
document.querySelectorAll('.photo').forEach(p=>p.addEventListener('click',()=>{img.src=p.dataset.src;light.classList.add('open')}));
document.getElementById('closeBox').onclick=()=>light.classList.remove('open'); light.addEventListener('click',e=>{if(e.target===light) light.classList.remove('open')});
function heart(){const h=document.createElement('div');h.className='heart';h.textContent=Math.random()>.5?'♡':'✦';h.style.left=Math.random()*100+'vw';h.style.fontSize=(14+Math.random()*24)+'px';h.style.animationDuration=(5+Math.random()*5)+'s';document.body.appendChild(h);setTimeout(()=>h.remove(),10000)} setInterval(heart,650);

const music = document.getElementById('bgMusic');
if (music) {
  music.volume = 0.55;
  music.autoplay = true;
  music.loop = true;
  const startMusic = () => music.play().catch(() => {});
  document.addEventListener('DOMContentLoaded', startMusic);
  window.addEventListener('load', startMusic);
  // Fallback: if the browser blocks sound autoplay, the first tiny interaction starts it automatically.
  ['click','touchstart','keydown','scroll','mousemove'].forEach(evt => {
    window.addEventListener(evt, () => { if (music.paused) startMusic(); }, { once:true, passive:true });
  });
}
