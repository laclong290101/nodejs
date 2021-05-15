import { parseRequestUrl, reRender, $ } from "../utils";
import CategoryApi from '../api/CategoryApi.js';

const CategoryEditPage = {
    async render() {

        const { id } = parseRequestUrl();
        const { data: category } = await CategoryApi.get(id);

        return /*html*/`
        <form id="form-update-category">
        <div class="mb-3">
    <label for="category-name" class="form-label">Name  Category</label>
    <input type="text" class="form-control" id="category-name" value="${category.name}" aria-describedby="emailHelp">
  <button type="submit" class="btn btn-primary">Update</button>
</form>
        `
    },
    async afterRender() {
        const { id } = parseRequestUrl();
        $('#form-update-category').addEventListener('submit', (e) => {
            e.preventDefault();
            const newCategory = {
                name: $('#category-name').value
            };
            CategoryApi.update(id, newCategory);
            window.location.hash = '/listcategory';
        })

    }
};
export default CategoryEditPage;