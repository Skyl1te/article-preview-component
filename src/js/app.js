const socialMedias = document.querySelector('#social-medias')
const person = document.querySelector('#person')
const personShareBtn = document.querySelector('#personShareBtn')
const socialMediasShareBtn = document.querySelector('#socialMediasShareBtn')

let mql = window.matchMedia("(max-width: 1024px)");

if (mql.matches) {
	personShareBtn.addEventListener('click', ()=> {
		socialMedias.classList.toggle('hidden')
		person.classList.toggle('hidden')
	})
	
	socialMediasShareBtn.addEventListener('click', ()=> {
		socialMedias.classList.toggle('hidden')
		person.classList.toggle('hidden')
	})
} else {
	personShareBtn.addEventListener('click', ()=> {
		socialMedias.classList.toggle('hidden')
	})
}
