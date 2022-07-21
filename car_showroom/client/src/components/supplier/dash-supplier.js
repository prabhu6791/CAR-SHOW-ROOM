import React from "react";
import Product from "./sup_product";
import { Link } from "react-router-dom";
import Sellerrnav from "./others_sup";
import Imagess from "./img_upload";
import Prodfletch from "../fletch/product_fletch";
import Fletchimg from "../fletch/imagefletch";

export default class Supplier extends React.Component{
    render(){
        return(
            <>
           
            <div class="card1 col">
            
            {/* <!--Grid row--> */}
        <div class="row">
          {/* <!--Grid column--> */}
          <div class="col-md-2 mb-4 bg-light">
            <ul class="nav md-pills pills-secondary d-flex flex-column  text-danger">
              <li class="nav-item m-5">
                <a class="nav-link active" data-toggle="tab" href="#panel11" role="tab">Supplier</a>
              </li>
              <li class="nav-item my-5 ml-5">
                <a class="nav-link" data-toggle="tab" href="#panel12" role="tab">Import Product</a>
              </li> 
              <li class="nav-item  my-5 ml-5">
                <a class="nav-link" data-toggle="tab" href="#panel13" role="tab">Product Inventary</a>
              </li>
              <li class="nav-item  my-5 ml-5">
                <a class="nav-link" data-toggle="tab" href="#panel14" role="tab">Product Images</a>
              </li>
              <li class="nav-item  my-5 ml-5">
                <a class="nav-link" data-toggle="tab" href="#panel15" role="tab"> Images Details</a>
              </li>
            </ul>
    
          </div>
          {/* <!--Grid column--> */}
    
          {/* <!--Grid column--> */}
          <div class="col-md-10 mb-4">
    
            {/* <!-- Tab panels --> */}
            <div class="tab-content pt-0">
    
              {/* <!--Panel 1--> */}
              <div class="tab-pane fade in show active" id="panel11" role="tabpanel">
              <Sellerrnav/>  
              
                </div>         
              {/* <!--/.Panel 1--> */}
    
              {/* Panel 2 */}
              <div class="tab-pane fade " id="panel12" role="tabpanel">
              <Sellerrnav/>  

                    <Product/>
              </div>
              {/* Panel 2 */}
    
              {/* <!--Panel 3--> */}
              <div class="tab-pane fade " id="panel13" role="tabpanel">
                <Sellerrnav/>  
                <Prodfletch/>
              </div>
              <div class="tab-pane fade " id="panel14" role="tabpanel">
                <Sellerrnav/>  
                <Imagess/>

              </div>
              <div class="tab-pane fade " id="panel15" role="tabpanel">
                <Sellerrnav/>  
                <Fletchimg/>

              </div>
              {/* <!--/.Panel 3--> */}
    
              
            </div>
    
    
          </div>
          {/* <!--Grid column--> */}
    
        </div>
        {/* <!--Grid row--> */}
    
      </div>
            
            </>
        )
    }
}