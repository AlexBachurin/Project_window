import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs('.glazing_content', '.glazing_slider', '.glazing_block', 'active');
    tabs('.decoration_content > div > div', '.decoration_slider', '.no_click', 'after_click');
    forms();
})