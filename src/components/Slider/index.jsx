import React from "react";

import * as S from "./styles";

import { typeIcons } from "../../utils/typeIcons";
import { bgColors } from "../../utils/bgColors";
import { formatString } from "../../utils/formatString";

export const Slider = ({ onChoice }) => {
  const handlePokeType = (e) => {
    onChoice(e.target.innerHTML);
  };

  return (
    <S.Container>
      {Object.keys(typeIcons).map((type) => {
        const TypeIcon = typeIcons[type];
        return (
          <S.Wrapper key={type} background={bgColors[type]}>
            <TypeIcon />
            <span onClick={handlePokeType}>{formatString(type)}</span>
          </S.Wrapper>
        );
      })}
    </S.Container>
  );
};
