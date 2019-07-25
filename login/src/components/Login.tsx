import React from "react";
import List from "./List";
import { IUser } from "../interfaceIUSer";

const Login: React.FC = props => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [error, setError] = React.useState("");

  const updateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    setError("");
  };
  const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setError("");
  };

  function print() {
    fetch("http://localhost:3006/api/auth", {
      //fetch es una función tipo promesa
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(response => {
        if (response.ok) {
          console.log("ok");
          response
            .text() //el text()es una promesa
            .then(text => {
              console.log(text);
              list(text); // setUsers(users)
            });
        } else {
          setError("Usuario o Contraseña incorrectos");
          //   console.log(error);
        }
      })
      .catch(err => {
        setError("Usuario o Contraseña incorrectos.");
        // console.log(error);
      });
  }

  function list(token: string) {
    if (token) {
      fetch("http://localhost:3006/api/users", {
        //fetch es una función tipo promesa
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        }
      })
        .then(response => {
          if (response.ok) {
            response
              .json()
              .then(lista => {
                console.log(lista);
                console.log("va bien");
                setUsers(lista);
                console.log(lista);
              })
              .catch(err => {
                setError("Error en el json.");
              });
          } else {
            setError("responde.ok da error.");
          }
        })
        .catch(err => {
          setError("Error en response.");
        });
    } else {
      setError("El token no existe");
    }
  }

  return (
    <div className="col-6">
      <h4>Login.tsx</h4>
      <input
        className="form-control validate"
        type="text"
        value={username}
        onChange={updateUsername}
      />
      <input
        className="form-control"
        type="password"
        value={password}
        onChange={updatePassword}
      />
      <button type="button" onClick={print}>
        Login
      </button>
      <div>
        <List users={users} />
      </div>
      <div>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default Login;
