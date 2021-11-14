let component = {
    home: function(){
        let element = document.createElement(`div`);
        element.classList = `parallax`;
        let title = document.createElement(`div`);
        title.classList = `parallax__layer parallax__layer--back`;
        let titleContent = document.createElement(`div`);
        titleContent.classList = `title`;
        titleContent.textContent = `Restaurant by TYLPHE`;
        title.appendChild(titleContent);
        let about = document.createElement(`div`);
        about.classList = `parallax__layer parallax__layer--base`;
        let aboutContent = document.createElement(`div`);
        aboutContent.classList = `title`;
        aboutContent.textContent = `About section`;
        about.appendChild(aboutContent);
        element.append(title, about);
        return element;
    },
};
export default component.home();