const timer = (id, deadline) => {
    const getTImeRemaining = (endtime) => {
        const timeLeft = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor((timeLeft / (1000 * 60 * 60 * 24))),
            hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((timeLeft / (1000 * 60)) % 60),
            seconds = Math.floor((timeLeft / 1000) % 60);

        return {
            'total': timeLeft, // all time
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    };

    const addZero = (num) => {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    };

    const setClock = (selector, endtime) => {
        const t = document.querySelector(selector),
            days = t.querySelector('#days'),
            hours = t.querySelector('#hours'),
            minutes = t.querySelector('#minutes'),
            seconds = t.querySelector('#seconds'),

            timeInterval = setInterval(updateTime, 1000);

        updateTime();

        function updateTime() {
            const time = getTImeRemaining(endtime); // How much time is left

            days.textContent = addZero(time.days);
            hours.textContent = addZero(time.hours);
            minutes.textContent = addZero(time.minutes);
            seconds.textContent = addZero(time.seconds);

            if (time.total <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

                clearInterval(timeInterval);
            }
        }
    };

    setClock(id, deadline);
};


export default timer;