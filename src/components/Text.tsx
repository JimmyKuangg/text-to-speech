import styled from 'styled-components';

interface IText {
  css?: string;
  text: string;
}

const StyledText = styled.span`
  padding-left: 20px;
  padding-right: 20px;
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
