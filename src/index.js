import './style.css';
import menuPage from './menu.js';
import contactPage from './contact.js';
import homePage from './home.js';

let component = {
    init: function(){
        document.body.append(homePage);
    },
    clear: function(){
        while(document.body.firstChild){
            document.body.removeChild(document.body.lastChild);
        }
    },
    background: function(){
    },
    home: function(){
        this.clear();
        return document.body.append(this.header(), homePage);
    },
    menu: function(){
        this.clear();
        return document.body.append(this.header(), menuPage);
    },
    contact: function(){
        this.clear();
        return document.body.append(this.header(), contactPage);
    }
}
component.init();