import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Edit() {
  const [pokemon, setpokemon] = useState({});
  const { name } = useParams();

  useEffect(() => {
    getSingleItem();
  }, []);

  async function getSingleItem() {
    const API = "https://pokeapi.co/api/v2/pokemon/" + name;
    const res = await axios.get(API);
    console.log(res.data);
    setpokemon(res.data);
  }

  return (
    <div>
      <img src={pokemon?.sprites?.front_default} alt="" />
    </div>
  );
}
