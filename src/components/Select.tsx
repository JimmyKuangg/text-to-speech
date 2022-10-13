import React from 'react';
import styled from 'styled-components';

interface IOption {
  label: string;
  value: string;
}

interface ISelect {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {};
  options: IOption[];
  label: string;
  css?: string;
}

const StyledSelect = styled.select`
  ${(props: Partial<ISelect>) => props.css || ''};
`;

const CustomSelect = ({ options, label, onChange, css }: ISelect) => {
  return (
    <>
      <label>{label}</label>

      <StyledSelect
        onChange={onChange}
        css={css}
        defaultValue={options[0].label}
      >
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </>
  );
};

export default CustomSelect;
