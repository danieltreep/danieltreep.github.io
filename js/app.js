// Scroll when down arrow is clicked
const svg = document.querySelector(".svg-down");
const main = document.querySelector(".main")

svg.addEventListener('click', () => {
    main.scrollIntoView({
        behavior: 'smooth'
      });
})

// Display image modal when clicked
const overlay = document.querySelector(".overlay");

function displayPhoto(photo) {
    overlay.classList.remove("hidden");
    const modal = document.querySelector(".modal");
    let html = photo.parentNode.innerHTML;
    modal.innerHTML = `<div class="modal-project"> ${html} </div>
    <svg class="modal-close" fill="white" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    `;
}

main.addEventListener('click', (event) => {
    if (event.target.className === "photo") {
        const photo = event.target.closest("img");
        displayPhoto(photo);
    }
});

// Hide overlay when X is clicked
let modal = document.querySelector(".modal");
overlay.addEventListener('click', (event) => {
    const modalClose = document.querySelector(".modal-close");
    if (event.target === modalClose) {
        overlay.classList.add("hidden");
    } 
});