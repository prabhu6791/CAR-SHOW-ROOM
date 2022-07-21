import React from "react";
import { Link } from "react-router-dom";


export default class Result extends React.Component{
    render(){
        return(
            <>
               {/* Navigation     */}

               <nav class="navbar col navbar-expand-lg navbar-dark bg-dark static-top ">
                <div class="col-sm-5"></div>
                <div class="col-sm-6">
                <ul class="navbar-nav ms-auto">
                <li class="nav-item">
              <Link to="/main">
                <p class="nav-link active" aria-current="page" href="#">Home</p>
              </Link>
                </li>
            <Link to="/inventary">
              <li class="nav-item">
              <p class="nav-link active" >Inventary</p>
            </li>
            </Link>
            <li class="nav-item">
            <Link to='/faq'>
              <p class="nav-link active" >About</p>
              </Link>
            </li>
            <li class="nav-item">
            <Link to='/'>
              <p class="nav-link active" >Logout</p>
              </Link>
            </li>
          </ul>
        </div>
        <div class="col-sm-1"></div>
    </nav>
    {/* Navigation */}

                <div class="row m-5 card1">
                    <div class="col-lg-7">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-100 border-img-res" src={require("./int/1-60-1024x683.jpg")} alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100 border-img-res" src={require("./int/2-61-1024x683.jpg")} alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100 border-img-res"  src={require("./int/5-61.jpg")} alt="Third slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
                <div class="mt-5">
                    <h5>Description</h5>
                    <p class="text-justify">How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said “between eleven and twelve knots,” and the Henrietta confirmed his prediction.<br/><br/>

                    If, then—for there were “ifs” still—the sea did not become too boisterous, if the wind did not veer round to the east, if no accident happened to the boat or its machinery, the Henrietta might cross the three thousand miles from New York to Liverpool in the nine days, between the 12th and the 21st of December. It is true that, once arrived, the affair on board the Henrietta, added to that of the Bank of England, might create more difficulties for Mr. Fogg than he imagined or could desire.<br/><br/>

                    During the first days, they went along smoothly enough. The sea was not very unpropitious, the wind seemed stationary in the north-east, the sails were hoisted, and the Henrietta ploughed across the waves like a real trans-Atlantic steamer</p>
                    <div class="bg-light row">
                    
                        <p class="para-bg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle text-success" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                    </svg>
                    <i class="bi bi-check2-circle"></i> Backup Camera</p>
                    <p class="para-bg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle text-success" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                    </svg>
                    <i class="bi bi-check2-circle"></i> Blind Spot Alert</p>
                    <p class="para-bg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle text-success" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                    </svg>
                    <i class="bi bi-check2-circle"></i> Auto Drive</p>
                    <p class="para-bg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle text-success" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                    </svg>
                    <i class="bi bi-check2-circle"></i> Navigation system</p>
                    <p class="para-bg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle text-success" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                    </svg>
                    <i class="bi bi-check2-circle"></i> Remote start</p>
                    <p class="para-bg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle text-success" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                    </svg>
                    <i class="bi bi-check2-circle"></i> Leather Seats</p>
                    </div>
                </div>
                </div>
                    <div class="col-sm-4">
                        <h3>Bentley Mulsanne 4-door sedan blue</h3>
                        <div class="bg-light ht-table rounded">
                            <div class="row mt-5">
                                <div class="col-sm-1"></div>
                                <div class="col-sm-5 mt-3 font-weight-bold ">
                                    <p class="m-4">Make :</p>
                                    <p class="m-4">Model :</p>
                                    <p class="m-4">Color :</p>
                                    <p class="m-4">Drive Type :</p>
                                    <p class="m-4">Transmission :</p>
                                    <p class="m-4">Fuel Type :</p>
                                    <p class="m-4">Engine Size :</p>
                                    <p class="m-4">Cylinder :</p>
                                </div>
                                <div class="col-sm-6 mt-3">
                                    <p class="m-4">Bentley</p>
                                    <p class="m-4">Mulsanne</p>
                                    <p class="m-4">Blue</p>
                                    <p class="m-4">Rear Wheel Drive</p>
                                    <p class="m-4">Manual</p>
                                    <p class="m-4">Petrol</p>
                                    <p class="m-4">5.0 L</p>
                                    <p class="m-4">8</p>
                                </div>
                            </div>
                        </div>
                        {/* <div class="bg-light">
                            
                        </div> */}
                    </div>
                </div>
           
            </>
        )
    }
}