import header from './header.js';
let component = {
    home: function(){
        let element = document.createElement(`div`);
        element.classList = `parallax`;

        let group1 = document.createElement(`div`);
        group1.classList = `parallax__group`;
        let group2 = document.createElement(`div`);
        group2.classList = `parallax__group`;

        let title1 = document.createElement(`div`);
        title1.classList = `parallax__layer parallax__layer--back`;
        let title1Content = document.createElement(`div`);
        title1Content.classList = `title`;
        title1Content.textContent = `Restaurant by TYLPHE`;
        title1.appendChild(title1Content);

        let section1 = document.createElement(`div`);
        section1.classList = `parallax__layer parallax__layer--base`;
        let section1Content = document.createElement(`div`);
        section1Content.classList = `section1`;
        section1Content.textContent = `section1 section`;
        section1.appendChild(section1Content);

        let title2 = document.createElement(`div`);
        title2.classList = `parallax__layer parallax__layer--back`;
        let title2Content = document.createElement(`div`);
        title2Content.classList = `title`;
        title2Content.textContent = `Restaurant by TYLPHE`;
        title2.appendChild(title2Content);

        let section2 = document.createElement(`div`);
        section2.classList = `parallax__layer parallax__layer--base`;
        let section2Content = document.createElement(`div`);
        section2Content.classList = `section2`;
        section2Content.textContent = `section2 section`;
        section2.appendChild(section2Content);

        group1.append(title1, section1, section2);
        element.append(header, group1);
        return element;
    },
};
export default component.home();