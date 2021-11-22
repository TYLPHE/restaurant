import './contact.css';

let component = {
    contact: function(){
        let element = document.createElement(`div`);
        let title = document.createElement(`div`);
        title.className = `title`;
        title.textContent = `About the Project`;
        let about = document.createElement(`p`);
        about.innerHTML = `This assignment is from <a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/restaurant-page">The Odin Project's JavaScript section!</a> The primary focus is to use <a href = "https://webpack.js.org/">webpack</a> to import and export various files (like multiple js/css files, background images, fonts) in a source folder and use the 'npx webpack' command in terminal to bundle all our source files to a nice functioning website.
        </p>
        <p><br>
        Creating the skeleton of the project was as easy as following <a href="https://webpack.js.org/guides/getting-started/">webpack's getting started guide</a>. I, however, wanted to expand on more css features. This project also focuses on parallax. It was a deep rabbit hole, because my initial thought was to create a parallax effect from JavaScript. However, I learned that it can be done from CSS only! 
        </p>
        <p><br>
        I used <a href="https://keithclark.co.uk/articles/pure-css-parallax-websites/">this guide</a>, written by Keith Clark, to help me figure it out. I was not able to fully understand how CSS parallax worked until inspecting his example. I learned that its a chain of divs alternating between content and background. This chain then has either a slow background or fast foreground scrolling with it depending if the base is content or background! In this website, an example can be found on the menu page. The poultry, and lamb sections have the text as the base with the slow background. However, the pork section between is actually a background chained to the poultry and lamb text. The pork text is a fast-scrolling foreground div.
        </p>
        <p><br>
        Anyway, I learned a lot from this project and can't wait to see what else TOP has in store for me!
        </p>
        <p><br>
        Visit my GitHub here: <a href="https://github.com/tylphe">https://github.com/tylphe</a>
        </p>
        `;
        element.append(title, about);
        return element;
    },
};
export default component.contact();