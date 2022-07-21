import React from "react";
import axios from 'axios';

export default class Product extends React.Component{
  state = {
    models : "",
    cylinder : "",
    features : "",
    fuel_type : "",
    transmission : "",
    color : ""
}
getModels=(Event)=>{
    this.setState({models:Event.target.value});
    console.log(this.state.models);
}
getCylinder=(Event)=>{
    this.setState({cylinder:Event.target.value});
    console.log(this.state.cylinder);
}
getFeatures=(Event)=>{
    this.setState({features:Event.target.value});
    console.log(this.state.features);
}
getFuel_type=(Event)=>{
    this.setState({fuel_type:Event.target.value});
    console.log(this.state.fuel_type);
}
getTransmission=(Event)=>{
    this.setState({transmission:Event.target.value});
    console.log(this.state.transmission);
}
getColor=(Event)=>{
    this.setState({color:Event.target.value});
    console.log(this.state.color);
}
submitdata(){
    const sdata = {
        models : this.state.models,
        cylinder : this.state.cylinder,
        features : this.state.features,
        fuel_type : this.state.fuel_type,
        transmission : this.state.transmission,
        color : this.state.color
    }
    alert("Product Added Succesfully");
    axios.post("http://localhost:3001/product",sdata).then((response)=>{
        console.log(response);
    });
}
    render(){
        return(
             <>
        {/* product entry */}
        <h1 class="text-center mt-3">Product Entry</h1>
        <div class="row mt-5">
        <div class="col-sm-4 ">
          <label class="mt-0 ">MODELS : </label>
          <input class="ml-3 form-control" type="text" onChange={this.getModels}/><br></br>
          <label class="mt-3">CYLINDER :</label>
          <input class="ml-3 form-control" type="text" onChange={this.getCylinder}/>
        </div>
        <div class="col-sm-4 ">
          <label >FEATURES :</label>
          <input class="ml-3  form-control" type="text" onChange={this.getFeatures}/><br></br>
          <label class="mt-3">FUEL-TYPE :</label>
          <input class="ml-3 form-control" type="text" onChange={this.getFuel_type}/><br></br>
          <button class="product-btn btn btn-outline-dark" onClick = {this.submitdata.bind(this)}>Submit</button>
        </div>
        <div class="col-sm-4 ">
          <label >TRANSMISSION :</label>
          <input class="ml-3 form-control" type="text" onChange={this.getTransmission}/><br></br>
          <label class="mt-3">COLOR :</label>
          <input class="ml-3 form-control" type="text" onChange={this.getColor}/>
        </div>
      </div>
    {/* product entry */}                    
          </>


            
        )
    }
}