const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        function closeModal(modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }

        function openModal(modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        trigger.forEach(elem => {
            elem.addEventListener('click', (evt) => {
                if (evt.target) {
                    evt.preventDefault();
                }

                openModal(modal);
            });
        });

        close.addEventListener('click', () => {
            closeModal(modal);
        });

        modal.addEventListener('click', (evt) => {
            if (evt.target === modal) {
                closeModal(modal);
            }
        });

        document.addEventListener('keydown', (evt) => {
            if(evt.code === 'Escape' && modal.style.display === 'block') {
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


    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime('.popup', 60000);
};



export default modals;