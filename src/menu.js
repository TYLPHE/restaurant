let component = {
    menu: function(){
        let element = document.createElement(`div`);
        element.id = `page`;
        let title = document.createElement(`div`);
        title.textContent = `Menu`;
        let about = document.createElement(`div`);
        about.textContent = `Menu section`;
        element.append(title, about);
        return element;
    },
};
export default component.menu();