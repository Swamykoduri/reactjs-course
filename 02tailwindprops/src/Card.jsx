import React from "react";

function Bio() {
  // passing functions as props
  const handleClick = ({ name, post }) => {
    alert(`Hello ${name}
Your post is ${post}`);
  };
  return (
    <>
      <h1 className="p-4 text-4xl">Card Component </h1>
      {/* props with default value */}
      <Card
        name="Roronoa Zoro"
        post="sword master"
        isLoggedIn={true}
        buttonClick={handleClick}
      />
      <Card
        name="Naruto"
        post="Ninja"
        isLoggedIn={false}
        buttonClick={handleClick}
      />
    </>
  );
}

function Card({ name = "Naruto", post, isLoggedIn, buttonClick }) {
  // props with destructuring and default value
  return (
    <div className="flex flex-col items-center w-full">
      {/* props with conditional render */}
      {isLoggedIn ? (
        <p className="text-2xl font-bold underline">Welcome User</p>
      ) : (
        <p className="text-2xl font-bold underline">Welcome Guest</p>
      )}
      <a
        href="#"
        className="m-3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row justify-center md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full h-48"
      >
        <img
          className="object-fill w-72 rounded-t-lg md:h-auto md:w- md:rounded-none md:rounded-s-lg h-full"
          src="https://flowbite.com/docs/images/blog/image-2.jpg"
          alt="photo"
        />
        <div className="flex flex-col justify-between p-4 leading-normal w-full">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
            {post}
          </p>
        </div>
      </a>
      <button onClick={() => buttonClick({ name, post })}>
        Get Information
      </button>
    </div>
  );
}

export default Bio;
