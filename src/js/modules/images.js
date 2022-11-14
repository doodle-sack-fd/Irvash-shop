const images = () => {
    const imgPopup = document.createElement('div'),
        workArea = document.querySelector('.works'),
        bigImg = document.createElement('img');

    imgPopup.classList.add('popup');
    workArea.appendChild(imgPopup);


    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    bigImg.style.width = '600px';
    bigImg.style.height = '600px';
    
    imgPopup.appendChild(bigImg);

    workArea.addEventListener('click', (evt) => {
        evt.preventDefault();

        let target = evt.target;
        /*

         target - Если элемент поддерживает событие клик, 
         и содержит класс preview
          */

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';

        /* target - элемент на котором произошло событие,
         обращается к родительской ноде и получает атрибут родительской ноды,
          который нас интересует и затем устанавливаем*/

            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
        }

        /* Если пользователь кликнул на подложку */
        
        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
};

export default images; 