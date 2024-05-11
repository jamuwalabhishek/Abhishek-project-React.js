
import React from 'react';
import { Link, useNavigate } from "react-router-dom";



function Home() {
 return(
  <div> 

<div id="carouselExampleCaptions" class="carousel slide carousel-fade"data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.pexels.com/photos/14534763/pexels-photo-14534763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..."height="440px"/>
      
    </div>
    <div class="carousel-item">
      <img src="https://images.railyatri.in/ry_images_prod/Welcome-1681377930.jpg" class="d-block w-100" alt="..."height="440px"/>
      
    </div>
    <div class="carousel-item">
      <img src="https://www.shutterstock.com/shutterstock/photos/2026089548/display_1500/stock-vector-mobile-application-for-buying-tickets-online-male-user-booking-bus-tickets-digital-bus-passenger-2026089548.jpg" class="d-block w-100" alt="..."height="440px"/>
     
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="car">
  <center>
<div class="row " >
<div class="col-lg-3 pt-4">
<div class="card" >
  <img src="https://i.ytimg.com/vi/6neL4LdsCZQ/maxresdefault.jpg" alt="..."/>
  <div class="card-body">
  <h5 class="card-title">RED BUS</h5>
              <p class="card-text">Contemporary design - Big, pleasing, thoroughly modern and with a strong presence
                Refined engine - It is outstandingly quiet/smooth with no vibrations </p>
  </div>
  <ul class="list-group list-group-flush">
              <li class="list-group-item">Per person ticket price 1800 Rs</li>
            </ul>
            <div class="card-body">
            <Link to="/Booking">Book</Link> 

            </div>
</div>
</div>
<div class="col-lg-3 pt-4">
<div class="card" >
  <img src="https://www.shutterstock.com/shutterstock/photos/2026089548/display_1500/stock-vector-mobile-application-for-buying-tickets-online-male-user-booking-bus-tickets-digital-bus-passenger-2026089548.jpg" alt="..."/>
  <div class="card-body">
  <h5 class="card-title">booking buses</h5>
              <p class="card-text">Contemporary design - Big, pleasing, thoroughly modern and with a strong presence
                Refined engine - It is outstandingly quiet/smooth with no vibrations </p>
  </div>
  <ul class="list-group list-group-flush">
              <li class="list-group-item">Per ticket price 1200 Rs</li>
            </ul>
            <div class="card-body">
            <Link to="/Booking">Book</Link>
            </div>
</div>
</div>
<div class="col-lg-3 pt-4">
<div class="card" >
  <img src="https://www.justrechargenow.com/wp-content/uploads/2019/07/jrn-bus-book.jpg" alt="..."/>
  <div class="card-body">
  <h5 class="card-title">booking trip</h5>
              <p class="card-text">Contemporary design - Big, pleasing, thoroughly modern and with a strong presence
                Refined engine - It is outstandingly quiet/smooth with no vibrations </p>
  </div>
  <ul class="list-group list-group-flush">
              <li class="list-group-item">Per ticket price 1150 Rs</li>
            </ul>
            <div class="card-body">
            <Link to="/Booking">Book</Link>
            </div>
</div>
</div>
<div class="col-lg-3 pt-4">
<div class="card" >
  <img src="https://zimblecode.com/wp-content/uploads/2021/07/Bus-Ticket-Booking-Mobile-App-Development-Company.png" alt="..."/>
  <div class="card-body">
  <h5 class="card-title">Bus booking</h5>
              <p class="card-text">Contemporary design - Big, pleasing, thoroughly modern and with a strong presence
                Refined engine - It is outstandingly quiet/smooth with no vibrations </p>
  </div>
  <ul class="list-group list-group-flush">
              <li class="list-group-item">per ticket price 1350rs</li>
            </ul>
            <div class="card-body">
            <Link to="/Booking">Book</Link>
             
            </div>
</div>
</div>
</div>
</center>
</div>
<hr/>
<div class=" pt-4" >
        <h1 class=" ps-5 ">BOOKING BUSES</h1>
        <p class=" ps-5 pe-5">Booking is India's most efficient and affordable premier listing service. When you choose Bus, you get the best offers available in the market and negotiate your terms with the top service providers. Our professionals guarantee 100% customer satisfaction while delivering the service on-time.</p>
        <div class="container overflow-hidden text-start">
          <div class="row  ps-2">
            <div class="col-lg-3 ps-2" >
             <div class="ps-2 border bg-light pt-3">
              <center>
               <b class="title-large">1 Crore +</b>
				       <p>Happy Customers</p>
               </center>
             </div>
            </div>
            
            <div class="col-lg-3 ps-2">
              <div class="ps-2 border bg-light  pt-3 ">
                <center>
                <b class="title-large">1000+</b>
				        <p>Cities Served</p>
              </center>
              </div>
             </div>
             <div class="col-lg-3 ps-2">
              <div class="ps-2 border bg-light  pt-3 ">
                <center>
                <b class="title-large">200+</b>
				       <p>Categories</p>
              </center>
              </div>
             </div>
             <div class="col-lg-3 ps-2">
              <div class="ps-2 border bg-light  pt-3">
                <center>
                <b class="title-large">24 *7</b>
				        <p>Customer Support</p>
              </center>
              </div>
             </div>
            
          </div>
        </div>
      
      </div>
      <hr/>
      <div class=" container" >
    
     
         
         <ul class="list-unstyled list-inline text-center">
           <li class="list-inline-item">
             <a class="btn-floating btn-fb mx-1">
               <i class="fab fa-facebook-f"> <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png"height="50px"/></i>
             </a>
           </li>
           <li class="list-inline-item">
             <a class="btn-floating btn-tw mx-1">
               <i class="fab fa-twitter"> <img src="https://cdn-icons-png.flaticon.com/128/1312/1312139.png"height="50px"/>	</i>
             </a>
           </li>
           <li class="list-inline-item">
             <a class="btn-floating btn-gplus mx-1">
               <i class="fab fa-google-plus-g"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" height="40px"/></i>
             </a>
           </li>
         <li class="list-inline-item">
             <a class="btn-floating btn-gplus mx-1">
               <i class="fab fa-google-plus-g"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" height="40px"/></i>
             </a>
           </li>
         </ul>
       
     
       </div>
     
       
       <div class="container text-center text-md-left mt-5">
     
        
         <div class="row mt-3">
     
       
           <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
     
             <h5 class="text-uppercase font-weight-bold">BOOKING BUSES</h5>
             <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"  width=" 60px"/>
             <p>All kinds of Buse's available in here just in one click you book a Bus ticket in easy way </p>
     
           </div>
          
     
           
           <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
     
             <h5 class="text-uppercase font-weight-bold">About</h5>
             <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" width=" 60px"/>
             <p>
               Family trip
             </p>
             <p>
                comerical Buses
             </p>
             
            
     
           </div>
          
          
          
           <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
     
            
             <h5 class="text-uppercase font-weight-bold">Contact</h5>
             <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"  width=" 60px"/>
             <p>
               <i class="fas fa-home mr-3"></i> 5 phase mohali, Chandigarh,Pin-140055,INDIA</p>
             <p>
               <i class="fas fa-envelope mr-3"></i>kuldeep3458@gmail.com</p>
             <p>
               <i class="fas fa-phone mr-3"></i> +919466685559,+9177147321</p>
     
           </div>
          
     
         </div>
         
     
       </div>
       
       
     
  
    
  </div>
 );
  
}

export default Home;