const forms = () => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        phoneInputs = document.querySelectorAll('input[name="user_phone"]');

        phoneInputs.forEach(elem => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/\D/, '')
            });
        });

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
                });
        });
    });
};

export default forms;