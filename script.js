const toggleSwitch=document.querySelector('input[type="checkbox"]');
const toggleIcon=document.querySelector('#toggle-icon');
const nav=document.querySelector('nav');
const textBox = document.getElementById('text-box');

// dark  Mode Styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent="Dark Mode"
     toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    

}
// Light Mode Styles
function lightMode() {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  imageMode('light');
}

//Switch Theme Dynamically
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    }
    else{
        document.documentElement.setAttribute('data-theme','light'); 
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

//Event Listner
toggleSwitch.addEventListener('change',switchTheme);
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode();
  }
}
