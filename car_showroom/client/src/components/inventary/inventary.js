import React from "react";
import { Link } from "react-router-dom"; 

export default class Inventary extends React.Component{
    render(){
        return(
            <>
            {/* Navigation     */}
            
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top col">
      <div class="col-sm-4"></div>
          <div class="col-lg-6">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link to="/main"><a class="nav-link " aria-current="page" href="#">Home</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/inventary">
              <p class="nav-link active" >Inventary</p>
              </Link>
            </li>
            <li class="nav-item">
            <Link to='/faq'>
              <p class="nav-link" >About</p>
              </Link>
            </li>
            <li class="nav-item">
            <Link to='/userlog'>
              <p class="nav-link" >Logout</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    {/* Navigation */}
    <div className="col">
            <div class='row bg-light '>

            <div class='col-sm-2'></div>

            <div class="input-group1 mt-5 col-sm-2">
            <label class="ml-5 mt-3">MODELS</label>
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>Click</option>
              <option value="1">SUV</option>
              <option value="2">MUV</option>
              <option value="3">HATCHBACK</option>
            </select>
            <label class="ml-5 mt-3">CYLINDER</label>
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>Click</option>
              <option value="1">4</option>
              <option value="2">6</option>
              <option value="3">8</option>
            </select>
          </div>

          <div class="input-group1 mt-5 col-sm-4">
            <label class="ml-5 mt-3 text-dark">FEATURES</label>
            <select class="custom-select" >
              <option selected>Click</option>
              <option value="1">LED headlight </option>
              <option value="2">Reaversing Camera </option>
              <option value="3">Keyless Start </option>
              <option value="4"> Blind Spot Alert </option>
            </select>
            <label class="ml-5 mt-3">FUEL-TYPE</label>
            <select class="custom-select" >
              <option selected>Click</option>
              <option value="1">Petrol</option>
              <option value="2">Deisel</option>
              <option value="3">Electric</option>
            </select>
            <label class="ml-5 mt-3">PRODUCT-ID</label>
            <select class="custom-select" >
              <option selected>Click</option>
              <option value="1">101</option>
              <option value="2">102</option>
              <option value="3">103</option>
            </select>
            </div>

            <div class="input-group1 mt-5 col-sm-2">
            <label class="ml-5 mt-3">TRANSMISSION</label>
            <select class="custom-select" >
              <option selected>Click</option>
              <option value="1">Automatic</option>
              <option value="2">Manual</option>
            </select>

            <label class="ml-5 mt-3">COLOR</label>
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>Click</option>
              <option value="1">White</option>
              <option value="2">Black</option>
              <option value="3">red</option>
              <option value="4">blue</option>
            </select>
          </div>
          <div class="col-sm-2"></div>
          </div>
          <div class="row btnn ">
            <div class="col-sm-5"></div>
            <div class="col-sm-5 ml-5">
              <Link to="/result">
                <button class="btn  btn btn-outline-success">SUBMIT</button><br/>
                </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 inventary-img">
                
            </div>
            <div className="col-sm-6">

            </div>
          </div>




          {/* Fotter */}
          

        {/* <div class=" "> */}
                <div class="text-light row mt-5 foot-bg">
                    <div class="col-sm-2"></div>
                <div class="col-sm-2 mt-5">
                    <ul>
                    <li>Listing</li>
                    <li>FAQ</li>
                    <li>About us</li>
                    </ul>
                </div>
                <div class="col-sm-2 mt-5">
                    <ul>
                    <li>Blog</li>
                    <li>Our team</li>
                    <li>Contact</li>
                    </ul>
                </div>
                <div class="col-sm-3 mt-5">
                    <p>Award-winning, family owned dealership of new and pre-owned vehicles with several locations across the city. Lowest prices and the best customer service guaranteed.</p>
                </div>
                <div class="col-sm-3 text-right mt-5">
                    <h2><span class="text-danger">9988989078</span></h2>
                    <h5>support@gmail.com</h5>
                </div>
                {/* </div> */}
                <hr/>
                <div class="text-light row mt-3">
                    <div class="col-lg-12">
                        <p>Copyright &copy; 2022. All rights reserved. Privacy Policy</p>
                    </div>
                </div>
            </div>

{/* Fotter */}
 
</div>

            </>
        )
    }
}
