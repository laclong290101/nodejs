
const Header = {
	async render() {
		return /*html*/`

    <header>
		<div class="container">
			<div class="logo">
				<span>TH</span>
				<strong>Travels</strong>
			</div>
			<div class="mainTop">
				<div class="contactTop">
					<ul>
						<li><i class="fa fa-phone"></i>: +34 266 0413</li>
						<li><i class="fa fa-envelope"></i>: Nguyentruonghai@gmail.com</li>
					</ul>
				</div>
				<div class="navTop">
					<ul class="socialTop">
						<li><a href=""><i class="fab fa-google-plus"></i></a></li>
						<li><a href=""><i class="fab fa-linkedin"></i></a></li>
						<li><a href=""><i class="fab fa-twitter"></i></a></li>
						<li><a href=""><i class="fab fa-facebook-f"></i></a></li>
					</ul>
					<nav>
						<ul>
							<li class="active"><a href="">Home</a></li>
              <li><a href="/#/products">Products</a></li>
              <li><a href="/#/news">News</a></li>
              <li><a href="/#/contact">Contact</a></li>
							<li><a href="/#/signin">Sign in</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</header>
        
        `
	}
}
export default Header;