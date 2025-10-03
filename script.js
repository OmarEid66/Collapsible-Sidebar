(function(){
const sidebar = document.getElementById('sidebar');
const toggle = document.getElementById('toggleBtn');
const overlay = document.getElementById('overlay');
const STORAGE_KEY = 'sidebar-collapsed';


let collapsed = localStorage.getItem(STORAGE_KEY) === '1';


function applyState(){
const isMobile = window.matchMedia('(max-width:767px)').matches;
sidebar.classList.toggle('collapsed', collapsed && !isMobile);
toggle.setAttribute('aria-pressed', String(collapsed));
toggle.querySelector('.label').textContent = collapsed ? 'Expand' : 'Collapse';
}


function openMobile(){
sidebar.classList.add('open');
overlay.classList.add('show');
}


function closeMobile(){
sidebar.classList.remove('open');
overlay.classList.remove('show');
}


toggle.addEventListener('click', ()=>{
const isMobile = window.matchMedia('(max-width:767px)').matches;
if(isMobile){
if(sidebar.classList.contains('open')) closeMobile(); else openMobile();
} else {
collapsed = !collapsed;
localStorage.setItem(STORAGE_KEY, collapsed ? '1' : '0');
applyState();
}
});


overlay.addEventListener('click', closeMobile);


window.addEventListener('resize', applyState);


// Initial load
applyState();
})();