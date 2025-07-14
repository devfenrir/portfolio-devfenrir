document.addEventListener('DOMContentLoaded', () => {

    const botaoVerMaisCertificados = document.querySelector('[data-button-mais-detalhes-certificados]')

    botaoVerMaisCertificados.addEventListener('click', () => {
        const divMessagePersonalizada = document.querySelector('[data-dont-have-message]')

        if (divMessagePersonalizada.children.length === 0) {
            const dontHaveMessage = document.createElement('p')
            dontHaveMessage.innerText = 'Não há mais certificados até o momento'

            dontHaveMessage.classList.add(
                'text-slate-500',
                'font-bold',
                'text-center',
                'text-[16px]',
                'pt-4',
                'animacao-fadeOff'
            )

            divMessagePersonalizada.appendChild(dontHaveMessage)
        }
    })
})