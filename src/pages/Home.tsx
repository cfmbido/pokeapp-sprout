import React from "react";
import { useNavigate } from "react-router-dom";
import usePokemonList from "../hooks/usePokemonList";
import Navbar from "../components/Navbar";
import getStatusColour from "../utils/getStatusColour";

export default function Home() {
  const navigate = useNavigate();
  const { pokemons, loading, loadMore } = usePokemonList();

  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-8 lg:px-16 xl:px-52 py-8 bg-slate-300 min-h-[calc(100vh-4rem)] overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center place-items-center text-white">
          {pokemons.map((pokemon: any, idx: number) => {
            return (
              <div
                key={idx}
                className={`group cursor-pointer flex w-full h-64 rounded-3xl pt-4 px-8 relative ${getStatusColour(
                  pokemon.types[0].type.name
                )}`}
                onClick={() => {
                  navigate(`/detail/${pokemon.id}`);
                }}
              >
                <div>
                  <h3 className="capitalize font-bold text-lg mb-3">
                    {pokemon.name}
                  </h3>
                  {pokemon.types.map((type: any, idx: number) => {
                    return (
                      <div
                        key={idx}
                        className="capitalize font-semibold bg-white bg-opacity-30 px-6 rounded-lg mb-1 text-center"
                      >
                        {type.type.name}
                      </div>
                    );
                  })}
                </div>
                <div className="absolute right-4 top-4 font-bold text-xl opacity-50 text-black">
                  #
                  {`${pokemon?.id < 9 ? "00" : pokemon?.id < 100 ? "0" : ""}${
                    pokemon?.id
                  }`}
                </div>
                <div className="w-48 h-48 bg-white rounded-full absolute bottom-0 right-0 overflow-hidden opacity-20 rotate-12">
                  <div
                    className="bg-gray-500 w-full h-4 absolute top-1/2 left-1/2"
                    style={{ transform: "translate(-50%, -50%)" }}
                  ></div>
                  <div
                    className="bg-gray-500 w-1/3 h-1/3 absolute top-1/2 left-1/2 rounded-full"
                    style={{ transform: "translate(-50%, -50%)" }}
                  ></div>
                  <div
                    className="bg-white w-1/6 h-1/6 absolute top-1/2 left-1/2 rounded-full"
                    style={{ transform: "translate(-50%, -50%)" }}
                  ></div>
                  <div></div>
                </div>
                <img
                  className="h-32 w-32 object-cover absolute right-0 bottom-0 group-hover:scale-150 transition-transform duration-500 z-20"
                  src={
                    pokemon?.sprites?.other?.["official-artwork"]?.front_default
                  }
                  alt=""
                />
              </div>
            );
          })}
        </div>
        <button
          className="bg-green-500 px-4 py-2 rounded-md font-bold w-full mt-4"
          onClick={loadMore}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
}
