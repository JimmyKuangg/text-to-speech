import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

interface IInput {
  placeholder?: string;
  css?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const StyledInput = styled.input`
  ${(props: Partial<IInput>) => props.css || ''};
`;

const Input: FunctionComponent<IInput> = ({
  placeholder,
  css,
  onChange,
  value,
}) => {
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
