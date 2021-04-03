const setDefaultSelect = (selectSelector) => {
    const selectElement = document.querySelector(selectSelector);

    selectElement.selectedIndex = -1;
}


export default setDefaultSelect;