import React, { Component } from "react";
import axios from "axios";

class User extends Component {
    state = {
        user: null,
    };

    componentDidMount() {
        axios
        .get("https://api.github.com/users/Amanuel-Gilay")
        .then((res) => {
            console.log('aman',res);
            this.setState({
                user: res.data,
            })
            
        })
        .catch((err) => console.log(err));
    }
    
    render() {

        const { user } = this.state;
        if(!user) return <p>Loading data.... </p>
        return (
        <div>
            <img
            style={{ width: "150px", borderRadius: "50%"}}
            src={user.avatar_url}
            alt={user.name}
         />
         <h3>{user.name}</h3>
         <p>username: {user.login}</p>
         <p>repos: {user.public_repos}</p>
         
        </div>
       
        )
        
       
    }
}

export default User;