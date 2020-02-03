import React from 'react';
import Axios from 'axios';

class User_list extends React.Component{

constructor(){
    super()
    this.state={
        users : [],
        error : null
    }
}

componentDidMount(){
    
    Axios.get(`https://node-fake-api.herokuapp.com/user/`)
        .then(response => response)
        .then(data => this.setState({
            users: data.data.data,
        })
        )
        .catch(error => this.setState({error : error}));
}

navigateData=(e,id)=>{
    //alert(id);
    this.props.callbackfunction(id);
}


render(){
    const {users, error} = this.state;
    return(
        <div  className="user_list">
            <h3>USERS LIST</h3>
            {error ? <p>{error.message}</p>:null}
            {(  users.map(user => {
                const{id, first_name,last_name} = user;
                return(
                    <div>     
                        <ul>
                            <a onClick={(e)=> this.navigateData(e,id)}>FullName : {first_name} {last_name}</a>
                        </ul>
                    </div>
                    
                );
            })

            )}
        </div>
    )
}
}

export default User_list;