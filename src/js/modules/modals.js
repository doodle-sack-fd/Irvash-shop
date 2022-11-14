function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    document.body.style.marginRight = `0px`;
}

const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true, display = 'block') {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();



        function openModal(modal) {
            modal.style.display = display;
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        }

        trigger.forEach(elem => {
            elem.addEventListener('click', (evt) => {
                if (evt.target) {
                    evt.preventDefault();
                }

                windows.forEach(elem => {
                    elem.style.display = 'none';
                });

                openModal(modal);
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(elem => {
                elem.style.display = 'none';
            });

            closeModal(modal);
        });

        modal.addEventListener('click', (evt) => {
            if (evt.target === modal && closeClickOverlay) {
                windows.forEach(elem => {
                    elem.style.display = 'none';
                });

                closeModal(modal);
            }
        });

        document.addEventListener('keydown', (evt) => {
            if (evt.code === 'Escape' && modal.style.display === 'block') {
                closeModal(modal);
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function () {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        /* Узнаем полную ширину блока DIV в том числе border,
        отнимаем значение клиентской ширины ( padding/content) (!прокрутка не включается)*/
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    };

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    showModalByTime('.popup', 60000);

};



export default modals;
export { closeModal };