import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  justify-content: center;

  width: 300px;
  padding-top: ${props => props.theme.spacing(2)};
  padding-right: ${props => props.theme.spacing(4)};
  padding-bottom: ${props => props.theme.spacing(2)};
  padding-left: ${props => props.theme.spacing(4)};
  margin-right: auto;
  margin-left: auto;
`;
