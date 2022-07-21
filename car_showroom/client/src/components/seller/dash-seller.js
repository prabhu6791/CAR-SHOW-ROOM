import React from "react";
import Sellernav from "./others";
import Supreg from "./supreg";
import AllEmp from "../fletch/cus_fletch";
import Prodfletch from "../fletch/product_fletch";
import Supfletch from "../fletch/sup_fletch";


export default class Seller extends React.Component{
    render(){
        return(
            <>
            <div class="card1 col">
            <div class="row">
            <div class="col-md-2 mb-4 bg-light">
              <ul class="nav md-pills pills-secondary d-flex flex-row  text-danger">
              <li class="nav-item m-5">
              <a class="nav-link active" data-toggle="tab" href="#panel11" role="tab">Seller</a>
              </li>
              <li class="nav-item  my-5 ml-5">
              <a class="nav-link" data-toggle="tab" href="#panel15" role="tab">Supplier Details</a>
              </li>
              <li class="nav-item my-5 ml-5"> 
              <a class="nav-link" data-toggle="tab" href="#panel12" role="tab">Customer Details</a>
              </li>
              <li class="nav-item  my-5 ml-5">
              <a class="nav-link" data-toggle="tab" href="#panel13" role="tab">Product Inventary</a>
              </li>
              <li class="nav-item  my-5 ml-5">
              <a class="nav-link" data-toggle="tab" href="#panel14" role="tab">Supplier Registeration</a>
              </li>
            </ul>
            </div>
            <div class="col-md-10  mb-4">
            <div class="tab-content pt-0">
            <div class="tab-pane fade in show active" id="panel11" role="tabpanel">
              <Sellernav/> 
            </div>         
            <div class="tab-pane fade" id="panel12" role="tabpanel">
              <Sellernav/>
              <AllEmp/>
            </div>    
            <div class="tab-pane fade " id="panel13" role="tabpanel">
              <Sellernav/>
              <Prodfletch/>
            </div>
            <div class="tab-pane fade " id="panel14" role="tabpanel">
              <Sellernav/>
              <Supreg/>
            </div>
            <div class="tab-pane fade " id="panel15" role="tabpanel">
              <Sellernav/>
              <Supfletch/>
            </div>
            </div>
            </div>
            </div>
            </div>
          </>
        )
    }
}