//helper to close all popups
function closePopups(popupsSelector) {
    const popups = document.querySelectorAll(popupsSelector);
    popups.forEach(popup => {
        popup.style.display = 'none';
        document.body.style.overflow = '';
    })
}


const modals = (state, allModalsSelector) => {
    let timerId;
    let message = document.createElement('div'); //block for displaying error message if we dont type values
    let errMessage = 'Пожалуйста введите все данные';
    //helper function to bind different modals 
    function bindModal(modalSelector, triggerSelector, closeSelector, shouldClose = true) {
        const triggers = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            closeBtns = document.querySelectorAll(closeSelector),
            calcContent = document.querySelector('.popup_calc_content'),
            calcProfile = document.querySelector('.popup_calc_profile_content');

        //open on trigger
        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                //check if we have needed values in our state when we working with calc popups
                //for first calc popup
                if (e.target.getAttribute('data-calcnext') === "toProfile") {
                    if (!state.width || !state.height) {
                        //check if we have already status message in html, so we wont dublicate error messages
                        if (calcContent.contains(message)) {
                            //do nothing
                        } else {
                            message.textContent = errMessage;
                            message.classList.add('status', 'err-message');
                            calcContent.append(message);
                        }

                    } else {
                        message.remove();
                        closePopups(allModalsSelector);
                        modal.style.display = "block";
                        document.body.style.overflow = 'hidden'; 
                        //clear timeout modal if user opened it already
                        clearInterval(timerId);
                    }
                    //for second calc popup
                } else if (e.target.getAttribute('data-calcnext') === 'toResult') {
                    if (!state.type || !state.profile) {
                        if (calcProfile.contains(document.querySelector('.err-message'))) {
                            //do nothing
                        } else {
                            message.textContent = errMessage;
                            message.classList.add('status', 'err-message');
                            calcProfile.append(message);
                            
                        }

                    } else {
                        closePopups(allModalsSelector);
                        modal.style.display = "block";
                        document.body.style.overflow = 'hidden';
                        message.remove();
                        //clear timeout modal if user opened it already
                        clearInterval(timerId);
                    }
                } else {
                    // close all popups if theres a few of them
                    closePopups(allModalsSelector);

                    modal.style.display = "block";
                    document.body.style.overflow = 'hidden';
                    //clear timeout modal if user opened it already
                    clearInterval(timerId);

                }



            })
        })
        //close on X
        closeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.style.display = 'none';
                document.body.style.overflow = '';

                //close all popups if theres a few of them
                closePopups(allModalsSelector);

            })
        })

        //close on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal && shouldClose) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                //close all popups if theres a few of them
                closePopups(allModalsSelector);
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
    bindModal('.popup_calc_profile', '.popup_calc_button', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_end', '.popup_calc_profile_button', '.popup_calc_end_close', false)
    showModalByTime('.popup', 60000);
}

export default modals;
export {
    closePopups
};