import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import setDefaultSelect from './modules/setDefaultSelect';

window.addEventListener('DOMContentLoaded', () => {
    const modalState = {
        
    };
    setDefaultSelect('#view_type');
    changeModalState(modalState);
    modals(modalState, '[data-modal]');
    tabs('.glazing_content', '.glazing_slider', '.glazing_block', 'active');
    tabs('.decoration_content > div > div', '.decoration_slider', '.no_click', 'after_click');
    tabs('.big_img > img', '.balcon_icons', '.balcon_icons_img', 'do_image_more', 'inline-block')
    forms(modalState, '[data-modal]', '[data-calc] input', '#view_type');
})