import styled from "@emotion/styled";

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-right: 15px;
  margin-left: 15px;
`;

export const Titel = styled.h2`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
`;
