const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(elem => {
            elem.style.display = 'none';
        });

        tab.forEach(elem => {
            elem.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }
    hideTabContent();
    showTabContent();

    header.addEventListener('click', (evt) => {
        // тот элемент на который кликнул пользователь
        const target = evt.target; 

        if (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, ""))) {
            tab.forEach((elem, i) => {
                if (target === elem || target.parentNode === elem) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;