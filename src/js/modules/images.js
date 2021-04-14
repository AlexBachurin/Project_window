const images = () => {
    //create modal popup with our Big Img
    const imgPopup = document.createElement('div'),
          imgSection = document.querySelector('.works'),
          bigImage = document.createElement('img');
    //put right class for modal
    //and add it to html
    imgPopup.classList.add('popup');
    imgSection.append(imgPopup);
    //put img into modal
    imgPopup.style.cssText = 
        'display: none; justify-content: center; align-items: center'
    ;
    imgPopup.append(bigImage);

    imgSection.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        //show img
        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }
        //close on outside click or on image click
        if (target && target.matches('div.popup') || target.matches('div.popup img')) {
            imgPopup.style.display = 'none';
        }
    })
}


export default images;