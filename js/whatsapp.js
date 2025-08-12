document.addEventListener('DOMContentLoaded', () => {

    const whatsappComponent = document.querySelector('[data-section-whatsapp]')

    // Lógica do botão de whatsapp 

    const scrollWhatsapp = (component, scrollPosition) => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > scrollPosition) {
                component.classList.remove('animacao-left-returned', 'invisible');
                component.classList.add('animacao-left')
            } else {
                if (!component.classList.contains('invisible')) {
                    component.classList.remove('animacao-left')
                    component.classList.add('animacao-left-returned')

                    component.addEventListener('animationend', function hideAfterAnimation() {
                        component.classList.add('invisible')
                        component.removeEventListener('animationend', hideAfterAnimation)
                    });
                }
            }
        });
    };

    // Chamada do scrollWhatsapp

    scrollWhatsapp(whatsappComponent, 200)

})
