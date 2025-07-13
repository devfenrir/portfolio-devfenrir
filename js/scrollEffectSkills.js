document.addEventListener('DOMContentLoaded', () => {

    // Declaração de variáveis

    const contentBackEnd = document.querySelector('[data-section-back-end-skills]')
    const contentBancoDeDados = document.querySelector('[data-section-banco-de-dados-skills]')
    const contentGithubGit = document.querySelector('[data-section-github-skills]')
    const contentTests = document.querySelector('[data-section-testes-skills]')
    const contentUi = document.querySelector('[data-section-user-interface-skills]')
    const contentUx = document.querySelector('[data-section-user-experience-skills]')

    // Funcao responsável por detectar o elemento e a posicaoAtualScroll

    function animateOnScroll(element, scrollPositionTrigger) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > scrollPositionTrigger) {
                element.classList.add('opacity-100', 'translate-y-0', 'transition-all', 'duration-700', 'ease-in-out')
                element.classList.remove('opacity-0', 'translate-y-5')
            } else {
                element.classList.remove('opacity-100', 'translate-y-0', 'transition-all', 'duration-700', 'ease-in-out')
                element.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-500')
            }
        })
    }

    // Invocação das funções

    animateOnScroll(contentBackEnd, 100)
    animateOnScroll(contentBancoDeDados, 350)
    animateOnScroll(contentGithubGit, 680)
    animateOnScroll(contentTests, 1040)
    animateOnScroll(contentUi, 1500)
    animateOnScroll(contentUx, 1900)

})