import React from "react";

function Navbar() {
  return (
    <div className="bg-[#cac7a4] place-content-between w-screen h-[88px] flex flex-row items-center px-[150px]">
      <h1 className="itim text-[40px] text-black ">QUARTO</h1>
      <div className="flex flex-row justify-center items-center gap-5">
      <p>Logged In</p>
      <img className="h-[70px] w-[70px] rounded-full bg-white border border-black" src="/assets/WhatsApp Image 2023-11-19 at 06.24.21_838a7114.jpg"></img>
      </div>
    </div>
  );
}

export default Navbar;
