let component = {
    contact: function(){
        let element = document.createElement(`div`);
        element.id = `page`;
        let title = document.createElement(`div`);
        title.textContent = `Contacts`;
        let about = document.createElement(`div`);
        about.textContent = `Contacts section`;
        element.append(title, about);
        return element;
    },
};
export default component.contact();