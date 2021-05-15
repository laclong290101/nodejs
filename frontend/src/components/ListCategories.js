import CategoryApi from "../api/CategoryApi.js";
import { $, reRender, parseRequestUrl } from "../utils.js";

const ListCategory = {
    async render() {
        const { data: Categories } = await CategoryApi.getAll();
        return /*html*/`
        <a href="/#/addcategory" class ="btn btn-primary"> Add New </a> 
        <table class="table table-striped table-sm">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                
                <th width="200">Action</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            ${Categories.map((Category, index) => {
            return `
                <tr>
                    <td>${index}</td>
                    <td>${Category.name}</td>
                    <td>  
                    <a href="/#/editcategory/${Category._id}" class ="btn btn-primary"> Update </a> 
                    <button class="btn btn-danger btn-remove" data-id="${Category._id}"> Remove </button>   
                     </td>
                </tr>
                `
        }).join("")}

        </tbody>
    </table>
        `
    },
    async afterRender() {
        const btns = $('#list-Categories .btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function () {
                // const question = confirm(' You want delete?');
                // if (question) {
                await CategoryApi.remove(id);
                await reRender(ListCategory, '#list-Categories');
                // }

            })
        })
    }
}
export default ListCategory;