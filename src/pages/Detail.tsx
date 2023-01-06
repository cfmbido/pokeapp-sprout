import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import usePokemonDetail from "../hooks/usePokemonDetail";

export default function Detail() {
  const { id } = useParams();
  const { pokemon, evolutionList } = usePokemonDetail(id);
  const [currentMenu, setCurrentMenu] = useState("about");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-8 lg:px-16 xl:px-52 py-8 flex justify-center items-center bg-slate-300 font-mono min-h-[calc(100vh-4rem)]">
        <div className="w-[500px] h-[700px] rounded-lg overflow-hidden bg-green-500">
          <div className="h-1/3 w-full relative text-white p-4">
            <h4 className="capitalize font-bold text-2xl mb-2">
              {pokemon?.name}
            </h4>
            <div className="flex space-x-2">
              {pokemon?.types.map((type: any, idx: number) => {
                return (
                  <div
                    key={idx}
                    className="capitalize font-semibold w-fit bg-white bg-opacity-30 px-6 rounded-lg text-center"
                  >
                    {type.type.name}
                  </div>
                );
              })}
            </div>
            <div className="w-48 h-48 bg-white rounded-full absolute bottom-0 right-0 overflow-hidden opacity-10 rotate-12">
              <div
                className="bg-gray-500 w-full h-5 absolute top-1/2 left-1/2"
                style={{ transform: "translate(-50%, -50%)" }}
              ></div>
              <div
                className="bg-gray-500 w-2/5 h-2/5 absolute top-1/2 left-1/2 rounded-full"
                style={{ transform: "translate(-50%, -50%)" }}
              ></div>
              <div
                className="bg-white w-1/5 h-1/5 absolute top-1/2 left-1/2 rounded-full"
                style={{ transform: "translate(-50%, -50%)" }}
              ></div>
              <div></div>
            </div>
            <img
              className="h-52 w-52 object-cover absolute -bottom-6 left-1/2"
              style={{ transform: "translate(-50%, 0)" }}
              src={pokemon?.sprites?.other?.["official-artwork"]?.front_default}
              alt=""
            />
            <div className="absolute right-4 top-4 font-bold text-xl">
              #
              {`${pokemon?.id < 9 ? "00" : pokemon?.id < 100 ? "0" : ""}${
                pokemon?.id
              }`}
            </div>
          </div>

          <div className="h-2/3 w-full bg-gray-100 rounded-t-3xl pt-6  text-sm sm:text-base">
            <div className="flex justify-between h-16">
              <div
                className={`w-1/4 flex justify-center items-center font-semibold ${
                  currentMenu === "about" ? "border-b-2 border-blue-400" : ""
                }`}
              >
                <button
                  onClick={() => {
                    setCurrentMenu("about");
                  }}
                >
                  About
                </button>
              </div>
              <div
                className={`w-1/4 flex justify-center items-center font-semibold ${
                  currentMenu === "stats" ? "border-b-2 border-blue-400" : ""
                }`}
              >
                <button
                  onClick={() => {
                    setCurrentMenu("stats");
                  }}
                >
                  Base Stats
                </button>
              </div>
              <div
                className={`w-1/4 flex justify-center items-center font-semibold ${
                  currentMenu === "evolution"
                    ? "border-b-2 border-blue-400"
                    : ""
                }`}
              >
                <button
                  onClick={() => {
                    setCurrentMenu("evolution");
                  }}
                >
                  Evolution
                </button>
              </div>
              <div
                className={`w-1/4 flex justify-center items-center font-semibold ${
                  currentMenu === "moves" ? "border-b-2 border-blue-400" : ""
                }`}
              >
                <button
                  onClick={() => {
                    setCurrentMenu("moves");
                  }}
                >
                  Moves
                </button>
              </div>
            </div>
            <div className="px-4 sm:px-10 h-[calc(100%-4rem)] overflow-auto py-6">
              {/* About */}
              {currentMenu === "about" && (
                <div className="flex space-x-4">
                  <div className="flex flex-col space-y-4 w-1/4 font-semibold">
                    <span>Species</span>
                    <span>Height</span>
                    <span>Weight</span>
                    <span>Abilities</span>
                  </div>
                  <div className="flex flex-col space-y-4 w-3/4">
                    <span className="capitalize">{pokemon?.species?.name}</span>
                    <span>{(pokemon?.height / 10).toFixed(2)} m</span>
                    <span>{(pokemon?.weight / 10).toFixed(2)} kg</span>
                    <span className="capitalize">
                      {pokemon?.abilities
                        .map((d: any) => d.ability.name)
                        .join(", ")}
                    </span>
                  </div>
                </div>
              )}
              {/* Stats */}
              {currentMenu === "stats" && (
                <div className="flex">
                  <div className="flex flex-col space-y-4 w-1/3">
                    {pokemon?.stats.map((d: any, idx: number) => {
                      return (
                        <span key={idx} className="capitalize font-semibold">
                          {d.stat?.name}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-col space-y-4 w-2/3">
                    {pokemon?.stats.map((d: any, idx: number) => {
                      return (
                        <div
                          key={idx}
                          className="flex items-center justify-center space-x-2"
                        >
                          <span className="capitalize w-8 text-center">
                            {d.base_stat}
                          </span>
                          <div className="h-2 w-full bg-gray-300 rounded-lg overflow-hidden">
                            <div
                              className={`h-full ${
                                d.base_stat > 50 ? "bg-green-400" : "bg-red-400"
                              }`}
                              style={{ width: `${d.base_stat}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {/* Evol */}
              {currentMenu === "evolution" && (
                <div className="space-y-2">
                  {evolutionList.map((evol: any, idx: number) => {
                    return (
                      <div key={idx} className="capitalize">
                        {`${idx + 1}. ${evol.species_name}`}
                      </div>
                    );
                  })}
                </div>
              )}
              {/* Moves */}
              {currentMenu === "moves" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-auto">
                  {pokemon?.moves?.map((d: any, idx: number) => {
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-lg flex justify-center items-center py-1 capitalize text-sm"
                      >
                        {d.move?.name}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
