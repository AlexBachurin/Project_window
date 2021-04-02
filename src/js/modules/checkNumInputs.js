//check inputs for numbers type

const checkNumInputs = (inputSelector) => {
    const numInputs = document.querySelectorAll(inputSelector);

    numInputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/\D/, '');
        })
    })
}

export default checkNumInputs;