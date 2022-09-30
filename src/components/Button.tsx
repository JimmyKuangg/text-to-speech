import React, { FunctionComponent } from 'react';
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

const Button: FunctionComponent<IButton> = ({ css, onClick, text }) => {
  return (
    <>
      <StyledButton onClick={onClick} css={css}>
        {text || 'Button'}
      </StyledButton>
    </>
  );
};

export default Button;
