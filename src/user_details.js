import React from 'react';
import Axios from 'axios';
import logo from './logo.svg';

class User_details extends React.Component{

    constructor(props){
        super(props)
        this.state={
            id: this.props.id,
            user : {
                id : '',
                email : '',
                first_name : '',
                last_name : '',
                avatar : 'https://www.w3schools.com/howto/img_avatar.png'
            
            },
            message :''
        }
    }

componentDidUpdate(previousProps, previousState){
    if(this.props.id !== this.state.id){
        Axios.get(`https://node-fake-api.herokuapp.com/user/${this.props.id}`)
        .then(data => {
            console.log(data)
            this.setState({
                id:this.props.id,
                user : data.data.data,
                message : data.data.message
            })
            }
        ).catch(error => console.log(error));
        }
    }

    render(){
        const {first_name,last_name,email} = this.state.user;
        return(
                
                <div className="user_details">
                <h3>USER DETAILS</h3>
                <img src={this.state.user.avatar} />
                <p>id:{this.props.id}</p>
                <p>Firstname: {first_name}</p>
                <p>Lastname: {last_name}</p>
                <p>Email: {email}</p>
                <p>Message: {this.state.message}</p>
                
                </div>  

        )
    }


}

export default User_details;