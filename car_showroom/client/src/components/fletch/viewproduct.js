import React from 'react';
import axios from 'axios';

export default class Viewproduct extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        data: []
     }
  }

componentDidMount() {
   axios.get('http://localhost:3001/viewproduct_fletch')
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
  return 
  {Array.isArray(data) && data.map(object => (
    <div className='row'>
        <div class="col-sm-2">
            {object.img_name}
        </div>
        <div class="col-sm-6">
            <h1>{object.img_path}</h1>
        </div>
    </div>
  
  ))}}

}