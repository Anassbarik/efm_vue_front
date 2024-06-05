<script>
export default {
}
</script>
<template>

<footer class="footer">

<div class="logo-footer">
            <h1>Mediax</h1>
        </div>
<div class="footer-container">
   <div class="footer-row">
    
   
    
       <div class="footer-col">
        <div class="ps">
        <img src="https://wordpress.themeholy.com/mediax/wp-content/uploads/2023/12/logo-footer.svg" alt="Footer-logo">
        <br>
        <br>
        <ul>
            <li><a href="">Subscribe to out newsletter today to receive latest news administrate cost effective for tactical data</a></li>
            <br>
            <li><a href=""><i class='bx bxs-location-plus'></i>    2478 Street City Ohio 90255</a></li>
            <li><a href=""><i class='bx bxs-message'></i>  info@mediax.com</a></li>
            <li><a href=""><i class='bx bxs-phone' ></i>  +(402) 763 282 46</a></li>
        </ul>
    </div>
    </div>
    <div class="footer-col">
        <div class="pos">
        <h4>company</h4>
        <ul>
            <li><a href="#"> about us</a></li>
            <li><a href="#"> our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
        </ul>
    </div>
    </div>
   
       
       </div>
   </div>
<div class="bt-footer">
       <p>Copyright <i class='bx bxs-copyright' ></i> 2024 Mediax. All Rights Reserved.</p>
</div>
</footer>
</template>
<style>
.footer-container{
	max-width: 1170px;
	margin:auto;
}
.footer-row{
	display: flex;
	flex-wrap: wrap;
}
ul{
	list-style: none;
	line-height: 1.5;
	font-family: 'Poppins', sans-serif;
}
.footer{
	background-color: #24262b;
    padding: 150px 0;
 position: relative;
 top: 100px;
}

.footer-col{
   width: 25%;
   padding: 0 15px;
   
   
}
.footer-col .pos {
	position: absolute;
	left: 60%;
	bottom:180px;
}
.footer-col .ps {
 position: relative;
 top: 100px;
 left: 10px;
 top: 70px;
	
	
}
.footer-col h4{
	font-size: 18px;
	color: #ffffff;
	text-transform: capitalize;
	margin-bottom: 35px;
	font-weight: 500;
	position: relative;
	line-height: 1.5;
	font-family: 'Poppins', sans-serif;
}
.footer-col h4::before{
	content: '';
	position: absolute;
	left:0;
	bottom: -10px;
	background-color: #1ee92f;
	height: 2px;
	box-sizing: border-box;
	width: 50px;
}
.footer-col ul li:not(:last-child){
	margin-bottom: 10px;
}
.footer-col ul li a{
	font-size: 16px;
	text-transform: capitalize;
	color: #ffffff;
	text-decoration: none;
	font-weight: 300;
	color: #bbbbbb;
	display: block;
	transition: all 0.3s ease;
}
.footer-col ul li a:hover{
	color: #ffffff;
	padding-left: 8px;
}
.footer-col .social-links a{
	display: inline-block;
	height: 40px;
	width: 40px;
	background-color: rgba(255,255,255,0.2);
	margin:0 10px 10px 0;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: #ffffff;
	transition: all 0.5s ease;
}
.footer-col .social-links a:hover{
	color: #24262b;
	background-color: #ffffff;
}

/*responsive*/
@media(max-width: 767px){
  .footer-col{
    width: 50%;
    margin-bottom: 30px;
}
}
@media(max-width: 574px){
  .footer-col{
    width: 100%;
}
}
.footer-col ul li a i{
	color: #1ee92f;
	
}
.logo-footer h1{
	text-align: center;
	font-size: 100px;
	font-weight:1000;
	color: #fff;
	font-family: "Josefin Sans", sans-serif;
	font-optical-sizing: auto;
	font-weight: weight;
	font-style: normal;
	letter-spacing: 40px;
	position: relative;
    bottom: 60px;
}

.logo-footer h1::before{
	content: '';
	position: absolute;
	left:0;
	bottom: -20px;
	background-color: #1ee92f;
	height: 5px;
	box-sizing: border-box;
	width:100%;
}

.bt-footer{
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 50px;
	margin-top: 70px;
	background-color:#1F5FFF;
}
.bt-footer p{
	text-align: center;
	padding-top: 12px;
	font-size: 20px;
	color: #fff;
	font-family: "Josefin Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
}
</style>
