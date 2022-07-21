import React from "react";
import axios from "axios";

export default class Forget extends React.Component{
    state={
        userdata : "",
        passdata : ""
    }
    getUser=(Event)=>{
        this.setState({userdata:Event.target.value});
        console.log(this.state.userdata);
    }
    getPass=(Event)=>{
        this.setState({passdata:Event.target.value});
        console.log(this.state.passdata);
    }
    resetpass(){
        const dataonly={
            userdata : this.state.userdata,
            passdata : this.state.passdata
        }
        alert("Password Reset Successfully")
    axios.post("http://localhost:3001/reset",dataonly).then((response)=>{
    console.log(response);
    });
    }
    render(){
        return(
            <>
            <div class="row">
            <div class="col-sm-3"></div>    
            <div className="col-sm-5 card1">
                <h1 class="forget-pass-head text-center">RESET PASSWORD</h1>
                <label>Email-ID</label>
                <input class=" form-control" placeholder="enter email" type="text" onChange={this.getUser}/>
                <label>New Password</label>
                <input class=" form-control" placeholder="enter your new password" type="password" onChange={this.getPass}/>
                <div className="d-flex flex-row justify-content-center">
                <button class="m-5 btn btn-outline-dark" onClick = {this.resetpass.bind(this)}>Reset</button>
                </div>
            </div>
            </div>
            </>
        )
    }
}