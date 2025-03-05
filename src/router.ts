
import SearchPage from "./pages/SearchPage.vue";
import HomePage from "./pages/HomePage.vue";
import { createRouter, createWebHistory, RouteComponent } from "vue-router";

interface IRoute {
    path:string
    name: string
    component: RouteComponent
}
const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'home'
    },
    {
        path:'/search',
        component:SearchPage,
        name:'search'
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})