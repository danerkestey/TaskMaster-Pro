import styled from "styled-components";

export const baseStyle = `
    font-family: "Roboto", sans-serif;
`;

export const weight = {
  extraLight: 300,
  regular: 400,
  medium: 500,
  semiBold: 700,
};

// HeadingFont (styled h1): medium, size 48
const HeadingFont = styled.h1`
  ${baseStyle}
  font-weight: ${weight.medium};
  font-size: 3em;
  margin: 0;
`;

// SubHeadingFont (styled h2): medium, size 24
const SubHeadingFont = styled.h2`
  ${baseStyle}
  font-weight: ${weight.medium};
  font-size: 1.5em;
`;

// SubHeadingLightFont (styled h3): extra light, size 24
const SubHeadingLightFont = styled.h3`
  ${baseStyle}
  font-weight: ${weight.extraLight};
  font-size: 1.5em;
`;

// ConfirmationFont (styled h4): semi bold, size 20
const ConfirmationFont = styled.h4`
  ${baseStyle}
  font-weight: ${weight.semiBold};
  font-size: 1.25em;
  margin: 0;
`;

// TextFont (styled p): regular, size 20
const TextFont = styled.p`
  ${baseStyle}
  font-weight: ${weight.regular};
  font-size: 1.25em;
`;

export {
  ConfirmationFont,
  HeadingFont,
  SubHeadingFont,
  SubHeadingLightFont,
  TextFont,
};
