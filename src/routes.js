import {createRouter, createWebHashHistory} from 'vue-router';
import PageViewer from './views/PageViewer.vue';
import CreatePage from './views/CreatePage.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/:index?', component: PageViewer, props: true },
        { path: '/pages', component: Pages },


        { path: '/createPage', component: CreatePage }
    ]
})

export default router;