const modals = () => {
    function bindModal(modalSelector, triggerSelector, closeSelector) {
        const triggers = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            closeBtns = document.querySelectorAll(closeSelector);
        //open on trigger
        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                modal.style.display = "block";
                document.body.style.overflow = 'hidden';
            })
        })
        //close on X
        closeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.style.display = 'none';
                document.body.style.overflow = '';

            })
        })

        //close on outside click
        modal.addEventListener('click' , (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        })


    }

    function showModalByTime(modalSelector, time) {
        const modal = document.querySelector(modalSelector);

        let timerId = setTimeout(() => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        },time);
    }

    bindModal('.popup_engineer', '.popup_engineer_btn', '.popup_close');
    bindModal('.popup', '.phone_link' , '.popup_close');
    showModalByTime('.popup', 60000);
}

export default modals;