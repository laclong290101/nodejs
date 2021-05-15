import ProductApi from "../api/ProductApi.js";
import { $, reRender, parseRequestUrl } from "../utils.js";

const ListProduct = {
    async render() {
        const { data: products } = await ProductApi.getAll();
        return /*html*/`
        <a href="/#/addproduct" class ="btn btn-primary"> Add New </a> 
        <table class="table table-striped table-sm">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th width="200">Action</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            ${products.map((product, index) => {
            return `
                <tr>
                    <td>${index}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>  
                    <a href="/#/editproduct/${product._id}" class ="btn btn-primary"> Update </a> 
                    <button class="btn btn-danger btn-remove" data-id="${product._id}"> Remove </button>   
                     </td>
                </tr>
                `
        }).join("")}

        </tbody>
    </table>
        `
    },
    async afterRender() {
        const btns = $('#list-products .btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function () {
                // const question = confirm(' You want delete?');
                // if (question) {
                await ProductApi.remove(id);
                await reRender(ListProduct, '#list-products');
                // }
            })
        })
    }
}
export default ListProduct;