import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "../redux/userSlice";
import { RootState } from "../redux/store";

const UsersList: React.FC = () => {
  const dispatch = useDispatch();

  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  const fetchUsers = async () => {
    dispatch(fetchUsersStart());
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users?_limit=10"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const users = await response.json();
      dispatch(fetchUsersSuccess(users));
    } catch (error) {
      dispatch(fetchUsersFailure("Failed to fetch users"));
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [dispatch]);

  return (
    <div className="container">
      <h1>User List</h1>
      {loading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
