import menuPage from './menu.js';
import contactPage from './contact.js';
import homePage from './home.js';
let component = {
    clear: function(){
        while(document.body.firstChild){
            document.body.removeChild(document.body.lastChild);
        }
    },
    header: function(){
        let header = document.createElement(`div`);
        header.classList = `header`;
        let nav = document.createElement(`nav`);
        let home = document.createElement(`div`);
        home.classList = `nav`;
        home.textContent = `Home`;
        home.addEventListener(`click`, () => {
            this.clear();
            document.body.append(this.header(), homePage.home());
            homePage.scrollCreate();
        });

        let menu = document.createElement(`div`);
        menu.textContent = `Menu`;
        menu.classList = `nav`
        menu.addEventListener(`click`, () => menuPage.menu());

        let contact = document.createElement(`div`);
        contact.textContent = `Contact`;
        contact.classList = `nav`
        contact.addEventListener(`click`, () => contactPage.contact());

        let logoContainer = document.createElement(`div`);
        logoContainer.classList = `logo-container`;
        let logo = document.createElement(`a`);
        logo.classList = `profile`;
        logo.href = `https://github.com/TYLPHE`;
        let img = document.createElement(`img`);
        img.src = `https://avatars.githubusercontent.com/u/85977718?v=4`;
        img.alt = `TYLPHE's Avatar`;
        img.classList = `profile-img`;
        logo.appendChild(img);

        let title = document.createElement(`div`);
        title.textContent = `TYLPHE's Steakhouse`;

        logoContainer.append(logo, title)
        nav.append(home, menu, contact);
        header.append(logoContainer, nav);
        return header;
    },
}
export default component.header();