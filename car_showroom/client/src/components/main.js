import React from 'react';
import { Link } from 'react-router-dom';

export default class Main extends React.Component{
    render(){
        return(
            <div class="">
    {/* Navigation     */}

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top col">
      <div class="col-sm-4"></div>
          <div class="col-lg-6">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link to="/main"><p class="nav-link active" aria-current="page" href="#">Home</p>
              </Link>
            </li>
            <Link to="/inventary">
              <li class="nav-item">
              <p class="nav-link " >Inventary</p>
            </li>
            </Link>
            <li class="nav-item">
            <Link to='/faq'>
              <p class="nav-link " >About</p>
              </Link>
            </li>
            <li class="nav-item">
            <Link to='/cus_profile'>
              <p class="nav-link " >Profile</p>
              </Link>
            </li>
            <li class="nav-item">
            <Link to='/'>
              <p class="nav-link " >Logout</p>
              </Link>
            </li>
          </ul>
        </div>
        <div class="col-sm-1"></div>
    </nav>
    {/* Navigation */}
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={require("../image_src/th.jfif")} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={require("../image_src/Model-X-Main-Hero-Desktop-LHD.jfif")}alt="Second slide"/>
    </div>
    {/* <div class="carousel-item">
      <img class="d-block w-100" src={require("../image_src/Model-X-Main-Hero-Desktop-LHD.jfif")} alt="Third slide"/>
    </div> */}
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    {/* About */}
    <div className='col'>
    <div class="row grid-gap ml-2 col">
        <div class="col-lg-6">
          <h3>About <span class="text-danger">Car Spot</span> Dealership</h3>
          <h5 class="mt-5">Everything you need to build an amazing dealership automotive responsive website</h5>
          <p>Carspot is not only a hub where buyers and sellers can interact, it is also a comprehensive automotive portal with a forum dedicated to all automotive discussions, a blog that keeps the users up to date with the latest happenings in the automotive industry.</p>
        </div>
        <div class="col-lg-6">
          <img class="about_content-img" src={require("../logo/gtr.png")}/>
        </div>
      </div>

    {/* About */}

    {/* dealership */}
         
      <div class="row grid-gap ml-2">
          <div class="col-md-3 ">
            <div class="services-grid">
              <div class="icons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
                    <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                    <i class="bi bi-key">
                    </i>
              </div>
              <h4>Dealership</h4>
              <p>A business operated under an authorization to sell or distribute a company's goods or services in a particular area.</p>
            </div>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6">
          <div class="services-grid">
            <div class="icons">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
                <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
              </svg>
              <i class="bi bi-bar-chart-fill"></i>
            </div>
            <h4> Engine Upgrades</h4>
            <p>We have the right caring, experience and dedicated professional for you.</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="services-grid">
             <div class="icons">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-shield-shaded" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 14.933a.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067v13.866zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
              </svg>
              <i class="bi bi-shield-shaded"></i>
             </div>
             <h4> Security Inspections</h4>
             <p>We have the right caring, experience and dedicated professional for you.</p>
          </div>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6">
          <div class="services-grid">
             <div class="icons">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-disc" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1zm4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5z"/>
              </svg>
              <i class="bi bi-disc"></i>
            </div>
             <h4>Break Checkup</h4>
             <p>We have the right caring, experience and dedicated professional for you.</p>
          </div>
        </div>
    </div> 
    
     </div>

{/* dealership */}

{/* features */}

          <div class=" bg-light grid-gap col">
          <div className='row'>
                <div class="col-lg-12">
                    <h3 class="text-center">Latest <span class="text-danger">Featured</span> Cars</h3>
                    <p class="mt-4 text-center">Here's the top 10 features the study says buyers want the most in their next vehicles</p>
                </div>
                </div>
                <div className='col'>
            <div class="row bg-light ml-4">
                <div class="col-md-4">
                <div class="featured-cars-card">
                    <img class="featured-cars" src={require("../logo/4.jpg")} />
                    <h5 class="ml-2 mt-3">2022 Audi A4 Quaratto Primium</h5>
                </div>
                </div>
                <div class="col-md-4">
                    <div class="featured-cars-card">
                        <img class="featured-cars" src={require("../logo/5.jpg")} />
                        <h5 class="ml-2 mt-3">Honda Civic 2017 sports Edition</h5>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="featured-cars-card">
                        <img class="featured-cars" src={require("../logo/6.jpg")} />
                        <h5 class="ml-2 mt-3">McLaren F1 Sports car</h5>
                    </div>
                </div>
            </div>
            </div>
        </div> 
         
{/* features */}

{/* Technology */}
<div className='col'>       
         <div class="row grid-gap ">
            <div col="col-md-12 ">
                <h2 class="mb-3 text-center"><span class="text-danger">Tech</span>nologies</h2>
                <img class="aa1 mt-3" src={require("../logo/1111.jpg")}/>
            </div>
        </div>
        </div>


{/* Technology */}

{/* Techgrid */}

<div class="col">
<div class="row grid-gap ">
        <div class="col-sm-4 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cpu" viewBox="0 0 16 16">
            <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
          </svg>
          <i class="bi bi-cpu"></i>
          <h6 class="mt-3">DIGITAL GAUGES</h6>
          <p>As the most technologically advanced car in its class, the Porsche offers a number...</p>
        </div>
        <div class="col-sm-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
          <i class="bi bi-phone"></i>
          <h6 class="mt-3">ULTIMATE MOBILE DEVICE</h6>
          <p>The biggest thing to happen to computing? Wheels. The Dodge Dart features the latest technology...</p>
        </div>
        <div class="col-sm-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
            <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z"/>
          </svg>
          <i class="bi bi-pc-display-horizontal"></i>
          <h6 class="mt-3">8.4-INCH TOUCHSCREEN</h6>
          <p>Porsche is tuned to deliver with the available Radio 8.4. It includes an 8.4-inch high-resolution touch...</p>
        </div>
      </div>
    <div class="row grid-gap ">
      <div class="col-md-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-compass-fill" viewBox="0 0 16 16">
          <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z"/>
        </svg>
        <i class="bi bi-compass-fill"></i>
        <h6 class="mt-3">AVAILABLE NAVIGATION</h6>
        <p>Only get lost when you want to. Touchscreen menus are intuitive, so you can tap in an address...</p>
      </div>
      <div class="col-md-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-broadcast-pin" viewBox="0 0 16 16">
          <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8z"/>
        </svg>
        <i class="bi bi-broadcast-pin"></i>
        <h6 class="mt-3">RADIO</h6>
        <p>You're connected to your car and the world outside with the available Radio 8.4 and Radio 8.4 NAV...</p>
      </div>
      <div class="col-md-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-wifi" viewBox="0 0 16 16">
          <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"/>
          <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"/>
        </svg>
        <i class="bi bi-wifi"></i>
        <h6 class="mt-3">WIFI CONNECT</h6>
        <p>Get the connection. Available Web by Mopar 11 turns your Dodge Dart into a mobile hotspot, so you can...</p>
      </div>
      </div>
      </div>
{/* Techgrid */}


<img class="col-md-6 mt-3" src={require("../image_src/car-silvers.jpg")}/>


{/* Fotter */}

            <div class="container-fluid foot-bg">
                <div class="text-light row mt-5">
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
                </div>
                <hr/>
                <div class="text-light row mt-3">
                    <div class="col-lg-12">
                        <p>Copyright &copy; 2022. All rights reserved. Privacy Policy</p>
                    </div>
                </div>
            </div>

{/* Fotter */}


            </div>
        )
    }
}