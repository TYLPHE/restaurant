import background from './background.jpg';
let component = {
    home: function(){
        let element = document.createElement(`div`);
        element.classList = `parallax`;

        let group1 = document.createElement(`div`);
        group1.classList = `parallax__group`;
        let group2 = document.createElement(`div`);
        group2.classList = `parallax__group`;

        let title1 = document.createElement(`img`);
        title1.classList = `parallax__layer parallax__layer--back background`;
        title1.src = background;
        title1.alt = `Image of steak.`;

        let section1 = document.createElement(`div`);
        section1.classList = `parallax__layer parallax__layer--base`;
        let section1Content = document.createElement(`div`);
        section1Content.classList = `section1`;
        section1Content.textContent = `MEAT.`;
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
        element.append(group1);
        return element;
    },
    scrollCreate: function (){
        document.querySelector(`.parallax`).onscroll = () => {
            if(document.querySelector(`.parallax`).scrollTop > 1){
                document.querySelector(`.section1`).classList.add(`show`);
                // document.querySelector(`.section1`).scrollIntoView();
                console.log(`scrolled ${document.querySelector(`.parallax`).scrollTop}`);
            }
            else if (document.querySelector(`.parallax`).scrollTop<  10){
                document.querySelector(`.section1`).classList.remove(`show`);            }
        }
    }
};
export default component;