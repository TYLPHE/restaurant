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
    header: function(){
        let header = document.createElement(`header`);
        let nav = document.createElement(`nav`);
        let home = document.createElement(`div`);
        home.classList = `nav`;
        home.textContent = `Home`;
        home.addEventListener(`click`, () => this.home());
        let menu = document.createElement(`div`);
        menu.textContent = `Menu`;
        menu.classList = `nav`
        menu.addEventListener(`click`, () => this.menu());
        let contact = document.createElement(`div`);
        contact.textContent = `Contact`;
        contact.classList = `nav`
        contact.addEventListener(`click`, () => this.contact());
        nav.append(home, menu, contact);
        header.append(nav);
        return header;
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