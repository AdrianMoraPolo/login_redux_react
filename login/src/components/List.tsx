import React from "react";
import { IUser } from "../interfaceIUSer";

interface IProps {
  users: IUser[];
}

const List: React.FC<IProps> = props => {
  return (
    <table>
      <tbody>
        {props.users.map(user => (
          <tr key={user.email}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{"" + user.isAdmin}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
