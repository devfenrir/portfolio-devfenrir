document.addEventListener('DOMContentLoaded', () => {

    // Variáveis que marcam os elementos 

    const headerComponent = document.querySelector('[data-header]')
    const headerItemOne = document.querySelector('[data-items-item-1]')
    const headerItemTwo = document.querySelector('[data-items-item-2]')
    const headerItemThree = document.querySelector('[data-items-item-3]')
    const headerItemFour = document.querySelector('[data-items-item-4]')
    const headerItemFive = document.querySelector('[data-items-item-5]')
    const headerItemSix = document.querySelector('[data-items-item-6]')
    const logoFenrir = document.querySelector('[data-logo-fenrir]')


    // Atua na estrutura de component do header

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

    // Atua diretamente nos itens do header

    function animateHeaderItems(scrollPositionTrigger) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > scrollPositionTrigger) {
                headerItemOne.classList.add('text-slate-500', 'transition-all')
                headerItemTwo.classList.add('text-slate-500', 'transition-all')
                headerItemThree.classList.add('text-slate-500', 'transition-all')
                headerItemFour.classList.add('text-slate-500', 'transition-all')
                headerItemFive.classList.add('text-slate-500', 'transition-all')
                headerItemSix.classList.add('text-slate-500', 'transition-all')
                logoFenrir.classList.add('opacity-0', 'transition-all')

            } else {
                headerItemOne.classList.remove('text-slate-500', 'transition-all')
                headerItemTwo.classList.remove('text-slate-500', 'transition-all')
                headerItemThree.classList.remove('text-slate-500', 'transition-all')
                headerItemFour.classList.remove('text-slate-500', 'transition-all')
                headerItemFive.classList.remove('text-slate-500', 'transition-all')
                headerItemSix.classList.remove('text-slate-500', 'transition-all')

            }
        })
    }

    // Chamada de função

    animateHeader(50)
    animateHeaderItems(50)
})