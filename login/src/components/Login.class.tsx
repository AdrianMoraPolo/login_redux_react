import React from "react";
import ListClass from "./List.class";
import { IUser } from "../interfaceIUSer";


interface IState {
  username: string;
  password: string;
  users: IUser[];
}

class LoginClass extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      username: "",
      password: "",
      users: []
    };

    this.getToken = this.getToken.bind(this);
    this.updateInputUsername = this.updateInputUsername.bind(this);
    this.updateInputPassword = this.updateInputPassword.bind(this);
  }

  updateInputUsername(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ username: event.currentTarget.value });
    this.setState({users: []});
  }

  updateInputPassword(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ password: event.currentTarget.value });
    this.setState({users: []});
  }

  getToken() {
    fetch("http://localhost:3006/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then(response => {
      if (response.ok) {
        response.text().then(token => {
          
          //FETCH USERS

          fetch("http://localhost:3006/api/users", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token
            }
          })
            .then(response => response.json())
            .then(users => this.setState({ users: users }));
           
     

          //END FETCH USERS
        });
      } else {
        console.log("Usuario o Contraseña incorrectos");
      }
    });
  }

  render() {
    return (
      <div className="col-6">
        <h4>LoginClass.tsx</h4>
        <input
          className="form-control"
          type="text"
          id="name"
          value={this.state.username}
          onChange={this.updateInputUsername}
        />
        <input
          className="form-control"
          type="password"
          id="password"
          value={this.state.password}
          onChange={this.updateInputPassword}
        />
        <button type="button" onClick={this.getToken}>
          Login
        </button>
        {this.state.users.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>USER</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
            </tr>
            </thead>
            <ListClass users = {this.state.users} />
            
        </table>
        )}
      </div>
    );
  }
}

export default LoginClass;
