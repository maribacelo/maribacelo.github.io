(()=>{
 const script=document.currentScript||document.querySelector('script[src$="app.js"]');
 const siteRoot=new URL('.',script?.src||new URL('app.js',document.baseURI).href);
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#main-nav');
 toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open)});
 nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{toggle.setAttribute('aria-expanded','false');nav.classList.remove('is-open')}));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('is-open')){toggle.setAttribute('aria-expanded','false');nav.classList.remove('is-open');toggle.focus()}});
 const perspectives=[
 {label:'CONNECTING BUSINESS AND CUSTOMER NEEDS',title:'Turn a broad ambition into a clearer direction.',copy:'Research, customer understanding and stakeholder alignment help make priorities explicit, and bring uncertainty into the conversation before it becomes a delivery problem.',link:'/work/customer-service-strategy/',text:'Explore customer service strategy ↗'},
 {label:'CONNECTING EXPERIENCE AND OPERATIONS',title:'Make the system behind the service visible.',copy:'Journeys show the experience. Blueprints, process maps and responsibility models connect it to the people, dependencies and routines needed to deliver it.',link:'/work/innovation-services/',text:'Explore connected innovation services ↗'},
 {label:'CONNECTING INSIGHT AND DELIVERY',title:'Use evidence to shape the next decision.',copy:'Behavioural data, qualitative research and validation work together. In the logistics product, regular measurement fed into feature exploration, testing and design handoff.',link:'/work/global-logistics/',text:'Explore the logistics product ↗'}];
 const tabs=[...document.querySelectorAll('[data-perspective]')];
 const selectTab=(i,focus=false)=>{const d=perspectives[i];if(!d)return;tabs.forEach((t,j)=>{t.setAttribute('aria-selected',String(j===i));t.tabIndex=j===i?0:-1});document.querySelector('#perspective-panel').setAttribute('aria-labelledby',`perspective-${i}`);['label','title','copy'].forEach(k=>document.querySelector(`#perspective-${k}`).textContent=d[k]);const a=document.querySelector('#perspective-link');a.href=new URL(d.link.replace(/^\//,''),siteRoot).href;a.textContent=d.text;if(focus)tabs[i].focus()};
 tabs.forEach((t,i)=>{t.addEventListener('click',()=>selectTab(i));t.addEventListener('keydown',e=>{let n;if(e.key==='ArrowRight')n=(i+1)%tabs.length;if(e.key==='ArrowLeft')n=(i+tabs.length-1)%tabs.length;if(e.key==='Home')n=0;if(e.key==='End')n=tabs.length-1;if(n!==undefined){e.preventDefault();selectTab(n,true)}})});
 document.querySelectorAll('[data-deck]').forEach(deck=>{
  const track=deck.querySelector('.deck-track'),slides=[...track.querySelectorAll('.deck-slide')];
  const prev=deck.querySelector('[data-deck-prev]'),next=deck.querySelector('[data-deck-next]'),status=deck.querySelector('[data-deck-status]');
  let index=0,pending=false;
  const offset=i=>slides[i].offsetLeft-slides[0].offsetLeft;
  const update=()=>{let closest=0,distance=Infinity;slides.forEach((slide,i)=>{const d=Math.abs(offset(i)-track.scrollLeft);if(d<distance){distance=d;closest=i}});index=closest;prev.disabled=index===0;next.disabled=index===slides.length-1;status.textContent=`${index+1} / ${slides.length}`;};
  const go=i=>{i=Math.max(0,Math.min(slides.length-1,i));const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;track.scrollTo({left:offset(i),behavior:reduced?'instant':'smooth'});};
  prev.addEventListener('click',()=>go(index-1));next.addEventListener('click',()=>go(index+1));
  track.addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(()=>{pending=false;update()})}},{passive:true});
  track.addEventListener('keydown',e=>{if(e.target!==track)return;let target;if(e.key==='ArrowRight')target=index+1;if(e.key==='ArrowLeft')target=index-1;if(e.key==='Home')target=0;if(e.key==='End')target=slides.length-1;if(target!==undefined){e.preventDefault();go(target)}});
  let drag=null,suppressClick=false;
  track.addEventListener('pointerdown',e=>{
   if(e.pointerType!=='mouse'||e.button!==0)return;
   suppressClick=false;drag={id:e.pointerId,x:e.clientX,y:e.clientY,left:track.scrollLeft,active:false};
  });
  track.addEventListener('pointermove',e=>{
   if(!drag||e.pointerId!==drag.id)return;
   const dx=e.clientX-drag.x,dy=e.clientY-drag.y;
   if(!drag.active&&Math.abs(dx)>6&&Math.abs(dx)>Math.abs(dy)){
    drag.active=true;track.setPointerCapture?.(drag.id);track.classList.toggle('is-dragging',true);
   }
   if(drag.active){e.preventDefault();track.scrollLeft=drag.left-dx;update();}
  });
  const endDrag=e=>{
   if(!drag||e.pointerId!==drag.id)return;
   const wasDragging=drag.active,id=drag.id;drag=null;
   track.classList.remove('is-dragging');
   if(track.hasPointerCapture?.(id))track.releasePointerCapture(id);
   if(wasDragging){suppressClick=true;update();go(index);}
  };
  track.addEventListener('pointerup',endDrag);
  track.addEventListener('pointercancel',endDrag);
  track.addEventListener('lostpointercapture',endDrag);
  track.addEventListener('pointerleave',e=>{if(drag&&!drag.active)drag=null;});
  track.addEventListener('dragstart',e=>e.preventDefault());
  track.addEventListener('click',e=>{if(suppressClick&&e.detail!==0){e.preventDefault();e.stopPropagation();suppressClick=false;}else if(e.detail===0){suppressClick=false;}},true);
  window.addEventListener('resize',update);update();
 });
 const dialog=document.querySelector('.image-dialog');let opener=null;
 const zoom=dialog?.querySelector('.dialog-zoom'),imageWrap=dialog?.querySelector('.dialog-image-wrap');
 const resetZoom=()=>{dialog?.classList.remove('is-zoomed');zoom?.setAttribute('aria-pressed','false');if(zoom)zoom.textContent='Zoom in ＋';if(imageWrap){imageWrap.scrollLeft=0;imageWrap.scrollTop=0}};
 zoom?.addEventListener('click',()=>{const active=zoom.getAttribute('aria-pressed')!=='true';zoom.setAttribute('aria-pressed',String(active));zoom.textContent=active?'Fit image −':'Zoom in ＋';dialog.classList.toggle('is-zoomed',active);if(!active&&imageWrap){imageWrap.scrollLeft=0;imageWrap.scrollTop=0}});
 document.querySelectorAll('.image-open').forEach(b=>b.addEventListener('click',()=>{const img=b.querySelector('img');if(!dialog?.showModal){window.open(img.src,'_blank','noopener');return;}opener=b;resetZoom();dialog.querySelector('img').src=img.src;dialog.querySelector('img').alt=img.alt;dialog.querySelector('p').textContent=b.dataset.caption||img.alt;dialog.showModal();document.body.style.overflow='hidden'}));
 dialog?.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
 dialog?.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
 dialog?.addEventListener('close',()=>{document.body.style.overflow='';resetZoom();opener?.focus()});
})();
