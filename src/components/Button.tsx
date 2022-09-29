import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface IButton {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => {};
  css?: string;
  text?: string;
}

const StyledButton = styled.button`
  text: ${(props: Partial<IButton>) => props.text || 'Button'};
  ${(props: Partial<IButton>) => props.css || ''}
`;

const Button: FunctionComponent<IButton> = ({ onClick, text }) => {
  return (
    <>
      <StyledButton onClick={onClick}>{text || 'Button'}</StyledButton>
    </>
  );
};

export default Button;
