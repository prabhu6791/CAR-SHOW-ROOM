import React from "react";
import Newaccount from "../new_account";
import Sellerreg from "../seller/sellreg";
import Supreg from "../seller/supreg";


export default class Registers extends React.Component{
    render(){
        return(
            <>
            <div class="card1">
            <div class="col">
            <div class="row-md-2 mb-4 bg-light">
              <ul class="nav md-pills pills-secondary d-flex flex-row justify-content-center text-danger">
              <li class="nav-item m-5 ">
              <a class="nav-link active" data-toggle="tab" href="#panel11" role="tab">User</a>
              </li>
              <li class="nav-item  my-5 ">
              <a class="nav-link" data-toggle="tab" href="#panel12" role="tab">Supplier</a>
              </li>
              {/* <li class="nav-item my-5 ml-5">
              <a class="nav-link" data-toggle="tab" href="#panel13" role="tab">Seller</a>
              </li> */}
            </ul>
            </div>
            <div class="col-md-10 mb-4">
            <div class="tab-content pt-0">
            <div class="tab-pane fade in show active " id="panel11" role="tabpanel">
                <Newaccount/>
            </div>         
            <div class="tab-pane fade " id="panel12" role="tabpanel">
                
                <Supreg/>
            </div>    
            {/* <div class="tab-pane fade " id="panel13" role="tabpanel">
                <Sellerreg/>
            </div> */}
            </div>
            </div>
            </div>
            </div>
          </>
        )
    }
}