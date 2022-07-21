import React from "react";
import axios from 'axios';

export default class Sellerreg extends React.Component{
            state = {
              sel_id : "",
              sel_name : "",
              sel_branch : "",
              sel_phone : "",
              sel_mail : "",
              sel_website : ""
          }
          getID=(Event)=>{
              this.setState({sel_id:Event.target.value});
              console.log(this.state.sel_id);
          }
          getName=(Event)=>{
              this.setState({sup_name:Event.target.value});
              console.log(this.state.sel_name);
          }
          getBranch=(Event)=>{
              this.setState({sel_branch:Event.target.value});
              console.log(this.state.sel_branch);
          }
          getPhone=(Event)=>{
              this.setState({sel_phone:Event.target.value});
              console.log(this.state.sel_phone);
          }
          getMail=(Event)=>{
              this.setState({sel_mail:Event.target.value});
              console.log(this.state.sel_mail);
          }
          getWeb=(Event)=>{
              this.setState({sel_website:Event.target.value});
              console.log(this.state.sel_website);
          }
          submitdata(){
              const ssdata = {
                  sel_id : this.state.sel_id,
                  sel_name : this.state.sel_name,
                  sel_branch : this.state.sel_branch,
                  sel_phone : this.state.sel_phone,
                  sel_mail : this.state.sel_mail,
                  sel_website : this.state.sel_website
              }
              alert("Seller Registeration Completed Successfully")
              axios.post("http://localhost:3001/login",ssdata).then((response)=>{
                  console.log(response);
              });
          }
        render(){
        return(
    <>
    {/* <div class="mar"> */}
        <h1 class="text-center mt-3">Seller Registration</h1>
        <div class="row mt-5 flex-row justify-content-center">
        <div class="col-sm-4 ">
          <label class="">Seller Id : </label>
          <input class="ml-3 form-control" maxLength={5} type="text" onChange={this.getID}/><br></br>
          <label class="mt-3">Seller Name :</label>
          <input class="ml-3 form-control" placeholder="enter name" type="text" onChange={this.getName}/>
        </div>
        <div class="col-sm-4 ">
          <label >Seller Branch :</label>
          <input class="ml-3 form-control" type="text" onChange={this.getBranch}/><br></br>
          <label class="mt-3">Phone :</label>
          <input class="ml-3 form-control" type="text" maxLength={10} onChange={this.getPhone}/><br></br>
          <button class="product-btn btn btn-outline-dark" onClick = {this.submitdata.bind(this)}>Submit</button>
        </div>
        <div class="col-sm-4 ">
          <label >Seller Mail-ID :</label>
          <input class="ml-3 form-control" type="text" placeholder="name@example.com" onChange={this.getMail}/><br></br>
          <label class="mt-3">Website :</label>
          <input class="ml-3 form-control" type="text" onChange={this.getWeb}/>
        </div>
        </div>
        {/* </div> */}
    </>
        )
        }
    }
