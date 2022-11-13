import checkNumInputs from './checkNumInputs';
import { closeModal } from './modals';

const forms = (state) => {

    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        popupCalcEnd = document.querySelector('.popup_calc_end');

    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Идет загрузка',
        success: 'Спасибо! Скоро с вами свяжемся',
        failure: 'Что-то пошло не так',
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        const res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    const resetInputs = () => {
        inputs.forEach(elem => {
            elem.value = '';
        });
    };


    form.forEach(item => {
        item.addEventListener('submit', (evt) => {
            evt.preventDefault();
            

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }


            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    resetInputs();
                    setInterval(() => {
                        statusMessage.remove();
                    }, 5000);
                    closeModal(popupCalcEnd);

                    // clear value in object state (reset request)

                    for (let key in state) {
                        if (state.hasOwnProperty(key)) {
                            delete state[key];
                        }
                    }
                });
        });

    });

};

export default forms;