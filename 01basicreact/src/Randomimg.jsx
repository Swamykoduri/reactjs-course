import React from 'react';

function Randomimg() {
  const picurl = "https://picsum.photos/200/300";
  return (
    <>
      <h1>My favourite food</h1>
      <div className="img-container">
        <img src={picurl} alt="random-pic" />
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.xW-o_exZ0djdOMY4JmqPHAHaHa&pid=Api&P=0&h=180"
          alt="remen photo"
        />
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.KN9A9x6YwEVRPiDn0rIABAHaHa&pid=Api&P=0&h=180"
          alt="noodles photo"
        />
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.eOrm2jVAm5yphOxotOTnvQHaFj&pid=Api&P=0&h=180"
          alt="chicken lollipop"
        />
      </div>
    </>
  );
}

export default Randomimg;