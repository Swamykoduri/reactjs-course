import React, { useState, useCallback, useEffect, useRef } from "react";

const PasswordGen = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charSymbol, setCharSymbol] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

     if (numberAllowed) {
       str += "0123456789";
     }

     // Add special symbols if charSymbol is true
     if (charSymbol) {
       str += "!@#$%^&*()_+[]{}<>?/|";
     }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charSymbol, password]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charSymbol]);

  const copyText = () => {
    navigator.clipboard.writeText(password);
    copyPassword.current.select();
  };

  const copyPassword = useRef();

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500 mt-20">
      <h1 className="text-3xl font-bold mb-2 text-center">
        Generate a Password
      </h1>
      <div className="flex shadow rounded-lg over-hidden">
        <input
          type="text"
          placeholder="Password"
          value={password}
          className="py-1 px-3 outline-none rounded-l-md w-full"
          readOnly
          ref={copyPassword}
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-r-md"
          onClick={copyText}
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2 mt-4">
        <div className="flex gap-2">
          <input
            type="range"
            name=""
            min={8}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="cursor-pointer"
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex text-sm gap-x-2">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed(!numberAllowed)}
            name=""
            id=""
            className="cursor-pointer"
          />
          <label htmlFor="numbers">Number</label>
        </div>
        <div className="flex text-sm gap-x-2">
          <input
            type="checkbox"
            defaultChecked={charSymbol}
            onChange={() => setCharSymbol(!charSymbol)}
            name=""
            id=""
            className="cursor-pointer"
          />
          <label htmlFor="symbolInput">Symbol</label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGen;
