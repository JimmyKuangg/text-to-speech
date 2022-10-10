import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

interface ISlider {
  onInput: (e: React.MouseEvent<HTMLInputElement>) => void;
  css?: string;
  text?: string;
  max?: string;
  step?: string;
}

const StyledSlider = styled.input`
  ${(props: Partial<ISlider>) => props.css || ''};
`;

const Slider: FunctionComponent<ISlider> = ({
  css,
  onInput,
  text,
  max,
  step,
}) => {
  return (
    <>
      <StyledSlider
        type="range"
        onInput={onInput}
        css={css}
        max={max}
        step={step}
      />
      <label>{text || 'Slider'}</label>
    </>
  );
};

export default Slider;
