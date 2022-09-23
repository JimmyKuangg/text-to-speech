import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

interface IInput {
  placeholder?: string;
  css?: string;
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => {};
  value?: string;
  color?: string;
}

const StyledInput = styled.input`
  background-color: ${(props: Partial<IInput>) => props.color || 'inherit'};
  ${(props: Partial<IInput>) => props.css || ''};
`;

const Input: FunctionComponent<IInput> = ({
  placeholder,
  css,
  // onChange,
  value = '',
  color,
}) => {
  const [text, setText] = useState(value);
  const defaultOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <>
      <StyledInput
        type="text"
        placeholder={placeholder}
        css={css}
        onChange={defaultOnChange}
        value={text}
        color={color}
      />
    </>
  );
};

export default Input;
