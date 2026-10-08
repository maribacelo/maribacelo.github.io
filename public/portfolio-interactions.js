(function(){
 const toast=document.querySelector('.copy-toast');let toastTimer;
 const notify=message=>{if(!toast)return;toast.textContent=message;toast.classList.toggle('is-visible',true);clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('is-visible'),4500);};
 document.querySelectorAll('[data-copy-email]').forEach(button=>button.addEventListener('click',async()=>{
  const address=button.dataset.copyEmail;let copied=false;
  try{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(address);copied=true;}}catch{}
  if(!copied){
   const input=document.createElement('textarea');input.value=address;input.setAttribute('readonly','');input.style.position='fixed';input.style.opacity='0';document.body.append(input);input.select();
   try{copied=document.execCommand('copy');}catch{}input.remove();button.focus();
  }
  notify(copied?'Email copied to clipboard.':'Could not copy automatically. Please select the address or use “Open email app”.');
 }));
 const sectionLinks=[...document.querySelectorAll('.case-nav a[href^="#"]')];
 if('IntersectionObserver' in window&&sectionLinks.length){
  const targets=sectionLinks.map(a=>document.getElementById(a.hash.slice(1))).filter(Boolean);
  const observer=new IntersectionObserver(entries=>{const active=entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top)[0];if(!active)return;sectionLinks.forEach(a=>{if(a.hash==='#'+active.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});},{rootMargin:'-10% 0px -65% 0px',threshold:0});targets.forEach(t=>observer.observe(t));
 }

})();
