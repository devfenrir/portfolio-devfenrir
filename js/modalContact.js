const sendEmailButton = document.querySelector('[data-button-send-email]')
const sectionOverlay = document.querySelector('[data-section-overlay]')
const sectionClosedButton = document.querySelector('[data-section-closed]')

const openModalEmail = () => {
    sectionOverlay.classList.remove('invisible')
}

const closeModalEmail = () => {
    sectionOverlay.classList.add('invisible')
}

sendEmailButton.addEventListener('click', openModalEmail)
sectionClosedButton.addEventListener('click', closeModalEmail)