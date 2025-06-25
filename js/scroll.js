// Variaveis Gerais para interação com scroll 

const headerComponent = document.querySelector('[data-header]')
const sectionAboutMe = document.querySelector('[data-section-about-me]')
const sectionKills = document.querySelector('[data-section-skills]')
const sectionSkillsItems = document.querySelector('[data-section-skills-items]')
const sectionProjects = document.querySelector('[data-section-projects]')
const sectionContactComponent = document.querySelector('[data-section-contact]')


// Funcao responsável por detectar o elemento e a posicaoAtualScroll

function animateOnScroll(element, scrollPositionTrigger) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollPositionTrigger) {
            element.classList.add('opacity-100', 'translate-y-0', 'transition-all', 'duration-500')
            element.classList.remove('opacity-0', 'translate-y-5')
        } else {
            element.classList.remove('opacity-100', 'translate-y-0')
            element.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-500')
        }
    })
}

// Função responsável para causar o efeito no header

function animateHeader(scrollPositionTrigger) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollPositionTrigger) {
            headerComponent.classList.add(
                'backdrop-blur-md',
                'bg-black/30',
                'border-b',
                'border-white/10',
                'shadow-md',
                'transition-all',
                'duration-300'
            )
        } else {
            headerComponent.classList.remove(
                'backdrop-blur-md',
                'bg-black/30',
                'border-b',
                'border-white/10',
                'shadow-md',
                'transition-all',
                'duration-300'
            )
        }
    })
}

// Invocações das funções

animateHeader(30)
animateOnScroll(sectionAboutMe, 290)
animateOnScroll(sectionKills, 1150)
animateOnScroll(sectionSkillsItems, 1300)
animateOnScroll(sectionProjects, 1850)
animateOnScroll(sectionContactComponent, 3000)