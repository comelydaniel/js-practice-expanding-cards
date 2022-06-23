const cards = document.querySelectorAll('.card');
console.log(cards)

cards.forEach(card => {
    card.addEventListener('click', () => {
        removeActiveClass()
        card.classList.add('active')
    })
})

function removeActiveClass() {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}

/*cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active')
    })
})*/


