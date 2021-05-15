import { parseRequestUrl, reRender, $ } from "../utils";
import ProductApi from '../api/ProductApi';
import firebase from '../firebase';

const ProductEditPage = {
    async render() {

        const { id } = parseRequestUrl();
        const { data: product } = await ProductApi.get(id);

        return /*html*/`
        <form id="form-update-product">
  <div class="mb-3">
    <label for="product-name" class="form-label">Name Product</label>
    <input type="text" class="form-control" id="product-name" value="${product.name}" aria-describedby="emailHelp">
    <label for="product-image" class="form-label p-4">Image</label>
    <img src="${product.photo}" class ="my-2">
    <input type="file" class="form-control" id="product-image" width ="640px" height="480px" aria-describedby="emailHelp">
    <label for="product-price" class="form-label">Price </label>
    <input type="number" class="form-control" id="product-price" value="${product.price}" aria-describedby="emailHelp">
    <label for="product-description" class="form-label">Description</label>
    <input type="text" class="form-control" id="product-description" value="${product.description}" aria-describedby="emailHelp">
  <button type="submit" class="btn btn-primary">Update</button>
</form>
        `
    },
    async afterRender() {
        const { id } = parseRequestUrl();
        const { data: product } = await ProductApi.get(id);

        $('#form-update-product').addEventListener('submit', async (e) => {
            e.preventDefault();
            const productImage = $('#product-image').files[0];
            let storageRef = firebase.storage().ref(`images/${productImage.name}`);
            await storageRef.put(productImage).then(function () {
                console.log('upload thanh cong')
                alert("Update Thành Công");
                storageRef.getDownloadURL().then((url) => {
                    const newProduct = {
                        ...product,
                        name: $('#product-name').value,
                        photo: url,
                        price: $('#product-price').value,
                        description: $('#product-description').value,
                        shipping: true
                    };
                    ProductApi.update(id, newProduct);
                    window.location.hash = '/listproduct';
                })
            })

        });
    }
};
export default ProductEditPage;