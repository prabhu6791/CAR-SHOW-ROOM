import React from 'react';
import axios from 'axios';

export default class Supfletch extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        data: []
     }
  }

componentDidMount() {
   axios.get('http://localhost:3001/supplier_fletch')
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
    </table>
    </div>
  
}

}