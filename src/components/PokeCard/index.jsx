import React from "react";

import "./styles.css";

import { colors } from "../../utils/colors";
import { formatString } from "../../utils/formatString.js";

import { BsFillHexagonFill } from "react-icons/bs";
import { IoWaterSharp } from "react-icons/io5";
import { AiOutlineEye, AiFillBug } from "react-icons/ai";
import { TbSkull } from "react-icons/tb";
import { RiMagicFill } from "react-icons/ri";
import {
  FaRegCircle,
  FaFire,
  FaBolt,
  FaEnvira,
  FaDragon,
  FaSnowflake,
} from "react-icons/fa";

import {
  GiGhost,
  GiLibertyWing,
  GiStonePile,
  GiSkullCrossedBones,
  GiSwordClash,
  GiPunchBlast,
} from "react-icons/gi";

const typeIcons = {
  normal: FaRegCircle,
  fire: FaFire,
  water: IoWaterSharp,
  electric: FaBolt,
  grass: FaEnvira,
  ice: FaSnowflake,
  fighting: GiPunchBlast,
  poison: TbSkull,
  ground: GiStonePile,
  flying: GiLibertyWing,
  psychic: AiOutlineEye,
  bug: AiFillBug,
  rock: BsFillHexagonFill,
  ghost: GiGhost,
  dragon: FaDragon,
  dark: GiSkullCrossedBones,
  steel: GiSwordClash,
  fairy: RiMagicFill,
};

export const PokeCard = ({ name, id, type }) => {
  const cardStyle = {
    background: colors[type],
  };

  const TypeIcon = typeIcons[type];

  return (
    <div className="PokeCard" style={cardStyle}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
        alt={name}
      />
      <h1>{formatString(name)}</h1>
      <p>{`#${id}`}</p>
      <span>
        <TypeIcon /> {formatString(type)}
      </span>
    </div>
  );
};
