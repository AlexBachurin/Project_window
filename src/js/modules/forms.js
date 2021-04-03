import IMask from 'imask';
import {closePopups} from './modals';

const forms = (state, allModalsSelector) => {
    const form = document.querySelectorAll('form'),
        phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    //mask for phone
    phoneInputs.forEach(item => {  
        item = IMask(
            item, {
                mask: '+{7}(000)000-00-00'
            });


    })

    const message = {
        success: 'Успешно отправлено',
        loading: 'Загрузка...',
        failure: 'Произошла непредвиденная ошибка'
    }

    //helper to post
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();

    }

    //helper to clear state(we can do just this state ={}, but we taking it in our hands :)) 
    const clearObject = (obj) => {
        for (let key in obj) {
            delete obj[key];
        }
    } 

    //bind event listeners to forms
    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            //show message and spinner on loading
            let statusBlock = document.createElement('div');
            let statusMessage = document.createElement('div');
            let spinner = document.createElement('img');
            statusMessage.textContent = message.loading;
            spinner.src = 'assets/img/spinner/Spin58px.svg';
            statusBlock.classList.add('status');
            statusBlock.append(statusMessage);
            statusBlock.insertAdjacentElement("beforeend", spinner);
            item.append(statusBlock);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            postData('assets/server.php', formData)
                .then(result => {
                    console.log(result);
                    statusMessage.textContent = message.success;
                    spinner.remove();
                })
                .catch(() => {
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    item.reset();
                    setTimeout(() => {
                        statusBlock.remove();
                    }, 3000)
                    //close all modals after form post
                    setTimeout(() => {
                        closePopups(allModalsSelector);
                    },4000)
                    //clear state
                    clearObject(state);
                })
        })
    })
}


export default forms;