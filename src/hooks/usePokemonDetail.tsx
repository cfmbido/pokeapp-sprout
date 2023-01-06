import { useState, useEffect } from "react";
import axios from "axios";

function usePokemonDetail(id: string | undefined) {
  const [pokemon, setPokemon] = useState<any>(null);
  const [evolutionList, setEvolutionList] = useState<any>(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(({ data }) => {
          setPokemon(data);
        })
        .catch(() => {});
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then(({ data }) => {
          return axios.get(data?.evolution_chain?.url);
        })
        .then(({ data }) => {
          const evoChain = [];
          let evoData = data.chain;

          do {
            evoChain.push({
              species_name: evoData.species.name,
            });
            evoData = evoData["evolves_to"][0];
          } while (!!evoData && evoData.hasOwnProperty("evolves_to"));

          setEvolutionList(evoChain);
        })
        .catch(() => {});
    }
  }, [id]);

  return { pokemon, evolutionList };
}

export default usePokemonDetail;
