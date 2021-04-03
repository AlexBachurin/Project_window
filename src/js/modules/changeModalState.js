import checkNumInputs from "./checkNumInputs";


const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');
    //helper to make inputs only in numbers
    checkNumInputs('#width');
    checkNumInputs('#height');

    //bind events to different elements
    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                //check nodename of element and put info in state object
                switch(item.nodeName) {
                    case 'SPAN' :
                        state[prop] = i;
                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'Cold' : state[prop] = 'Warm';
                            //make sure we can select only one checkbox
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i === j) {
                                    box.checked = true;
                                }
                            })
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }

                console.log(state);
            })
        });
    }


    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');

    



};

export default changeModalState;