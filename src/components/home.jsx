import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Selamat Datang di Sistem Tracking Performa Engineer</h1>
      <h3>Aplikasi ini membantu untuk melacak performa anda atau anggota tim engineer anda </h3>
      <p>Silahkan
        <button className='btn btn-success'>Register</button>
        atau
        <button className='btn btn-primary'>Login</button>
      </p>
    </div>
  );
};

export default Home;