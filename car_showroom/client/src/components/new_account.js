import React from "react";
import axios from 'axios';
import image from '../logo/pexels-henry-&-co-1699655.jpg';
import { Link } from "react-router-dom";

export default class Newaccount extends React.Component{
  state = {
    cus_name : "",
    designation : "",
    company_name : "",
    cus_phone : "",
    cus_mail : "",
    age : ""
}
getName=(Event)=>{
    this.setState({cus_name:Event.target.value});
    console.log(this.state.cus_name);
}
getJob=(Event)=>{
    this.setState({designation:Event.target.value});
    console.log(this.state.designation);
}
getCompany=(Event)=>{
    this.setState({company_name:Event.target.value});
    console.log(this.state.company_name);
}
getPhone=(Event)=>{
    this.setState({cus_phone:Event.target.value});
    console.log(this.state.cus_phone);
}
getEmail=(Event)=>{
    this.setState({cus_mail:Event.target.value});
    console.log(this.state.cus_mail);
}
getAge=(Event)=>{
  this.setState({age:Event.target.value});
  console.log(this.state.age);
}
submitdata(){
    const ssdata = {
        cus_id : this.state.cus_id,
        cus_name : this.state.cus_name,
        designation : this.state.designation,
        company_name : this.state.company_name,
        cus_phone : this.state.cus_phone,
        cus_mail : this.state.cus_mail,
        age : this.state.age
    }
    alert("Your Registeration is Complited Successfully")
    axios.post("http://localhost:3001/customer",ssdata).then((response)=>{
        console.log(response);
    });
}
    render(){
        return(
            <>
              <section class=" bg-image card1">
              <div class="mask  cusnew_img h-100" style={{ backgroundImage:`url(${image})` }}>
              <div class="container  h-100" >
              <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class=" cardq p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>
              <form>
                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example1cg">Your Name</label>
                  <input type="text" placeholder="Enter your Name" id="form3Example1cg" class="form-control hide-input form-control-lg" onChange={this.getName}/>
                  <label class="form-label" for="form3Example1cg">Your Age</label>
                  <input type="text" placeholder="Enter your Age" id="form3Example1cg" class="form-control form-control-lg" onChange={this.getAge}/>
                  <label class="form-label" for="form3Example3cg">Your Email</label>
                  <input type="email"  placeholder="Enter your Email" id="form3Example3cg" class="form-control form-control-lg" onChange={this.getEmail}/>
                  <label class="form-label" for="form3Example4cg">Designation</label>
                  <input type="text"  placeholder="Enter your Job" id="form3Example4cg" class="form-control form-control-lg" onChange={this.getJob}/>
                  <label class="form-label" for="form3Example4cg">Company Name</label>
                  <input type="text" placeholder="Enter your Company Name" id="form3Example4cg" class="form-control form-control-lg" onChange={this.getCompany}/>
                  <label class="form-label" for="form3Example3cg">Your Mobile Number</label>
                  <input type="text" maxLength={10} placeholder="Enter your Mobile Number" id="form3Example3cg" class="form-control form-control-lg" onChange={this.getPhone}/>
                  <label class="form-label" for="form3Example4cdg">Set Password</label>
                  <input type="password" placeholder="Create your Password" id="form3Example4cdg" class="form-control form-control-lg" />
                </div>
                <div class="d-flex justify-content-center">
                  <button type="button"
                    class="btn btn-success btn-block btn-lg  text-body" onClick = {this.submitdata.bind(this)}>Register</button>
                </div>                
                <p class="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/"> <u>Login here</u></Link></p><br/>
              </form>
              </div>
              </div>
              </div>
              </div>
              </div>
                 
              </section>
            </>
        )
    }
}