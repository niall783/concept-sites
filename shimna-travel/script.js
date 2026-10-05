const toggle = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
toggle.addEventListener('click', () => {
 const open = toggle.getAttribute('aria-expanded') !== 'true';
 toggle.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
 toggle.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open');
}));
document.querySelectorAll('[data-service]').forEach(a => a.addEventListener('click', () => {
 document.getElementById('service').value = a.dataset.service;
}));
const today = new Date();
const localDate = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
document.getElementById('date').min = localDate;
let enquiry = '';
document.getElementById('journey-form').addEventListener('submit', event => {
 event.preventDefault();
 const data = new FormData(event.target);
 enquiry = `Hello Shimna Travel,\n\nI'd like to enquire about the following journey:\n\nService: ${data.get('service')}\nPickup: ${data.get('pickup')}\nDestination: ${data.get('destination')}\nDate: ${data.get('date')}\nTime: ${data.get('time')}\nPassengers: ${data.get('passengers')}\nName: ${data.get('name')}\nAdditional details: ${data.get('notes') || 'None'}\n\nPlease confirm availability and a quote. Thank you.`;
 document.getElementById('email-link').href = `mailto:info@shimnatravel.co.uk?subject=${encodeURIComponent('Journey enquiry: '+data.get('service'))}&body=${encodeURIComponent(enquiry)}`;
 document.getElementById('email-result').hidden = false;
 document.getElementById('copy-status').textContent = '';
 document.getElementById('email-result').scrollIntoView({block:'nearest',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
});
document.getElementById('copy-enquiry').addEventListener('click', async () => {
 try { await navigator.clipboard.writeText(enquiry); document.getElementById('copy-status').textContent = 'Enquiry copied.'; }
 catch { document.getElementById('copy-status').textContent = 'Copy unavailable. Use the email draft link, or call the team.'; }
});
document.getElementById('journey-form').addEventListener('input', () => {
 document.getElementById('email-result').hidden = true;
});
