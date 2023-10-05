const pagesKey = 'pages';

// let pagesJson = localStorage.getItem(pagesKey);
// let pagesStore = JSON.parse(pagesJson);

let pagesStore = [
    {
        "link": {"text": "Home", "url": "index.html"},
        "pageTitle": "Home page",
        "content": "This is home page content",
        "published": true
    },
    {
        "link": {"text": "About", "url": "about.html"},
        "pageTitle": "About page",
        "content": "This is about page content",
        "published": true
    },
    {
        "link": {"text": "Contact", "url": "contact.html"},
        "pageTitle": "Contact page",
        "content": "This is contact page content",
        "published": false
    }
]

export default {
    getAllPages() { 
        return pagesStore;
    },

    getSinglePage(index) {
        return pagesStore[index];
    }
}

