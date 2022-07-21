import React from 'react';
import axios from 'axios';

export default class Prodfletch extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        data: []
     }
  }

componentDidMount() {
   axios.get('http://localhost:3001/product_fletch')
     .then(response => {
         if (response.status === 200 && response != null) {
           this.setState({
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

render(){
  const { data } = this.state;
  return <div>
    
    <table class="table table-bordered ">
      <thead>
      <tr>
          <th>PRODUCT_ID</th>
          <th>MODELS</th>
          <th>CYLINDER</th>
          <th>FEATURES</th>
          <th>FUEL_type</th>
          <th>TRANSMISSION</th>
          <th>COLOR</th>
      </tr>
      </thead>
      <tbody>
      {Array.isArray(data) && data.map(object => (
      <tr>
          <td>{object.product_id}</td>
          <td>{object.models}</td>
          <td>{object.cylinder}</td>
          <td>{object.features}</td>
          <td>{object.fuel_type}</td>
          <td>{object.transmission}</td>
          <td>{object.color}</td>
      </tr>
      ))}
      </tbody>
    </table>
    </div>
  
}

}