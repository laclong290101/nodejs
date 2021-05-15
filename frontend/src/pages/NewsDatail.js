
import { parseRequestUrl } from '../utils.js';
import NewsApi from '../api/NewsApi';

const NewDetail = {
    async render() {
        const { id } = parseRequestUrl();
        const { data: News } = await NewsApi.get(id);

        return `
        <div class = "row" >
            <div class ="">
                <img src ="${News.image}" />
            </div>
            <div class="col-6 my-4">
                <h1> ${News.name} </h1>
            </div>
            <div class="col-12">
                <h6> ${News.description} </h6>
            </div>
           
        </div>

     `
    }
}
export default NewDetail;