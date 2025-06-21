const sendEmailButton = document.querySelector('[data-button-send-email]')
const sectionOverlay = document.querySelector('[data-section-overlay]')
const sectionClosedButton = document.querySelector('[data-section-closed]')

// Função abre modal
const openModalEmail = (evento) => {
    evento.preventDefault()
    sectionOverlay.classList.remove('invisible')
}

// Função fecha modal
const closeModalEmail = (evento) => {
    evento.preventDefault()
    sectionOverlay.classList.add('invisible')
}

// Escutadores de evento que recebem funções 
sendEmailButton.addEventListener('click', openModalEmail)
sectionClosedButton.addEventListener('click', closeModalEmail)