import React from 'react';
import axios from 'axios';

export default class AllEmp extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        data: []
     }
  }

componentDidMount() {
   axios.get('http://localhost:3001/cus_view')
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
  return <div className='col-sm-12'>
    <table class="table table-bordered ">
   
      <thead>
      <tr>
          <th>CUSTOMER_ID</th>
          <th>CUSTOMER_NAME</th>
          <th>DESIGNATION</th>
          <th>COMPANY_NAME</th>
          <th>PHONE_NUMBER</th>
          <th>EMAIL-ID</th>
          <th>AGE</th>
      </tr>
      </thead>
      <tbody>
      {Array.isArray(data) && data.map(object => (
      <tr>
          <td>{object.cus_id}</td>
          <td>{object.cus_name}</td>
          <td>{object.designation}</td>
          <td>{object.company_name}</td>
          <td>{object.phone}</td>
          <td>{object.mail}</td>
          <td>{object.age}</td>
      </tr>
      ))}
      </tbody>
    
    </table>
  </div>
}

}