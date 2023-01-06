import styled from 'styled-components';

interface IText {
  css?: string;
  text: string;
}

const StyledText = styled.p`
  padding: 10px;
  font-size: 20px;
  font-family: sans-serif;
  ${(props: Partial<IText>) => props.css || ''};
`;

const Text = ({ css, text }: IText) => {
  return (
    <>
      <StyledText css={css}>{text}</StyledText>
    </>
  );
};

export default Text;
