import React, { useState } from 'react';
import styled from 'styled-components';

interface IInput {
  css?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
}

const StyledInput = styled.input`
  height: 50px;
  margin: 10px;
  width: 80vw;
  ${(props: Partial<IInput>) => props.css || ''};
`;

const Input = ({ placeholder, css, onChange, value }: IInput) => {
  const [text, setText] = useState('');
  const defaultOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <>
      <StyledInput
        type="text"
        placeholder={placeholder}
        css={css}
        onChange={onChange || defaultOnChange}
        value={value || text}
      />
    </>
  );
};

export default Input;
