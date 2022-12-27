import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./user";
import Skeleton from "./loading/skeleton";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://reqres.in/api/users");
      setUsers(response.data.data);
      setTimeout(() => setIsLoading(false), 500);
    };
    fetchData();
  }, []);

  return (
    <>
      <button onClick={handleCreate} className="btn btn-lg btn-primary m-5">
        create
      </button>
      <div className="row">
        {isLoading ? (
          <Skeleton />
        ) : (
          users.map((user, index) => {
            return (
              <User
                key={index}
                id={user.id}
                firstName={user.first_name}
                lastName={user.last_name}
                email={user.email}
                imgSrc={user.avatar}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            );
          })
        )}
      </div>
    </>
  );
  async function handleCreate() {
    const newUser = {
      first_name: "hamid",
      last_name: "arian",
      email: "hamid@gmail.com",
      avatar: "https://mewc.minerpool.pro/static/logo.png",
    };
    const response = await axios.post("https://reqres.in/api/users", newUser);
    console.log(response);
    setUsers([...users, newUser]);
  }
  async function handleUpdate(id) {
    const index = users.findIndex((user) => user.id === id);
    const newUsers = [...users];
    newUsers[index].first_name = "Updated";
    const response = await axios.put(
      `https://reqres.in/api/users/${id}`,
      newUsers[index]
    );
    console.log(response);
    setUsers(newUsers);
  }
  async function handleDelete(id) {
    const response = await axios.delete(`https://reqres.in/api/users/${id}`);
    console.log(response);
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  }
};

export default Users;
