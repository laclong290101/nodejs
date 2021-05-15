import ProductApi from '../api/ProductApi.js';
import { $, parseRequestUrl } from "../utils";
import CategoryApi from '../api/CategoryApi';
import firebase from '../firebase';
const ProductAddPage = {
    async render() {
        const { data: categories } = await CategoryApi.getAll();
        return /*html*/`
            <form action="" id="form-add">
                <div class="form-group">
                    <input type="text" placeholder="Tên sản phẩm" class ="form-control" id="product-name"/>
                </div>
                <div class="form-group">
                    <input type="file" class ="form-control" id="product-image"/>
                </div>
                <div class="form-group">
                    <input type="number" placeholder="Giá" class ="form-control" id="product-price"/>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Description" class ="form-control" id="product-description"/>
                </div>
                <select class="form-select" id="categories" aria-label="Default select example">
                     <option selected>Open this select </option>
                        ${categories.map(category => {
            return /*html*/`
                               
            <option value="${category._id}"> ${category.name} </option>
                              
                                  `
        }).join("")}
                </select>
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" id="add-product" value="Add product"/>
                </div>
            </form>
        `
    },
    async afterRender() {
        $('#form-add').addEventListener('submit', async (e) => {
            e.preventDefault();
            const productImage = $('#product-image').files[0];
            let storageRef = firebase.storage().ref(`images/${productImage.name}`);
            await storageRef.put(productImage).then(function () {
                console.log('upload thanh cong')
                alert("Upload Thành Công");
                storageRef.getDownloadURL().then((url) => {
                    const product = {
                        categoryId: $('#categories').value,
                        name: $('#product-name').value,
                        photo: url,
                        price: $('#product-price').value,
                        description: $('#product-description').value,
                        shipping: true
                    };
                    ProductApi.add(product);
                    window.location.hash = '/addproduct';
                })
            })


        })
    }
}
export default ProductAddPage;