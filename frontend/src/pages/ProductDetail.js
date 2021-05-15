
import { parseRequestUrl } from '../utils.js';
import ProductApi from '../api/ProductApi';

const ProductDetail = {
    async render() {
        const { id } = parseRequestUrl();
        const { data: product } = await ProductApi.get(id);

        return /*html*/`
       <style>
* {
	box-sizing: border-box;
}
body {
	height: 100%;
}

body {
	display: grid;
	grid-template-rows: 1fr;
	font-family: "Raleway", sans-serif;
}

h3 {
	font-size: 1.7em;
	letter-spacing: 1.2px;
    color: #000000;
}

/* ----- Product Section ----- */
.product {
	display: grid;
	grid-template-columns: 0.9fr 1fr;
	margin: auto;
	padding: 2.5em 0;
	min-width: 600px;
	border-radius: 5px;
}

/* ----- Photo Section ----- */
.product__photo {
	position: relative;
}
.photo-container {
	position: absolute;
	left: -2.5em;
	display: grid;
	grid-template-rows: 1fr;
	width: 100%;
	height: 100%;
	border-radius: 6px;
    margin-bottom: 20px; 

}
.photo-main {
	border-radius: 6px 6px 0 0;
	img {
		position: absolute;
		left: -3.5em;
		top: 2em;
		max-width: 70%;
        margin-bottom: 20px; 

	}

}
/* ----- Informations Section ----- */
.product__info {
	padding: 0.8em 0;
}

.title {
	h1 {
		margin-bottom: 0.1em;
		color: #000000;
		font-size: 1.5em;
		font-weight: 900;
	}

	span {
		font-size: 0.7em;
		color: $color-secondary;
	}
}

.price {
	margin: 1.5em 0;
	color: $color-highlight;
	font-size: 1.2em;

	span {
		padding-left: 0.15em;
		font-size: 2.9em;
	}
}

.variant {
	overflow: auto;

	h3 {
		margin-bottom: 1.1em;
	}

	li {
		float: left;
		width: 35px;
		height: 35px;
		padding: 3px;
		border: 1px solid transparent;
		border-radius: 3px;
		cursor: pointer;

		&:first-child,
		&:hover {
			border: 1px solid $color-secondary;
		}
	}

	li:not(:first-child) {
		margin-left: 0.1em;
	}
}

.description {
	clear: left;
	margin: 2em 0;

	h3 {
        color: #000000
		margin-bottom: 1em;
	}

	ul {
		font-size: 0.8em;
		list-style: disc;
		margin-left: 1em;
	}

	li {
		text-indent: -0.6em;
		margin-bottom: 0.5em;
        margin-left: 0.5em;

        
	}
}

.buy--btn {
	padding: 1.5em 3.1em;
	border: none;
	border-radius: 7px;
	font-size: 0.8em;
	font-weight: 700;
	letter-spacing: 1.3px;
	color: #fff;
	background-color:#E31C23;
	box-shadow: 2px 2px 25px -7px $color-primary;
	cursor: pointer;

	&:active {
		transform: scale(0.97);
	}
}
        </style>
        <section class="product">
        <div class="product__photo">
            <div class="photo-container">
                <div class="photo-main">
                    <img src ="${product.photo}" width ="480px" />
                </div>
            </div>
        </div>
        <div class="product__info">
            <div class="title">
                <h1> ${product.name} </h1>
            </div>
            <div class="price">
                R$ <span>${product.price}</span>
            </div>
            <div class="description">
                <h3>BENEFITS</h3>
                <ul>
                    <li>${product.description}</li>
                    
                </ul>
            </div>
            <button class="buy--btn">ADD TO CART</button>
        </div>
    </section>
     `
    }


}
export default ProductDetail;