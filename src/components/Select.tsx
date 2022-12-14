import React from 'react';
import styled from 'styled-components';

interface IOption {
  label: string;
  value: string;
}

interface ISelect {
  css?: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {};
  options: IOption[];
}

const StyledSelect = styled.select`
  height: 30px;
  background: #ffffff;
  color: black;
  padding-left: 5px;
  font-size: 14px;
  margin-left: 10px;
  ${(props: Partial<ISelect>) => props.css || ''};
`;

const CustomSelect = ({ options, label, onChange, css }: ISelect) => {
  return (
    <div id="languages">
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
    </div>
  );
};

export default CustomSelect;
