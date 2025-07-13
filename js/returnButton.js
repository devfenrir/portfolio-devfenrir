document.addEventListener('DOMContentLoaded', () => {

    const componentReturn = document.querySelector('[data-section-return]')

    const scrollReturn = (component, scrollPosition) => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > scrollPosition) {
                component.classList.remove('animacao-left-returned', 'invisible');
                component.classList.add('animacao-left');
            } else {
                if (!component.classList.contains('invisible')) {
                    component.classList.remove('animacao-left');
                    component.classList.add('animacao-left-returned');

                    component.addEventListener('animationend', function hideAfterAnimation() {
                        component.classList.add('invisible');
                        component.removeEventListener('animationend', hideAfterAnimation);
                    });
                }
            }
        });
    };

    scrollReturn(componentReturn, 400);

})