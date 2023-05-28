import React from "react";

import * as S from "./styles";

import { bgColors } from "../../utils/bgColors";
import { formatString } from "../../utils/formatString.js";

import { typeIcons } from "../../utils/typeIcons";

export const PokemonDetails = ({ name, id, type, type2, stats }) => {
  const TypeIcon = typeIcons[type];
  const TypeIcon2 = typeIcons[type2];

  const typeColor = bgColors[type];
  const type2Color = bgColors[type2];

  const hp = stats.hp;
  const attack = stats.attack;
  const defense = stats.defense;
  const spcAtk = stats.special_attack;
  const spcDef = stats.special_defense;
  const speed = stats.speed;

  return (
    <S.Container background={typeColor}>
      <S.Main>
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

          <div className="type">
            <span style={{ background: typeColor }}>
              <TypeIcon /> {formatString(type)}
            </span>
            {type2 !== "" && type2 !== undefined ? (
              <span style={{ background: type2Color }}>
                <TypeIcon2 /> {formatString(type2)}
              </span>
            ) : (
              ""
            )}
          </div>
        </S.Info>

        {/* <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
          alt={name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
          }}
        />
        <h1>{formatString(name)}</h1>
        <p>{`#${id}`}</p>
        <div className="types">
          <span style={{ background: typeColor }}>
            <TypeIcon /> {formatString(type)}
          </span>
          {type2 !== "" && type2 !== undefined ? (
            <span style={{ background: type2Color }}>
              <TypeIcon2 /> {formatString(type2)}
            </span>
          ) : (
            ""
          )}
        </div> */}
      </S.Main>
      <S.Details>
        <div className="wrapper">
          <S.Stats>
            <span className="name">Hp</span>
            <span className="value">{hp}</span>
          </S.Stats>

          <S.Bar>
            <div className="bar-bg"></div>
            <div
              className="bar"
              style={{
                background: `${type === "normal" ? "white" : typeColor}`,
                width: `${hp}px`,
              }}
            ></div>
          </S.Bar>
        </div>
        <div className="wrapper">
          <S.Stats>
            <span className="name">Attack</span>
            <span className="value">{attack}</span>
          </S.Stats>

          <S.Bar>
            <div className="bar-bg"></div>
            <div
              className="bar"
              style={{
                background: `${type === "normal" ? "white" : typeColor}`,
                width: `${attack}px`,
              }}
            ></div>
          </S.Bar>
        </div>
        <div className="wrapper">
          <S.Stats>
            <span className="name">Defense</span>
            <span className="value">{defense}</span>
          </S.Stats>

          <S.Bar>
            <div className="bar-bg"></div>
            <div
              className="bar"
              style={{
                background: `${type === "normal" ? "white" : typeColor}`,
                width: `${defense}px`,
              }}
            ></div>
          </S.Bar>
        </div>
        <div className="wrapper">
          <S.Stats>
            <span className="name">Spc. Atk.</span>
            <span className="value">{spcAtk}</span>
          </S.Stats>

          <S.Bar>
            <div className="bar-bg"></div>
            <div
              className="bar"
              style={{
                background: `${type === "normal" ? "white" : typeColor}`,
                width: `${spcAtk}px`,
              }}
            ></div>
          </S.Bar>
        </div>
        <div className="wrapper">
          <S.Stats>
            <span className="name">Spc. Def.</span>
            <span className="value">{spcDef}</span>
          </S.Stats>

          <S.Bar>
            <div className="bar-bg"></div>
            <div
              className="bar"
              style={{
                background: `${type === "normal" ? "white" : typeColor}`,
                width: `${spcDef}px`,
              }}
            ></div>
          </S.Bar>
        </div>
        <div className="wrapper">
          <S.Stats>
            <span className="name">Speed</span>
            <span className="value">{speed}</span>
          </S.Stats>

          <S.Bar>
            <div className="bar-bg"></div>
            <div
              className="bar"
              style={{
                background: `${type === "normal" ? "white" : typeColor}`,
                width: `${speed}px`,
              }}
            ></div>
          </S.Bar>
        </div>
      </S.Details>
    </S.Container>
  );
};
