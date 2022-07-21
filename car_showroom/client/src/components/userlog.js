import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default class Login extends React.Component{
    state={
        username : "",
        password : ""
    };
    getusername=(Event)=>{
    this.setState({username:Event.target.value});
        console.log(this.state.username);
    }
    getpassword=(Event)=>{
        this.setState({password:Event.target.value});
        console.log(this.state.password);
    }
    login(){
        const datas={
            username : this.state.username,
            password : this.state.password
        }
        alert("Login Success")
        Axios.post("http://localhost:3001/login",datas).then((response)=>{
            let a=response.data.status;
            let b=response.data.role;
            if(a=='pass' && b=='admin'){
                window.location.href="./dash-supplier ";
            }
            if(a == 'pass' && b == 'staff'){
                window.location.href="./dash-seller";
              }
              if(a == 'pass' && b == 'staff2'){
                window.location.href="./main";
              }
            else{
                alert(a);
            }
        });
    }
    render(){
        return(
            <>
            <div className='col'>
            <div class="row ">
            <div class="col-sm-12">
                <img class="img-size" src={require("../logo/1111.jpg")}/>
            </div>
            </div>
            <div class="row ">
            <div class="col-sm-4"></div>
            <div class="col-lg-4 ">
            <div class="form-group ">
                <label for="exampleInputEmail1" >Email-ID</label><br></br>
                <input type="text" class="form-control login-size" placeholder='Enter your email' onChange={this.getusername}/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email-id with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label><br></br>
                <input type="password" class="form-control login-size" placeholder='Enter your password' onChange={this.getpassword}/>
            </div>
            <div class="form-group form-check"></div>
            <div class="d-flex flex-row justify-content-center">
                <button type="submit" onClick={this.login.bind(this)} class="btn btn-outline-success">Submit</button>
            </div>
            <div class="d-flex flex-row justify-content-center">
                <small id="emailHelp" class="form-text text-muted">Create New Account.<Link to="/newaccnav">Register Here</Link></small> 
            </div>
            <div class="d-flex flex-row justify-content-center">
            <small id="emailHelp" class="form-text text-muted"><Link to="/forgetpass">Forgot Password</Link></small> 
            </div>
            </div>
            <div class="col-sm-4"></div>
            </div> 
            </div>
            </> 
            )
        }
    }