const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigation');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav?.classList.contains('open')){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.focus()}});
const form=document.querySelector('.enquiry-form');
if(form){
 const interest=new URLSearchParams(location.search).get('service');
 if(interest&&[...form.elements.service.options].some(o=>o.value===interest))form.elements.service.value=interest;
 let draft='';
 form.addEventListener('submit',event=>{
  event.preventDefault();
  const data=new FormData(form);const service=form.elements.service.selectedOptions[0].textContent;
  draft=`Hello,\n\nI would like to discuss ${service.toLowerCase()}.\n\n${String(data.get('message')).trim()}\n\nName: ${String(data.get('name')).trim()}\nEmail: ${String(data.get('email')).trim()}\n\nThank you.`;
  const panel=form.querySelector('.draft');panel.querySelector('pre').textContent=draft;panel.hidden=false;
  const email=panel.querySelector('.email-draft');if(email)email.href=`mailto:${form.dataset.email}?subject=${encodeURIComponent('Enquiry: '+service)}&body=${encodeURIComponent(draft)}`;
  panel.querySelector('.copy-status').textContent='';panel.focus();panel.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'nearest'});
 });
 form.querySelector('.copy').addEventListener('click',async()=>{const status=form.querySelector('.copy-status');try{await navigator.clipboard.writeText(draft);status.textContent='Message copied. You can paste it into your email.'}catch{status.textContent='Please select the message above and copy it manually.'}});
}
const filterGroup=document.querySelector('.filters');
if(filterGroup){
 const cards=[...document.querySelectorAll('.project-card')];
 filterGroup.addEventListener('click',event=>{
  const button=event.target.closest('button[data-filter]');if(!button)return;
  const value=button.dataset.filter;let count=0;
  for(const card of cards){card.hidden=value!=='all'&&card.dataset.category!==value;if(!card.hidden)count++;}
  for(const control of filterGroup.querySelectorAll('button'))control.setAttribute('aria-pressed',String(control===button));
  document.querySelector('.filter-status').textContent=`${count} ${count===1?'example':'examples'}${value==='all'?'':' · '+value}`;
 });
}
