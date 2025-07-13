document.addEventListener('DOMContentLoaded', () => {

    const sendEmailButton = document.querySelector('[data-button-send-email]')
    const sectionOverlay = document.querySelector('[data-section-overlay]')
    const sectionClosedButton = document.querySelector('[data-section-closed]')
    const janelaModal = document.querySelector('[data-janela-modal]')

    // Função abre modal
    const openModalEmail = (evento) => {
        evento.preventDefault()
        sectionOverlay.classList.remove('invisible')
        janelaModal.classList.add('animacao-fadeIn')
    }

    // Função fecha modal
    const closeModalEmail = (evento) => {
        evento.preventDefault()
        sectionOverlay.classList.add('invisible')
        janelaModal.classList.remove('animacao-fadeIn')
    }

    // Escutadores de evento que recebem funções 
    sendEmailButton.addEventListener('click', openModalEmail)
    sectionClosedButton.addEventListener('click', closeModalEmail)

})