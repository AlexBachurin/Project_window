const timer = (deadline) => {


    function getTimeLeft(endtime) {
        const timeLeft = Date.parse(endtime) - Date.parse(new Date()); //get time diff

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
            hours = Math.floor((timeLeft / 1000 * 60 * 60) % 24), //get hours with floor of 24 hours (нам нужен именно хвост, поэтому от полученных общих часов берем остаток от деления на 24 часа
            // т.е если было 150 часов ,то после деление 150 % 24, останется хвост в 6 часов, а дни отбросятся
            minutes = Math.floor((timeLeft / 1000 / 60) % 60),
            seconds = Math.floor((timeLeft / 1000) % 60)

        return {
            days,
            hours,
            minutes,
            seconds
        }
    }

    function setUpClock() {
        const days = document.querySelector('#days'),
              hours = document.querySelector('#hours'),
              minutes = document.querySelector('#minutes'),
              seconds = document.querySelector('#seconds');
        
        //call function 1 time to initialize clock so it will show proper values
        updateClock();

        function updateClock() {
            const t = getTimeLeft(deadline);

            days.textContent = t.days;
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
        }

        const timerId = setInterval(() => {
            updateClock();
        }, 1000);
    }

    setUpClock();
}


export default timer;