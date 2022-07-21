import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Sellernav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           data: []
        }
     }
   
componentDidMount() {
    axios.get('http://localhost:3001/search')
    .then(response => {
        if (response.status === 200 && response != null) {
        this.setState
            ({
            data: response.data
            });
       } else {
         console.log('problem');
       }
   })
   .catch(error => {
      console.log(error);
   });
   }
   //Another one 
    states={
        supname : ""
    }
    getName=(Event)=>{
        this.setState({supname:Event.target.value});
        console.log(this.states.supname);
    }
    searchdata(){
        const ssdata = {
            supname : this.states.supname
        }
        alert("Searching")
        axios.get("http://localhost:3001/search",ssdata).then((response)=>{
            console.log(response);
        });
    }
    render(){
        const { data } = this.state;
        return(
            <>
            <div class="col-lg-12 dash-9">
            <div class="row">
            <div class="col-sm-12">
            <nav class="navbar navbar-light  justify-content-between">
                <a class="navbar-brand">SELLER</a>
            <form class="form-inline">
                <input class="form-control mr-2" type="search" placeholder="Search" onChange={this.getName} />
                <button class="btn btn-outline-secondary my-2 my-sm-0" onClick = {this.searchdata.bind(this)} >Search</button>
                <Link to='/'>
                <button class="btn btn-danger ml-3">Logout</button>
                </Link>
            </form>
            </nav>
            </div>
            </div>

    {/* <table class="table table-bordered">
     <main>
      <thead>
      <tr>
          <th>SUPPLIER_ID</th>
          <th>SUPPLIER_NAME</th>
          <th>SUPPLIER_BRANCH</th>
          <th>PHONE_NUMBER</th>
          <th>EMAIL-ID</th>
          <th>WEBSITE</th>
      </tr>
      </thead>
      <tbody>
      {Array.isArray(data) && data.map(object => (
      <tr>
          <td>{object.sup_id}</td>
          <td>{object.sup_name}</td>
          <td>{object.sup_branch}</td>
          <td>{object.sup_phone}</td>
          <td>{object.sup_mail}</td>
          <td>{object.sup_website}</td>
      </tr>
      ))}
      </tbody>
    </main>
    </table>  */}

            </div> 
            </>
        )
    }
}