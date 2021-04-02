const forms = () => {
    const form = document.querySelectorAll('form'),
          phoneInputs = document.querySelectorAll('input[name="user_phone"]');
    
    //check for numbers
    phoneInputs.forEach(item => {
        item.addEventListener('input' , () => {
            item.value = item.value.replace(/\D/, '');
        }) 
            
        
    })
    
    const message  = {
        success : 'Успешно отправлено',
        loading : 'Загрузка...',
        failure:  'Произошла непредвиденная ошибка'
    }

    //helper to post
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();

    }
    
    //bind event listeners to forms
    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

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
            })
        })
    })
}


export default forms;