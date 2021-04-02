const modals = (state) => {
    let timerId;
    //helper function to bind different modals 
    function bindModal(modalSelector, triggerSelector, closeSelector, shouldClose = true) {
        const triggers = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            closeBtns = document.querySelectorAll(closeSelector),
            windows = document.querySelectorAll('[data-modal]');

        //open on trigger
        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                //close all popups if theres a few of them
                windows.forEach(item => {
                    item.style.display = 'none';
                });
        
                    modal.style.display = "block";
                document.body.style.overflow = 'hidden';
                //clear timeout modal if user opened it already
                clearInterval(timerId);
                
                
            })
        })
        //close on X
        closeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.style.display = 'none';
                document.body.style.overflow = '';

                //close all popups if theres a few of them
                windows.forEach(item => {
                    item.style.display = 'none';
                });

            })
        })

        //close on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal && shouldClose) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                //close all popups if theres a few of them
                windows.forEach(item => {
                    item.style.display = 'none';
                });
            }
        })


    }

    
    //show modal after some time
    function showModalByTime(modalSelector, time) {
        const modal = document.querySelector(modalSelector);

        timerId = setTimeout(() => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    

    bindModal('.popup_engineer', '.popup_engineer_btn', '.popup_close');
    bindModal('.popup', '.phone_link', '.popup_close');
    bindModal('.popup_calc', '.popup_calc_btn', '.popup_calc_close', false);
    bindModal('.popup_calc_profile', '.popup_calc_button', '.popup_calc_profile_close', false );
    bindModal('.popup_calc_end','.popup_calc_profile_button', '.popup_calc_end_close', false)
    showModalByTime('.popup', 60000);
}

export default modals;