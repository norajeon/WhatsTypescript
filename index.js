"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import stylesheets
require("./style.css");
const form = document.querySelector('#defineform');
//handle null value better later
if (form != null) {
    form.onsubmit = () => {
        const formData = new FormData(form);
        console.log(formData);
        const text = formData.get('defineword');
        console.log(text);
        // console.log(fetch("http://api.dictionaryapi.dev/api/v2/entries/en/" + text))
        fetch("http://api.dictionaryapi.dev/api/v2/entries/en/" + text)
            .then((response) => response.json())
            .then((response) => {
            return response;
        });
        return false; // prevent reload
    };
}
;
