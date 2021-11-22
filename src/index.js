import homePage from './home.js';
import header from './header.js';

let component = {
    init: function(){
        document.body.append(header, homePage);
    },
}
component.init();