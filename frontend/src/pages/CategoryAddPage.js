import CategoryApi from '../api/CategoryApi';
import Category from '../api/CategoryApi';
import { $, parseRequestUrl } from "../utils";
import CategoryPage from './CategoryPage';
const CategoryAddPage = {
    async render() {
        return /*html*/`
            <form action="" id="form-add">
                <div class="form-group">
                    <input type="text" placeholder="Tên danh mục" class ="form-control" id="category-name"/>
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" id="add-category" value="Add Category"/>
                </div>
            </form>
        `
    },
    async afterRender() {
        $('#form-add').addEventListener('submit', async (e) => {
            e.preventDefault();
            alert("Upload Thành Công");
            const category = {
                name: $('#category-name').value,
            };
            CategoryApi.add(category);
            window.location.hash = '/addcategory';
        })
    }
}
export default CategoryAddPage;