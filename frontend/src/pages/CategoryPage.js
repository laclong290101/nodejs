import { $, parseRequestUrl } from "../utils";
import ProductApi from '../api/ProductApi';
import CategoryApi from '../api/CategoryApi';

const CategoryPage = {
    async render() {
        const { id } = parseRequestUrl();
        const { data: products } = await ProductApi.getAll();
        const { data: categories } = await CategoryApi.getAll();

        const result = products.filter(product =>
            product.categoryId == id).map(product => {
                return `

                
                <div class = "col-4">
                <div class="card" >
                    <img src="${product.photo}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price}</p>
                    <a href="/#/products/${product._id}" class="btn btn-primary">Chi tiết</a>
                </div>
                </div>
                </div>
                
               
                
            `
            }).join("")

        return `
        <div class ="row">
        ${result};
        </div>`;
    }
}
export default CategoryPage;