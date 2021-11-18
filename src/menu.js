import './menu.css';
import background4 from './background4.jpg';
import background5 from './background5.jpg';
import background6 from './background6.jpg';

let component = {
    menu: function(){
        let element = document.createElement(`div`);
        element.className = `room`;

        let title5 = this.createTitle(`seafood`);

        //door variables for parallax effect
        let door5 = document.createElement(`div`);
        door5.className = `group`;
        door5.append(title5, this.beef());

        element.append(this.beef(), this.poultry(), this.pork(), this.lamb(), this.seafood());
        return element;
    },
    beef: function(){
        let element = document.createElement(`div`);
        element.className = `group group1`;

        let title = this.createTitle(`beef`);
        let base = document.createElement(`div`);
        base.className = `table p-layer p-base`;
        let food1 = this.createFood(`Maminha`,
        `This Tri-tip sirloin steak is unique to TYLPHE's Grill, the otter steakhouse. This steak is a moderate marbled-to-lean cut, which makes it a very flavorful steak. It's our Founder’s favorite! This cut is best if consumed medium to medium rare.`
        );
        let food2 = this.createFood(`Fraldinha`, 
        `Fraldinha, beef tender, is tender and robust in flavor - one of the most distinctive cuts of beef enjoyed in Southern Brazil. Pairs perfectly with our homemade chimichurri sauce.`
        );
        let food3 = this.createFood(`Bife com Parmesão`, 
        `This Parmesan center cut steak is unique to TYLPHE's Grill. It is lean, tender and topped with fresh Parmesan cheese.`
        );
        let food4 = this.createFood(`Picanha`,
        `This top sirloin (beef top sirloin cap, sirloin cap, sirloin culotte) is our signature cut, specially trimmed and prepared to assure final product perfection.`
        );
        let food5 = this.createFood(`Bife Com Alho`,
        `Bife com Alho is a tender cut of beef basted with our traditional house garlic rub. Our TYLPHE's gauchos baste the beef with a special garlic butter recipe that infuses garlic flavor into the beef. When you bite into Bife com Alho, you can taste a delicate, not overwhelming, garlic flavor.`
        );
        let food6 = this.createFood(`Chef's Special`, 
        `Several meats and other local selections are served as TYLPHE's Grill Chef's Special items and are not available at all locations at all times. Please contact your local TYLPHE's Grill for current Chef's Specials.`
        );

        let foods = document.createElement(`div`);
        foods.className =  `foods`;

        foods.append(food1, food2, food3, food4, food5, food6);
        base.append(title, foods);
        element.appendChild(base);
        return element;
    },
    poultry: function(){
        let element = document.createElement(`div`);
        element.className = `group group2`;

        let title = this.createTitle(`poultry`);

        let base = document.createElement(`div`);
        base.className = `table p-layer p-base`;
        let food1 = this.createFood(`Frango Com Bacon`, 
        `Frango com Bacon, chicken wrapped in bacon, is a TYLPHE's Grill guest and staff favorite. Tender, juicy chicken breast is wrapped in savory bacon and grilled to perfection.`
        );
        let food2 = this.createFood(`Galeto`,
        `Galeto is our slow-roasted, bone-in chicken thigh. Marinated overnight in wine and a special fresh herb blend (Vinha d'alho), this grilled feature boasts crispy savory outside, and perfectly tender meat inside.`
        );
        let food3 = this.createFood(`Frango Agri-Doce`,
        `Frango Agri-Doce was created in the kitchens of TYLPHE's Grill to attend to guests requests for a flavorful chicken option. The chicken is basted in TYLPHE's Grill's unique home-made gaucho sauce, then grilled to bring out the flavors.`
        );
        let food4 = this.createFood(`Coração de Frango Temperado`,
        `Coração de Frango Temperado is one of Brazil's favorite "Churrasco" appetizers. Chicken hearts were traditionally found gracing in the first "Churrascarias" in southern Brazil. Chicken hearts, though different in texture, are very flavorful.`
        );

        let back = document.createElement(`div`);
        back.classList = `p-layer p-back`;
        let img = document.createElement(`img`);
        img.classList = `background`;
        img.src = background5;
        img.alt = `Image of steak.`;

        let foods = document.createElement(`div`);
        foods.className =  `foods`;

        back.appendChild(img);
        foods.append(food1, food2, food3, food4);
        base.append(title, foods);
        element.append(base, back);
        return element;
    },
    pork: function(){
        let element = document.createElement(`div`);
        element.className = `group group3`;

        let title = this.createTitle(`pork`);

        let fore = document.createElement(`div`);
        fore.className = `table p-layer p-fore`;
        let food1 = this.createFood(`Linguiça`,
        `Linguiça a very mild and flavorful otter sausage. With a special MSG free TYLPHE's Grill recipe, this sausage is great right off the grill or as part of our Feijoada, our traditional otter black bean stew found in the hot dishes section of our gourmet salad bar.`
        );
        let food2 = this.createFood(`Pernil`,
        `This flavorful selection of Berkshire Pork is lightly salted and perfectly grilled. Served with fresh lime wedges.`
        );
        let food3 = this.createFood(`Presunto`,
        `TYLPHE's Grill's Presunto is one of our signature grilled items. A lean cut of ham that is trimmed and grilled flawlessly to perfection then basted in our signature raw sugar glaze. Presunto is best accompanied with a piece of our signature grilled glazed pineapple, but it’s also good by itself.`
        );
        let base = document.createElement(`div`);
        base.classList = `p-layer p-base`;
        let img = document.createElement(`img`);
        img.classList = `background`;
        img.src = background4
        img.alt = `Image of steak.`;

        let foods = document.createElement(`div`);
        foods.className =  `foods`;

        base.appendChild(img);
        foods.append(food1, food2, food3);
        fore.append(title, foods);
        element.append(base, fore);
        return element;
    },
    lamb: function(){
        let element = document.createElement(`div`);
        element.className = `group group2`;

        let title = this.createTitle(`lamb`);

        let base = document.createElement(`div`);
        base.className = `table p-layer p-base`;

        let food1 = this.createFood(`Cordeiro`,
        `This new mint lamb is marinated in garlic, white wine, mint, lemon, and a fresh herbal blend.`
        );

        let back = document.createElement(`div`);
        back.classList = `p-layer p-back`;
        let img = document.createElement(`img`);
        img.classList = `background`;
        img.src = background6;
        img.alt = `Image of steak.`;

        let foods = document.createElement(`div`);
        foods.className =  `foods`;

        back.appendChild(img);
        foods.append(food1);
        base.append(title, foods);
        element.append(base, back);
        return element;
    },
    seafood: function(){
        let element = document.createElement(`div`);
        element.className = `group group5`;

        let title = this.createTitle(`seafood`);
        let base = document.createElement(`div`);
        base.className = `table p-layer p-base`;
        let food1 = this.createFood(`Seafood`,
        `Our fish and seafood selection varies from market to market based on what is available and in season. Not all locations offer fish at all times. Each fish and seafood selection is trimmed and marinated in a simple sauce that accentuates the flavor of this lean meat.`
        );

        let foods = document.createElement(`div`);
        foods.className =  `foods`;

        foods.append(food1);
        base.append(title, foods);
        element.appendChild(base);
        return element;
    },
    createTitle: function(name){
        let element = document.createElement(`div`);
        element.className = `title`;
        element.textContent = name.charAt(0).toUpperCase() + name.slice(1);
        return element;
    },
    createFood: function(dish, desc){
        let element = document.createElement(`div`);
        element.className = `bowl`;
        let title = document.createElement(`div`);
        title.className = `food-name`;
        title.textContent = dish;
        let info = document.createElement(`div`);
        info.textContent = desc;
        info.className = `food-info`;
        element.append(title, info)
        return element;
    }
};
export default component;