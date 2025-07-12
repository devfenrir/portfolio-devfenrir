document.addEventListener('DOMContentLoaded', () => {

    // Variaveis Gerais para interação com scroll 

    const sectionAboutMe = document.querySelector('[data-section-about-me]')
    const sectionDescricaoAbout = document.querySelector('[data-section-descricao-about-me]')
    const sectionKills = document.querySelector('[data-section-skills]')
    const sectionSkillsItems = document.querySelector('[data-section-skills-items]')
    const sectionProjects = document.querySelector('[data-section-projects]')
    const sectionContactComponent = document.querySelector('[data-section-contact]')

    const sectionProjectOne = document.querySelector('[data-project-one]')
    const sectionProjectTwo = document.querySelector('[data-project-two]')
    const sectionProjectThree = document.querySelector('[data-project-three]')


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

    // Função responsável para causar o efeito dos itens das skills

    function animacaoLado(element, scrollPositionTrigger) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > scrollPositionTrigger) {
                element.classList.add('opacity-100', 'translate-y-0', 'transition-all', 'duration-700', 'ease-in-out', 'animacaoCards')
                element.classList.remove('opacity-0', 'translate-y-5')
            } else {
                element.classList.remove('opacity-100', 'translate-y-0', 'transition-all', 'duration-700', 'ease-in-out', 'animacaoCards')
                element.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-500')
            }
        })
    }

    // Invocações das funções

    animateOnScroll(sectionAboutMe, 290)
    animacaoLado(sectionDescricaoAbout, 500)
    animateOnScroll(sectionKills, 1150)
    animacaoLado(sectionSkillsItems, 1460)
    animateOnScroll(sectionProjects, 2000)
    animacaoLado(sectionProjectOne, 2050)
    animacaoLado(sectionProjectTwo, 2070)
    animacaoLado(sectionProjectThree, 1690)
    animateOnScroll(sectionContactComponent, 3300)
})