import React from 'react';
import styled from 'styled-components';

interface IButton {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  css?: string;
  text?: string;
}

const StyledButton = styled.button`
  background-color: white;
  cursor: pointer;
  transition: background 0.5s ease;
  padding: 10px;
  margin: 5px;
  &:hover {
    background-color: lightblue;
    color: blue;
  }
  ${(props: Partial<IButton>) => props.css || ''};
`;

const Button = ({ css, onClick, text }: IButton) => {
  return (
    <>
      <StyledButton onClick={onClick} css={css}>
        {text || 'Button'}
      </StyledButton>
    </>
  );
};

export default Button;
