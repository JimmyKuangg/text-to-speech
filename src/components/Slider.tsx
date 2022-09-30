import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface ISlider {
  onInput: (e: React.MouseEvent<HTMLInputElement>) => void;
  css?: string;
  text?: string;
}

const StyledSlider = styled.input`
  ${(props: Partial<ISlider>) => props.css || ''};
`;

const Slider: FunctionComponent<ISlider> = ({ css, onInput, text }) => {
  return (
    <>
      <StyledSlider type="range" onInput={onInput} css={css} />
      <label>{text || 'Slider'}</label>
    </>
  );
};

export default Slider;
