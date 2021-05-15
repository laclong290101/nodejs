import NewsApi from '../api/NewsApi.js';

const NewsPage = {
    async render() {

        try {

            const { data: news } = await NewsApi.getAll();

            const result = news.map(news => {
                return `
               
                    <div class ="m-3 col-6">
                        <div class="card" >
                            <img src="${news.photo}" class="card-img-top" alt="${news.name}">
                        <div class="card-body">
                            <h5 class="card-title">${news.name}</h5>
                            <a href="/#/news/${news._id}" class="btn btn-primary">Chi tiết</a>
                        </div>
                        </div>
                        </div>
            `

            }).join("")

            return /*html*/`
            
                <div class ="row">
                     ${result};
                </div>
            `


        } catch (error) {
            console.log(error);
        }
        // const { products } = data;

    }
}
export default NewsPage;