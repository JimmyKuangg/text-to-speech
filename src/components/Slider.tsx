import React from 'react';
import styled from 'styled-components';

interface ISlider {
  onInput: (e: React.MouseEvent<HTMLInputElement>) => void;
  css?: string;
  max?: string;
  step?: string;
  defaultValue?: string;
}

const StyledSlider = styled.input`
  cursor: pointer;
  width: 100%;
  ${(props: Partial<ISlider>) => props.css || ''};
`;

const Slider = ({ css, onInput, max, step, defaultValue }: ISlider) => {
  return (
    <div id="slider">
      <StyledSlider
        type="range"
        onInput={onInput}
        css={css}
        max={max}
        step={step}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default Slider;
