import react from 'react';
import axios from 'axios';
export class Register extends react.Component{
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
        // alert(sdata.models);
        // alert(sdata.cylinder);
        // alert(sdata.features);
        // alert(sdata.fuel_type);
        // alert(sdata.transmission);
        // alert(sdata.color);
        axios.post("http://localhost:3005/insertdata",sdata).then((response)=>{
            console.log(response);
        });
    }
   render(){
    return(
        <div class="row mt-5">
        <div class="col-sm-4 ">
          <label>PRODUCT ID :</label>
          <input class="ml-5" type="text" /><br></br>
          <label class="mt-3">MODELS : </label>
          <input class="ml-3" type="text" onChange={this.getModels}/><br></br>
          <label class="mt-3">CYLINDER :</label>
          <input class="ml-3" type="text" onChange={this.getCylinder}/>
        </div>
        <div class="col-sm-4 ">
          <label >FEATURES :</label>
          <input class="ml-3" type="text" onChange={this.getCylinder}/><br></br>
          <label class="mt-3">FUEL-TYPE :</label>
          <input class="ml-3" type="text" onChange={this.getFuel_type}/><br></br>
          <button class="product-btn btn btn-outline-dark" onClick = {this.submitdata.bind(this)}>Submit</button>
        </div>
        <div class="col-sm-4 ">
          <label >TRANSMISSION :</label>
          <input class="ml-3" type="text" onChange={this.getTransmission}/><br></br>
          <label class="mt-3">COLOR :</label>
          <input class="ml-3" type="text" onChange={this.getColor}/>
        </div>
      </div>
            



    )
   }    
}