<script>
export default {
}
</script>
<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a href="/">
      <div class="logo-bg">
        <img class="logo-img" src="https://wordpress.themeholy.com/mediax/wp-content/uploads/2023/12/logo.svg" alt="logo">
      </div>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#appointment">Book Appointment</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#doctors-sec">Doctors</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

<!-- Offcanvas -->
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas Navbar</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
 
</template>
<style>
.logo-bg {
  background-image: url(https://wordpress.themeholy.com/mediax/wp-content/uploads/2023/12/logo_bg_1.png);
  position: absolute;
  top: 0;
  left: 0;
  height: 100px;
  width: auto;
  background-size: auto;
  background-repeat: repeat;
  background-position: center right;
  z-index: 99;
}
.logo-img {
    position: relative;
    z-index: 100;
    padding: 20px 50px;
}
.navbar{
  height: 100px;

}
</style>
