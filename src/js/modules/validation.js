const validation = () => {
    const nameInput = document.querySelectorAll('input[name="user_name"]'),
        numberInput = document.querySelectorAll('input[name="user_phone"]');

    const MAX_NAMELENGTH = 10;
    const MIN_NAMELENGTH = 2;

    nameInput.forEach(elem => {
        elem.addEventListener('input', () => {
            let inputNameText = elem.value;

            if (inputNameText.length  > MAX_NAMELENGTH || inputNameText.length <  MIN_NAMELENGTH) {
                elem.style.border = '2px solid red';
            }  else {
                elem.style.border = '';
            }
        });
    });
    

};

export default validation;