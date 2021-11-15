import background1 from './background1.jpg';
import background2 from './background2.jpg';
let component = {
    home: function(){
        let element = document.createElement(`div`);
        element.classList = `parallax`;

        let groupTop = document.createElement(`div`);
        groupTop.classList = `parallax_group`;
        groupTop.id = `groupTop`;
        let group1 = document.createElement(`div`);
        group1.classList = `parallax_group`;
        group1.id = `group1`;
        let group2 = document.createElement(`div`);
        group2.classList = `parallax_group`;
        group2.id = `group2`;
        let groupBot = document.createElement(`div`);
        groupBot.classList = `parallax_group`;
        groupBot.id = `groupBot`;
        
        let bg1Container = document.createElement(`div`);
        bg1Container.classList = `parallax_layer parallax_layer-back`;
        let bg1 = document.createElement(`img`);
        bg1.classList = `background`;
        // bg1.textContent = `background`;
        bg1.src = background1;
        bg1.alt = `Image of steak.`;
        bg1Container.appendChild(bg1);
        
        let bg2Container = document.createElement(`div`);
        bg2Container.classList = `parallax_layer parallax_layer-fore`;
        let bg2 = document.createElement(`div`);
        bg2.classList = `section1a`;
        bg2.textContent = `MORE MEAT.`;
        // bg2.src = background2;
        // bg2.alt = `Image of steak.`;
        bg2Container.appendChild(bg2);

        let sectionCapa = document.createElement(`div`);
        sectionCapa.classList = `parallax_layer parallax_layer-base`;
        let sectionCapaContent = document.createElement(`div`);
        sectionCapaContent.classList = `section1a`;
        sectionCapaContent.textContent = `Title.`;
        sectionCapa.appendChild(sectionCapaContent);

        let section1a = document.createElement(`div`);
        section1a.classList = `parallax_layer parallax_layer-base`;
        let section1aContent = document.createElement(`div`);
        section1aContent.classList = `section1a`;
        section1aContent.textContent = `MEAT.`;
        section1a.appendChild(section1aContent);

        let section1b = document.createElement(`div`);
        section1b.classList = `parallax_layer parallax_layer-base`;
        let section1bContent = document.createElement(`div`);
        section1bContent.classList = `section1b`;
        section1bContent.textContent = `section1b section`;
        section1b.appendChild(section1bContent);

        // let section2a = document.createElement(`div`);
        // section2a.classList = `parallax_layer parallax_layer-base`;
        // let section2aContent = document.createElement(`div`);
        // section2aContent.classList = `section2a`;
        // section2aContent.textContent = `MORE MEAT.`;
        // section2a.appendChild(section2aContent);
        let section2a = document.createElement(`div`);
        section2a.classList = `parallax_layer parallax_layer-base`;
        let section2aContent = document.createElement(`img`);
        section2aContent.src = background2;
        section2aContent.alt = `Image of steak.`;
        // section2aContent.classList = `section2a`;
        // section2aContent.textContent = `MORE MEAT.`;
        section2a.appendChild(section2aContent);

        let section2b = document.createElement(`div`);
        section2b.classList = `parallax_layer parallax_layer-base`;
        let section2bContent = document.createElement(`div`);
        section2bContent.classList = `section2b`;
        section2bContent.textContent = `section2b section`;
        section2b.appendChild(section2bContent);

        let sectionBota = document.createElement(`div`);
        sectionBota.classList = `parallax_layer parallax_layer-base`;
        let sectionBotaContent = document.createElement(`div`);
        sectionBotaContent.classList = `section1a`;
        sectionBotaContent.textContent = `Title.`;
        sectionBota.appendChild(sectionBotaContent);

        groupTop.append(sectionCapa);
        group1.append(section1a, bg1Container);
        group2.append(section2a, bg2Container);
        groupBot.append(sectionBota);
        element.append(groupTop, group1, group2, groupBot);
        return element;
    },
    scrollCreate: function (){
        document.querySelector(`.parallax`).onscroll = () => {
            if(document.querySelector(`.parallax`).scrollTop > 1){
                document.querySelector(`.section1a`).classList.add(`show`);
                // document.querySelector(`.section1`).scrollIntoView();
                // console.log(`scrolled ${document.querySelector(`.parallax`).scrollTop}`);
            }
            else if (document.querySelector(`.parallax`).scrollTop<  10){
                document.querySelector(`.section1a`).classList.remove(`show`);            }
        }
    }
};
export default component;