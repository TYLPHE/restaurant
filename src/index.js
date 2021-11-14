import './style.css';
import homePage from './home.js';
import header from './header.js';

let component = {
    init: function(){
        document.body.append(header, homePage.home());
        homePage.scrollCreate();
    },
}
component.init();