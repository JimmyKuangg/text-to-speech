import React from 'react';
import styled from 'styled-components';

interface IButton {
  css?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  playing: boolean;
  text?: string;
}

const StyledButton = styled.button`
  background-color: white;
  border-radius: 12px;
  cursor: pointer;
  padding: 0;
  margin: 5px;
  transition: background 0.55s ease;
  width: 200px;
  &:hover {
    background-color: #c7d1cd;
    color: blue;
  }
  ${(props: Partial<IButton>) => props.css || ''};
`;

const Button = ({ css, onClick, playing, text }: IButton) => {
  {
    console.log(playing);
  }
  return (
    <>
      <StyledButton onClick={onClick} css={css}>
        {text || 'Button'}
      </StyledButton>
    </>
  );
};

export default Button;
