import { useState, useEffect } from "react";
import axios from "axios";

interface APIResponse {
  results: {
    name: string;
    url: string;
  }[];
}

const limit = 100;

function usePokemonList() {
  const [pokemons, setPokemons] = useState<any>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setOffset((v) => v + limit);
    setLoading(true);

    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${
          offset + limit
        }`
      )
      .then(({ data: { results } }: { data: APIResponse }) => {
        const listPromise = results.map((result) => {
          return axios.get(result.url);
        });
        return Promise.all(listPromise);
      })
      .then((data) => {
        const fetchedPokemons = data.map((d) => {
          return d.data;
        });
        setPokemons((v: any) => [...v, ...fetchedPokemons]);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=0`)
      .then(({ data: { results } }: { data: APIResponse }) => {
        const listPromise = results.map((result) => {
          return axios.get(result.url);
        });
        return Promise.all(listPromise);
      })
      .then((data) => {
        const fetchedPokemons = data.map((d) => {
          return d.data;
        });
        setPokemons(fetchedPokemons);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { pokemons, loading, loadMore };
}

export default usePokemonList;
