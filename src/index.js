// import homePage from './home.js';
// import menuPage from './menu.js';
import contactPage from './contact.js';
import header from './header.js';

let component = {
    init: function(){
        // document.body.append(header.header(), homePage.home());
        document.body.append(header.header(), contactPage.contact());
    },
}
component.init();