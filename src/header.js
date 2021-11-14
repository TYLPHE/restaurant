let component = {
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
        title.textContent = `TYLPHE's Restaurant`;

        logoContainer.append(logo, title)
        nav.append(home, menu, contact);
        header.append(logoContainer, nav);
        return header;
    },
}
export default component.header();