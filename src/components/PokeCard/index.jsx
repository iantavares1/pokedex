import React, { useEffect, useState } from "react";

import * as S from "./styles";

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

import { PokemonDetails } from "../PokemonDetails";
import { fetchPokemon } from "../../api/fetchPokemon";
import { bgColors } from "../../utils/bgColors";
import { formatString } from "../../utils/formatString.js";

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
  const [type2, setType2] = useState("");
  const [stats, setStats] = useState({});

  useEffect(() => {
    const getType2 = async () => {
      try {
        const response = await fetchPokemon(name);
        const typesArr = response.types;
        if (typesArr.length > 1) {
          const data = typesArr[1].type.name;
          setType2(data);
        } else {
          setType2(type2);
        }
      } catch (err) {
        console.log("erro: ", err);
      }
    };

    getType2();
  });

  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await fetchPokemon(name);
        const data = response.stats;
        setStats(
          data.reduce((obj, item) => {
            let key = item.stat.name;
            if (key.includes("-")) {
              key = key.replace("-", "_");
            }
            obj[key] = item.base_stat;
            return obj;
          }, {})
        );
      } catch (err) {
        console.log("erro: ", err);
      }
    };

    getStats();
  });

  const cardStyle = {
    background: bgColors[type],
  };

  const TypeIcon = typeIcons[type];

  const [isOpen, setIsOpen] = useState(false);

  const handleTogglePokemonDetails = () => {
    setIsOpen(!isOpen);
  };

  document.body.classList.toggle("modal-open", isOpen);

  return (
    <S.Container style={cardStyle} onClick={handleTogglePokemonDetails}>
      <div className="img-wrapper">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
          alt={name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
          }}
        />
      </div>

      <S.Info>
        <h1 className="name">{formatString(name)}</h1>
        <span className="id">{`#${id}`}</span>
        <span className="type">
          <TypeIcon /> {formatString(type)}
        </span>
      </S.Info>
      {isOpen && (
        <>
          <S.ModalOverlay onClick={handleTogglePokemonDetails} />
          <PokemonDetails
            id={id}
            name={name}
            type={type}
            type2={type2}
            stats={stats}
            style={{ display: "block" }}
          />
        </>
      )}
    </S.Container>
  );
};
