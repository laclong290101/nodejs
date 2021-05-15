import { $, parseRequestUrl } from "../utils";
import UserApi from "../api/UserApi.js";
const SignUp = {
  render() {
    return/*html */ `
        
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.80.0">
    <title>Signin Template · Bootstrap v5.0</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/sign-in/">

    

    <!-- Bootstrap core CSS -->
<link href="/docs/5.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

    <!-- Favicons -->
<link rel="apple-touch-icon" href="/docs/5.0/assets/img/favicons/apple-touch-icon.png" sizes="180x180">
<link rel="icon" href="/docs/5.0/assets/img/favicons/favicon-32x32.png" sizes="32x32" type="image/png">
<link rel="icon" href="/docs/5.0/assets/img/favicons/favicon-16x16.png" sizes="16x16" type="image/png">
<link rel="manifest" href="/docs/5.0/assets/img/favicons/manifest.json">
<link rel="mask-icon" href="/docs/5.0/assets/img/favicons/safari-pinned-tab.svg" color="#7952b3">
<link rel="icon" href="/docs/5.0/assets/img/favicons/favicon.ico">
<meta name="theme-color" content="#7952b3">


    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>

        <link href="signin.css" rel="stylesheet">
  </head>
  <body class="text-center">
    
<main >
  <form class="form-signin">
    
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    <label for="inputEmail" class="visually-hidden">Username or Email address</label>
    <input id="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
    <label for="inputPassword" class="visually-hidden">Password</label>
    <input id="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
    <a href="" style="text-decoration: none;" ><p class="my-1"> Forgot Password ?</p></a>
    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" id="signin" type="submit">Sign in</button>
    <p class="my-4 "> <a href="/#/register" style="text-decoration: none;">New to TH Travels ? Create an account.</a> </p>
    

    <p class="mt-5 mb-3 text-muted">&copy; 2020–2021</p>
  </form>
</main>

  </body>
</html>

        `
  },
  async afterRender() {
    $('.form-signin').addEventListener('submit', async (e) => {
      e.preventDefault();
      const user = {
        email: $('#email').value,
        password: $('#password').value,
      }
      try {
        const { data } = await UserApi.login(user);
        console.log(data);
        if (data.user.role == 0) {
          window.location.hash = '/';
        } else {
          window.location.hash = '/';
        }
        const token = localStorage.setItem("token", data.token)
      } catch (error) {
        console.log(error.message);
      }
    })
  }
}
export default SignUp;