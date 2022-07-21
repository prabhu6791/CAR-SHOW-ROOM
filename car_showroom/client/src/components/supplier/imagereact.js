import React from "react";
import axios from 'axios';

export default class Image extends React.Component{

    custom_file_upload_url = `http://localhost:3001/image_upload`;

    constructor(props){
        super(props);
        this.state = {
            image_file : null,
            image_preview : '',
            username : ''
        }
    }
    handleImagePreview = (e) => {
        let image_as_base64 = URL.createObjectURL(e.target.files[0])
        let image_as_files = e.target.files[0];
        this.setState({
            image_preview: image_as_base64,
            image_file: image_as_files,
        })
    }
    // getusername = (e) => {
    //     let a = e.target.value;
    //     this.setState({username : a});
    // }
    handleSubmitFile = () => {
        if (this.state.image_file !== null){
            let formData = new FormData();
            formData.append('imagefile', this.state.image_file);
            formData.append('username', this.state.username);

            axios.post(
                this.custom_file_upload_url,
                formData,
                {
                    headers: {
                        "Content-type": "multipart/form-data"
                    },                    
                }
            )
            .then(res => {
                console.log(`Success` + res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

render() {
        return (
        <>
            <label>Upload file</label><br/>
            <input type="file" onChange={this.handleImagePreview}/><br/>
            <label>Image Preview</label><br/>
            <img src={this.state.image_preview} alt="image_preview"/><br/>
            <button type="submit" onClick={this.handleSubmitFile}><span>Upload</span></button>
        </>
    )
}
}