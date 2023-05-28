import React, { useEffect, useState } from "react";

import * as S from "./styles";

import { typeIcons } from "../../utils/typeIcons";

import { PokeDetails } from "../PokeDetails";
import { fetchPokemon } from "../../api/fetchPokemon";
import { bgColors } from "../../utils/bgColors";
import { formatString } from "../../utils/formatString.js";

export const PokeCard = ({ name, id, type }) => {
  const cardStyle = {
    background: bgColors[type],
  };

  const TypeIcon = typeIcons[type];

  const [type2, setType2] = useState("");
  const [stats, setStats] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleTogglePokemonDetails = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("modal-open");
  };

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
          <PokeDetails
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
