import React from "react";
import axios from 'axios';

export default class Supreg extends React.Component{
                state = {
              sup_id : "",
              sup_name : "",
              sup_branch : "",
              sup_phone : "",
              sup_mail : "",
              sup_website : ""
          }
          getID=(Event)=>{
              this.setState({sup_id:Event.target.value});
              console.log(this.state.sup_id);
          }
          getName=(Event)=>{
              this.setState({sup_name:Event.target.value});
              console.log(this.state.sup_name);
          }
          getBranch=(Event)=>{
              this.setState({sup_branch:Event.target.value});
              console.log(this.state.sup_branch);
          }
          getPhone=(Event)=>{
              this.setState({sup_phone:Event.target.value});
              console.log(this.state.sup_phone);
          }
          getMail=(Event)=>{
              this.setState({sup_mail:Event.target.value});
              console.log(this.state.sup_mail);
          }
          getWeb=(Event)=>{
              this.setState({sup_website:Event.target.value});
              console.log(this.state.sup_website);
          }
          submitdata(){
              const ssdata = {
                  sup_id : this.state.sup_id,
                  sup_name : this.state.sup_name,
                  sup_branch : this.state.sup_branch,
                  sup_phone : this.state.sup_phone,
                  sup_mail : this.state.sup_mail,
                  sup_website : this.state.sup_website
              }
              alert("Supplier Registeration Completed Successfully")
              axios.post("http://localhost:3001/supreg",ssdata).then((response)=>{
                  console.log(response);
              });
          }
        render(){
        return(
    <>
        <h1 class="text-center mt-3">Supplier Registration</h1>
        <div class="row mt-5">
        <div class="col-sm-4">
          <label class="">Supplier Id : </label>
          <input class="ml-3 form-control" maxLength={5} type="text" onChange={this.getID} /><br></br>
          <label class="mt-3">Supplier Name :</label>
          <input class="ml-3 form-control" placeholder="Enter Name" type="text" onChange={this.getName}/>
        </div>
        <div class="col-sm-4 ">
          <label >Supplier Branch :</label>
          <input class="ml-3 form-control" type="text" placeholder="your branch" onChange={this.getBranch}/><br></br>
          <label class="mt-3">Phone :</label>
          <input class="ml-3 form-control" type="text" maxLength={10} onChange={this.getPhone}/>
          <label class="mt-3">Password :</label>
          <input class="ml-3 form-control" placeholder="Create new Password" type="text" /><br></br>
          <button class="product-btn btn btn-outline-dark" onClick = {this.submitdata.bind(this)}>Submit</button>
        </div>
        <div class="col-sm-4 ">
          <label >Supplier Mail-ID :</label>
          <input class="ml-3 form-control" type="text" placeholder="name@example.com" onChange={this.getMail}/><br></br>
          <label class="mt-3">Website :</label>
          <input class="ml-3 form-control"  type="text" onChange={this.getWeb}/>
        </div>
        </div>
    </>
        )
        }
    }
