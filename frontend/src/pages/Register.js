import { $, parseRequestUrl } from "../utils";
import UserApi from "../api/UserApi.js";
const Register = {
  async render() {
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
    <!-- Custom styles for this template -->
    <link href="signin.css" rel="stylesheet">
  </head>
  <body class="text-center">
    
<main class="form-signin">
  <form id="form-add">
    <label class="visually-hidden">Username</label>
    <input type="text" id="username" class="form-control" placeholder="Username" required>

    <label class="visually-hidden">Email address</label>
    <input type="email" id="email" class="form-control my-2" placeholder="Email address" required>
    <label for="inputPassword" class="visually-hidden">Password</label>
    <input type="password" id="password" class="form-control" placeholder="Password" required>
  
    </div>
    <div class="form-group">
                    <input type="submit" class="btn btn-primary" id="add-register" value="Add Register"/>
                </div>
    
    <p class="mt-5 mb-3 text-muted">&copy; 2020–2021</p>
  </form>
</main>
  </body>
</html>

        `
  },
  async afterRender() {
    $('#form-add').addEventListener('submit', async (e) => {
      e.preventDefault();
      alert("Đăng kí Thành Công");
      const user = {
        name: $('#username').value,
        email: $('#email').value,
        password: $('#password').value,
        role: 0,
      };
      await UserApi.add(user);

    })
  }
}

export default Register;