import ListProduct from "../components/ListProduct.js";

const AdminProductPage = {
    async render() {
        return /*html*/`
        <body>
    <div class="container-fluid">
        <div class="row">
             <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div class="position-sticky pt-3">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                <span data-feather="home"></span>
                                Dashboard
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <span data-feather="file"></span>
                                Orders
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#/listproduct">
                                <span data-feather="shopping-cart"></span>
                                Products
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#/listcategory">
                                <span data-feather="shopping-cart"></span>
                                Categories
                            </a>
                        </li>
                    </ul>

                </div>
            </nav> 

            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div
                    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Quản lí sản phẩm</h1>
                </div> 
                <div class="table-responsive" id="list-products">
                    ${await ListProduct.render()}
                </div>
            </main>
        </div>
    </div>
</body>
        `
    },
    async afterRender() {
        return ` ${await ListProduct.afterRender()}`
    }
};
export default AdminProductPage;