import "./styles.css";
import homePage from "./pages/homePage.js";
import contactPage from "./pages/contactPage.js";
import menuPage from "./pages/menuPage.js";

const nav = document.querySelector('nav')
const contentDiv = document.getElementById('content');

homePage();

function removeCurrentPage() {
    while (contentDiv.firstChild){
        contentDiv.removeChild(contentDiv.firstChild);
    }
}

nav.addEventListener('click', (event) => {
    const button = event.target;

    switch (button.id){
        case 'contact':
                removeCurrentPage();
                contactPage();
            break;
        case 'menu':
                removeCurrentPage();
                menuPage();
            break;
        case 'home':
                removeCurrentPage();
                homePage();
            break;
    }
})
