import React from 'react';
import styled from 'styled-components';

interface ISlider {
  onInput: (e: React.MouseEvent<HTMLInputElement>) => void;
  css?: string;
  text?: string;
  max?: string;
  step?: string;
  defaultValue?: string;
}

const StyledSlider = styled.input`
  cursor: pointer;
  ${(props: Partial<ISlider>) => props.css || ''};
`;

const Slider = ({ css, onInput, text, max, step, defaultValue }: ISlider) => {
  return (
    <>
      <StyledSlider
        type="range"
        onInput={onInput}
        css={css}
        max={max}
        step={step}
        defaultValue={defaultValue}
      />
      <label>{text || 'Slider'}</label>
    </>
  );
};

export default Slider;
