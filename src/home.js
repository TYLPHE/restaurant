import './home.css';
import background1 from './background1.jpg';
import background2 from './background2.jpg';
let component = {
    home: function(){
        let element = document.createElement(`div`);
        element.classList = `parallax`;
        element.append(
            this.groupTop(), 
            this.group1(), 
            this.group2(), 
            this.groupBot());
        return element;
    },
    groupTop: function(){
        //create a container to export
        let group = document.createElement(`div`);
        group.classList = `parallax_group`;
        group.id = `groupTop`;

        //create contents to display - top and bot dont need fore/back layer
        let base = document.createElement(`div`);
        base.classList = `parallax_layer parallax_layer-base`;
        let content = document.createElement(`div`);
        content.classList = `parallax-text`;
        content.textContent = `Title.`;

        let logoContainer = document.createElement(`div`);
        logoContainer.classList = `logo-container`;
        let logo = document.createElement(`a`);
        logo.href = `https://github.com/TYLPHE`;
        let img = document.createElement(`img`);
        img.src = `https://avatars.githubusercontent.com/u/85977718?v=4`;
        img.alt = `TYLPHE's Avatar`;
        img.classList = `profile-img`;

        let title = document.createElement(`div`);
        title.classList = `logo-text`;
        title.textContent = `TYLPHE'S GRILL`;
        
        let scrollText = document.createElement(`div`);
        scrollText.classList = `scroll-text`;
        scrollText.textContent = `(Scroll for meat.)`;
        
        //attach contents and export
        logo.appendChild(img);
        logoContainer.append(logo, title)
        base.append(logoContainer, scrollText);
        group.append(base);
        return group;
    },
    group1: function(){
        //create a container to export
        let group = document.createElement(`div`);
        group.classList = `parallax_group`;
        group.id = `group1`;

        //create contents to display - group 1 is base and back (background)
        let base = document.createElement(`div`);
        base.classList = `parallax_layer parallax_layer-base`;
        let text = document.createElement(`div`);
        text.classList = `parallax-text`;
        text.textContent = `MEAT.`;
        
        let back = document.createElement(`div`);
        back.classList = `parallax_layer parallax_layer-back`;
        let img = document.createElement(`img`);
        img.classList = `background`;
        img.src = background1;
        img.alt = `Image of steak.`;
        
        //attach contents and export
        base.appendChild(text);
        back.appendChild(img);
        group.append(base, back);
        return group;
    },
    group2: function(){
        //create a container to export
        let group = document.createElement(`div`);
        group.classList = `parallax_group`;
        group.id = `group2`;

        //create contents to display - group 2 is base (background) and fore
        let base = document.createElement(`div`);
        base.classList = `parallax_layer parallax_layer-base`;
        let back = document.createElement(`img`);
        back.classList = `background`;
        back.src = background2;
        back.alt = `Image of ribs.`;
        
        let fore = document.createElement(`div`);
        fore.classList = `parallax_layer parallax_layer-fore`;
        let text = document.createElement(`div`);
        text.classList = `parallax-text`;
        text.textContent = `MORE MEAT.`;
        
        //attach contents and export
        base.appendChild(back);
        fore.appendChild(text);
        group.append(base, fore);
        return group;
    },
    groupBot: function(){
        //create container to export
        let group = document.createElement(`div`);
        group.classList = `parallax_group`;
        group.id = `groupBot`;

        //create contents to display - top and bot dont need fore/back layer
        let base = document.createElement(`div`);
        base.classList = `parallax_layer parallax_layer-base`;
        let content = document.createElement(`div`);
        content.classList = `parallax-text`;
        content.textContent = `ALL YOU CAN MEAT.`;

        base.appendChild(content);
        group.append(base);
        return group;
    },
};
export default component.home();