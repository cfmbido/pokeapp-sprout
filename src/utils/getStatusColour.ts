const getStatusColour = (orderStatus: string) => {
  let statusColour = "";
  switch (orderStatus) {
    case "normal":
      statusColour = "bg-gray-400";
      break;
    case "fire":
      statusColour = "bg-red-400";
      break;
    case "water":
      statusColour = "bg-blue-400";
      break;
    case "grass":
      statusColour = "bg-green-400";
      break;
    case "bug":
      statusColour = "bg-green-600";
      break;
    case "electric":
      statusColour = "bg-yellow-400";
      break;
    case "poison":
      statusColour = "bg-violet-400";
      break;
    case "fairy":
      statusColour = "bg-pink-300";
      break;
    case "ground":
      statusColour = "bg-yellow-900";
      break;
    case "fighting":
      statusColour = "bg-rose-300";
      break;
    case "psychic":
      statusColour = "bg-fuchsia-600";
      break;
    case "ghost":
      statusColour = "bg-violet-800";
      break;
    case "dark":
      statusColour = "bg-slate-800";
      break;
    case "ice":
      statusColour = "bg-sky-200";
      break;
    case "dragon":
      statusColour = "bg-orange-300";
      break;
    case "rock":
      statusColour = "bg-slate-400";
      break;
    default:
      statusColour = "bg-gray-400";
  }
  return statusColour;
};

export default getStatusColour;
