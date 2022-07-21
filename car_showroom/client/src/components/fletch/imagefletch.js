import React from 'react';
import axios from 'axios';

export default class Fletchimg extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        data: []
     }
  }

componentDidMount() {
   axios.get('http://localhost:3001/imagefletch')
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
          <th>IMAGE_ID</th>
          <th>IMAGE_NAME</th>
          <th>IMAGE_PATH</th>
          <th>UPLOAD TYPE</th>
      </tr>
      </thead>
      <tbody>
      {Array.isArray(data) && data.map(object => (
      <tr>
          <td>{object.img_id}</td>
          <td>{object.img_name}</td>
          <td>{object.img_path}</td>
          <td>{object.uploadtype}</td>
      </tr>
      ))}
      </tbody>
    
    </table>
  </div>
}

}