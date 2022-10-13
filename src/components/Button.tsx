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
  transition: background 0.25s ease;
  &:hover {
    background-color: lightblue;
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
