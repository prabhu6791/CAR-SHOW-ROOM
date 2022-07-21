import React from "react";
import { Link } from "react-router-dom";

export default class Sellerrnav extends React.Component{
    
    render(){
        return(
            <>
            <div class="col-lg-12 dash-9">
                        <div class="row">
                            <div class="col-sm-12">
                            <nav class="navbar navbar-light  justify-content-between">
                                <a class="navbar-brand">SUPPLIER</a>
                                <form class="form-inline">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
                                    <Link to='/'>
                                     <button class="btn btn-danger ml-3">Logout</button>
                                    </Link>
                                </form>
                            </nav>
                            </div>
                        </div>
                    </div> 
            </>
        )
    }
}