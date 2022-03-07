function navbar(){
    return `<div class="logo">
    <img src="https://i.ibb.co/Kxg4KW0/logo-black.png">
</div>

<div class="menu">
    <a href="index.html"><div class="home">Home</div></a>
   



    <div class="dropdown">
    <button onclick="myFunction()" class="dropbtn">Meal Plans</button>
    <div id="myDropdown" class="dropdown-content">
      <a href="weight_loss_meal_plan.html">Weight loss meal plan</a>
      <a href="maintainance_meal_plan.html">Maintenance meal plan</a>
      <a href="#contact">Athletic meal plan</a>
      <a href="#contact">Keto meal plan</a>
      <a href="#contact">Transformation challenegs</a>
    </div>
  </div>



 


    

 <a href="health.html"><div class='home'>Health Coaching</div></a>





  <div class="dropdown">
  <button onclick="myFunct()" class="dropbtn">Products</button>
  <div id="Dropdown" class="dropdown-content">
    <a href="#home">Vegan Sweets</a>
    <a href="#about">Low call sauces</a>
    <a href="#contact">Nut butters</a>
    <a href="#contact">Fresh bakes</a>
  </div>
</div>


   



    <a href="blog.html"><div class="home">Blog</div></a>





   
   



    <div class="dropdown">
  <button onclick="myFun()" class="dropbtn">About Us</button>
  <div id="Dropdown3" class="dropdown-content">
    <a href="#home">Our Story</a>
    <a href="#about">FAQ</a>
    <a href="#contact">Testimonials</a>

  </div>
</div>



</div>

<a href="tel:9100347480"><div ><button class="btn">Call:9100347480</button></div></a>
`
}

export default navbar;