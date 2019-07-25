import React from "react";
import { IUser } from "../interfaceIUSer";

interface IProps {
  users: IUser[];
}

class ListClass extends React.Component<IProps> {
  render() {
    return (
      <tbody>
        {this.props.users.map(user => (
          <tr key={user.email}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{"" + user.isAdmin}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default ListClass;
