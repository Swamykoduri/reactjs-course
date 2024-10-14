import React, { useState } from "react";

const Index = () => {
  const person = {
    firstName: "Swamy",
    lastName: "Koduri",
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

  // Add list items

  const existedItems = [
    {
      text: "Item 1",
      id: "sdkl",
    },
    {
      text: "Item 2",
      id: "abcede",
    },
  ];

  const [list, setList] = useState(existedItems);

  const [message, setMessage] = useState({
    text: "",
    id: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let newList = {
      text: message.text,
      id: new Date().getTime().toString(),
    }
    setList([...list, newList]);
    setMessage({ text: "", id: "" });
  }

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  }


  const [editItem, setEditItem] = useState({
    id: "",
    isEditable: false,
  });


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
                  <li
                    key={id}
                    className="text-white font-medium m-2 hover:bg-red-500 hover:rounded-md transition-all duration-200 cursor-pointer"
                  >
                    {name}
                    <button onClick={() => removeList(id)} className="ml-5">
                      ❌
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bg-red-400 p-10 rounded-lg m-10 text-white">
            <h1 className="text-2xl font-medium mb-6">List of items</h1>
            <form>
              <input
                type="text"
                placeholder="add your list"
                value={message.text}
                onChange={(e) =>
                  setMessage({ ...message, text: e.target.value })
                }
                className="p-2 rounded-md outline-none focus:ring-2 focus:ring-red-600 text-orange-600"
              />
              {editItem.isEditable ? (
                <button
                  onClick={handleEdit}
                  type="submit"
                  className="bg-red-500 px-4 py-2 rounded-full shadow-slate-400 text-white"
                >
                  Edit
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="bg-red-500 px-4 py-2 rounded-full shadow-slate-400 text-white"
                >
                  Add
                </button>
              )
              }
            </form>
            <div>
              <ul>
                {list.map((item) => {
                  const { text, id } = item;
                  return (
                    <>
                      <li key={id} className="text-white font-medium m-2">
                        <span className="mr-36">{text}</span>
                        <button onClick={() => setEditItem(id)}>✏️</button>
                        <button onClick={() => removeItem(id)}>❌</button>
                      </li>
                    </>
                  );
                })}
              </ul>
              {list.length === 0 && (
                <p className="text-white font-medium m-2">List is empty</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
