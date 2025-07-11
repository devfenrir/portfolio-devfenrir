document.addEventListener('DOMContentLoaded', () => {

    // Variaveis Gerais para interação com scroll 

    const headerComponent = document.querySelector('[data-header]')

    const headerItemOne = document.querySelector('[data-items-item-1]')
    const headerItemTwo = document.querySelector('[data-items-item-2]')
    const headerItemThree = document.querySelector('[data-items-item-3]')
    const headerItemFour = document.querySelector('[data-items-item-4]')
    const headerItemFive = document.querySelector('[data-items-item-5]')
    const headerItemSix = document.querySelector('[data-items-item-6]')

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

    // Função responsável por causar o efeito no header 

    function animateHeader(scrollPositionTrigger) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > scrollPositionTrigger) {
                headerComponent.classList.add(
                    'backdrop-blur-md',
                    'bg-black/30',
                    'border-b',
                    'shadow-md',
                    'transition-all',
                    'duration-300',
                )
            } else {
                headerComponent.classList.remove(
                    'backdrop-blur-md',
                    'bg-black/30',
                    'border-b',
                    'shadow-md',
                    'transition-all',
                    'duration-300',
                )
            }
        })
    }

    // Função responsável por causar o efeito nos itens do header

    function animateHeaderItems(scrollPositionTrigger) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > scrollPositionTrigger) {
                headerItemOne.classList.add('text-slate-500', 'transition-all')
                headerItemTwo.classList.add('text-slate-500', 'transition-all')
                headerItemThree.classList.add('text-slate-500', 'transition-all')
                headerItemFour.classList.add('text-slate-500', 'transition-all')
                headerItemFive.classList.add('text-slate-500', 'transition-all')
                headerItemSix.classList.add('text-slate-500', 'transition-all')
            } else {
                headerItemOne.classList.remove('text-slate-500', 'transition-all')
                headerItemTwo.classList.remove('text-slate-500', 'transition-all')
                headerItemThree.classList.remove('text-slate-500', 'transition-all')
                headerItemFour.classList.remove('text-slate-500', 'transition-all')
                headerItemFive.classList.remove('text-slate-500', 'transition-all')
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

    animateHeader(50)
    animateHeaderItems(50)
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