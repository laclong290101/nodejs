import ProductApi from '../api/ProductApi';
import CategoryApi from '../api/CategoryApi';
import { $ } from './../utils.js';

const ProductsPage = {
    async render() {

        try {

            const { data: products } = await ProductApi.getAll();
            const { data: categories } = await CategoryApi.getAll();
            console.log();
            console.log(products);
            const result = products.map(product => {
                return /*html*/`
                    <div class = "col-4">
                        <div class="card p-4" >
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

            return /*html*/`
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
           <div class="navbar-brand" >Danh mục</div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        ${categories.map(category => {
                return /*html*/`
                   
                      <li class =""><a class="p-2" style="text-decoration: none;" href="/#/category/${category._id}" > ${category.name} </a></li>
                  
                      `
            }).join("")}
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="text" id="input" onclick="myFunction()">Search</button>
      </form>
      <p id="demo"></p>
    </div>
    </div>
    </nav>
    <select class="form-select my-2" aria-label="Default select example" id = "filter">
 
    <option value = "">Mức giá</option>
    <option value = "all">Tất cả</option>
    <option value = "asc" >Thấp - Cao</option>
    <option value = "desc">Cao - Thấp</option>
        <option value = "200">200-400</option>
        <option value = "">400-600</option>
        <option value = "">>600 </option>
    </select>
                <div class ="row dataRender">
                     ${result};
                </div>
            `


        } catch (error) {
            console.log(error);
        }
    },
    async afterRender() {
        const { data: products } = await ProductApi.getAll();
        const dataRender = $('.dataRender');
        $('#filter').addEventListener('change', (e) => {
            if (e.target.value === 'asc') {
                const filter = products.sort((a, b) => a.price - b.price);
                dataRender.innerHTML = filter.map(product => {
                    return `
                    <div class = "col-4">
                        <div class="card p-4" >
                            <img src="${product.photo}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.price}</p>
                            <a href="/#/products/${product.id}" class="btn btn-primary">Chi tiết</a>
                        </div>
                        </div>
                    </div>
            `
                }).join("")
            }
            if (e.target.value == "desc") {
                const filter = products.sort((a, b) => b.price - a.price);
                dataRender.innerHTML = filter.map(product => {
                    return `
                    <div class = "col-4">
                        <div class="card p-4" >
                            <img src="${product.photo}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.price}</p>
                            <a href="/#/products/${product.id}" class="btn btn-primary">Chi tiết</a>
                        </div>
                        </div>
                    </div>
            `
                }).join("")
            }
        })
    }

}
//     checkAdult(product) {
//         return product.name =  document.getElementById("input").value;
//       }

//      myFunction() {
//         document.getElementById("demo").innerHTML = products.filter(checkAdult);
//       }

//   }
export default ProductsPage;