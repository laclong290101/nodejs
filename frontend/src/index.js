import CategoryPage from './pages/CategoryPage.js';
import Dashboard from './pages/Dashboard.js';
import Error404Page from './pages/Error404Page.js';
import HomePage from './pages/Homepage.js';
import ProductAddPage from './pages/ProductAddPage.js';
import ProductDetail from './pages/ProductDetail.js';
import ProductsPage from './pages/ProductsPage.js';
import SignIn from './pages/SignIn.js';
import { parseRequestUrl, $, reRender } from './utils.js';
import Header from './components/Header.js';
import AdminProductPage from './pages/AdminProductPage.js';
import ProductEditPage from './pages/ProductEditPage.js';
import ContactPage from './pages/ContactPage.js';
import NewsPage from './pages/NewsPage.js';
import NewDetail from './pages/NewsDatail.js';
import AdminCategoryPage from './pages/AdminCategoryPage.js';
import Register from './pages/Register.js';
import CategoryEditPage from './pages/CategoryEditPage.js';
import CategoryAddPage from './pages/CategoryAddPage.js';

const routes = {
    '/': HomePage,
    '/products': ProductsPage,
    '/products/:id': ProductDetail,
    '/dashboard': Dashboard,
    '/category/:id': CategoryPage,
    '/addproduct': ProductAddPage,
    '/listproduct': AdminProductPage,
    '/signin': SignIn,
    '/editproduct/:id': ProductEditPage,
    '/contact': ContactPage,
    '/news': NewsPage,
    '/news/:id': NewDetail,
    '/listcategory': AdminCategoryPage,
    '/register': Register,
    '/editcategory/:id': CategoryEditPage,
    '/addcategory': CategoryAddPage
}

const router = async () => {
    const { resource, id } = parseRequestUrl();
    const parseUrl = (resource ? `/${resource}` : '/') + (id ? `/:id` : '');
    const page = routes[parseUrl] ? routes[parseUrl] : Error404Page;
    $('#header').innerHTML = await Header.render();
    $('#main-content').innerHTML = await page.render();
    await page.afterRender();

}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);