import styled from 'styled-components';

interface ILabel {
  css?: string;
  text?: string;
  value?: string;
}

const StyledLabel = styled.label`
  ${(props: Partial<ILabel>) => props.css || ''};
`;

const Label = ({ css, text, value }: ILabel) => {
  return (
    <>
      <StyledLabel css={css}>
        {text || 'Label'}: {value || '0'}
      </StyledLabel>
    </>
  );
};

export default Label;
