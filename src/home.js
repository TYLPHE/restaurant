let component = {
    home: function(){
        let element = document.createElement(`div`);
        element.id = `page`;
        let title = document.createElement(`div`);
        title.textContent = `Restaurant by TYLPHE`;
        let about = document.createElement(`div`);
        about.textContent = `About section`;
        element.append(title, about);
        return element;
    },
};
export default component.home();