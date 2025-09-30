'use strict'
function gebi(id) { return document.getElementById(id); }

// declare DOM elements
const SEG_BUTTONS = [gebi('seg-button-py'), gebi('seg-button-web'), gebi('seg-button-git'), gebi('seg-button-zsh')];
const SECTIONS = [gebi('section-py'), gebi('section-web'), gebi('section-git'), gebi('section-zsh')];

// declare other vars
let SHOWN_SECTION = gebi('section-web');
const SECTION_MAP = new Map([
    [SEG_BUTTONS[0], SECTIONS[0]],
    [SEG_BUTTONS[1], SECTIONS[1]],
    [SEG_BUTTONS[2], SECTIONS[2]],
    [SEG_BUTTONS[3], SECTIONS[3]]
]);

// event listeners
SEG_BUTTONS.forEach((BTN) => {
    BTN.addEventListener('click', function(){

        // check if user clicked on a NEW page
        if (SHOWN_SECTION !== SECTION_MAP.get(BTN)) {

            // reset
            SEG_BUTTONS.forEach(BTN => {
                BTN.classList.remove('on');
                BTN.classList.add('off');
            });
            SECTIONS.forEach(SEC => {
                SEC.classList.remove('shown');
                SEC.classList.add('hidden');
            });

            // show content
            BTN.classList.add('on');
            SECTION_MAP.get(BTN).classList.remove('hidden');
            SECTION_MAP.get(BTN).classList.add('shown');

            // update current section var
            SHOWN_SECTION = SECTION_MAP.get(BTN)

        }
    });
});
