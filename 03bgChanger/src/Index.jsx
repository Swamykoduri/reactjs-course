import React, { useState } from "react";

const Index = () => {
  const person = {
    firstName: "Vishwas",
    lastName: "Kumar",
    age: 24,
  };

  // using objects in useState

  const [data, setData] = useState(person);

  const changeLastName = () => {
    setData({ ...data, lastName: "Uzumaki" });
  };

  // using arrays in useState

  const initialUsers = [
    {
      id: 1,
      name: "Vishwas",
    },
    {
      id: 2,
      name: "Naruto",
    },
    {
      id: 3,
      name: "Sasuke",
    },
    {
      id: 4,
      name: "Sakura",
    },
    {
      id: 5,
      name: "Kakashi",
    },
  ];

  const [users, setUsers] = useState(initialUsers);

  const removeList = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    console.log(id);
  };

  const [show, setShow] = useState(true);

  return (
    <div>
      <button
        onClick={() => setShow(!show)}
        className="bg-red-500 px-4 py-2 rounded-full shadow-slate-400 text-white"
      >
        {show ? "Hide" : "Show"}
      </button>
      {show && (
        <div className="flex">
          <div className="bg-red-400 p-10 rounded-lg m-10 text-white">
            <h1 className="text-2xl font-medium">Using objects in useState</h1>
            <h1>
              My first name is{" "}
              <strong className="text-pink-600">{data.firstName}</strong>
            </h1>
            <button
              className="bg-red-500 px-4 py-2 rounded-full shadow-slate-400 text-white m-2"
              onClick={() => {
                setData({ ...data, firstName: "Naruto" });
              }}
            >
              Change firstName
            </button>
            <h1>
              My last name is{" "}
              <strong className="text-pink-600">{data.lastName}</strong>
            </h1>
            <button
              className="bg-red-500 px-4 py-2 rounded-full shadow-slate-400 text-white m-2"
              onClick={changeLastName}
            >
              Change lastName
            </button>
            <h1>My age is {data.age}</h1>
          </div>

          {/* // using arrays in useState */}
          <div className="bg-red-400 p-10 rounded-lg m-10 text-white">
            <h1 className="text-2xl font-medium mb-6">
              Using arrays in useState
            </h1>
            <ul>
              {users.map((user) => {
                const { id, name } = user;

                return (
                  <li key={id} className="text-white font-medium m-2">
                    {name}
                    <button onClick={() => removeList(id)} className="ml-5">
                      ❌
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
