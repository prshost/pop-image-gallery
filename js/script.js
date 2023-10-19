let pic = document.querySelectorAll('.pic');


pic.forEach( pup => pup.addEventListener('click', () => {
    pup.classList.toggle('active')
}))