// ===== DARK LIGHT THEME ===== //
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if(selectedTheme){
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
	themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () =>{
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);

	localStorage.setItem('selected-theme', getCurrentTheme());
	localStorage.setItem('selected-icon', getCurrentIcon());
})
// ===== end dark light theme ===== //

// ===== SCROLL REVEAL ANIMATION ===== //
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
})

sr.reveal(`.profile__border`);
sr.reveal(`.profile__name`, {delay: 500});
sr.reveal(`.profile__profession`, {delay: 600});
sr.reveal(`.profile__major`, {delay: 700});
sr.reveal(`.profile__address`, {delay: 700});
sr.reveal(`.profile__buttons`, {delay: 800});
sr.reveal(`.content__list`, {delay: 800});
sr.reveal(`.hobby__box`, {interval: 50, delay: 900});
// ===== end scroll reveal animation ===== //