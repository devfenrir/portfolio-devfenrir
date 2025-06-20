const headerComponent = document.querySelector('[data-header]')

// Efeito no Header fixo

window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        headerComponent.classList.add('backdrop-blur-md',
            'bg-black/30',
            'transition-all',
            'duration-300'
        )
    } else {
        headerComponent.classList.remove('backdrop-blur-md',
            'bg-black/30',
            'transition-all',
            'duration-300'
        )
    }
})

// Efeito na section About me

const sectionAboutMe = document.querySelector('[data-section-about-me]')

window.addEventListener('scroll', () => {
    if (window.scrollY > 290) {
        sectionAboutMe.classList.add('opacity-100',
            'translate-y-0',
            'transition-all',
            'duration-500'
        )
        sectionAboutMe.classList.remove('opacity-0',
            'translate-y-5'
        )
    } else {
        sectionAboutMe.classList.remove('opacity-100',
            'translate-y-0'
        )
        sectionAboutMe.classList.add('opacity-0',
            'translate-y-5',
            'transition-all',
            'duration-500'
        )
    }
})

// Efeito na Section Skills

const sectionKills = document.querySelector('[data-section-skills]')
const sectionSkillsItems = document.querySelector('[data-section-skills-items]')

window.addEventListener('scroll', () => {
    if (window.scrollY > 1150) {
        sectionKills.classList.add('opacity-100',
            'translate-y-0',
            'transition-all',
            'duration-500'
        )
        sectionKills.classList.remove('opacity-0',
            'translate-y-5'
        )
    } else {
        sectionKills.classList.remove('opacity-100',
            'translate-y-0'
        )
        sectionKills.classList.add('opacity-0',
            'translate-y-5',
            'transition-all',
            'duration-500'
        )
    }
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 1300) {
        sectionSkillsItems.classList.add('opacity-100',
            'translate-y-0',
            'transition-all',
            'duration-500'
        )
        sectionSkillsItems.classList.remove('opacity-0',
            'translate-y-5'
        )
    } else {
        sectionSkillsItems.classList.remove('opacity-100',
            'translate-y-0'
        )
        sectionSkillsItems.classList.add('opacity-0',
            'translate-y-5',
            'transition-all',
            'duration-500'
        )
    }
})

// Section Projects

const sectionProjects = document.querySelector('[data-section-projects]')

window.addEventListener('scroll', () => {
    if (window.scrollY > 1850) {
        sectionProjects.classList.add('opacity-100',
            'translate-y-0',
            'transition-all',
            'duration-500',
        )
        sectionProjects.classList.remove('opacity-0',
            'translate-y-5'
        )
    } else {
        sectionProjects.classList.remove('opacity-100',
            'translate-y-0'
        )
        sectionProjects.classList.add('opacity-0',
            'translate-y-5',
            'transition-all',
            'duration-500'
        )
    }
})