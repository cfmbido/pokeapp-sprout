import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="px-4 md:px-8 lg:px-16 xl:px-52 py-4 bg-green-500">
      <h3
        className="font-bold text-2xl cursor-pointer font-mono"
        onClick={() => {
          navigate("/");
        }}
      >
        PokedexKu
      </h3>
    </nav>
  );
}
