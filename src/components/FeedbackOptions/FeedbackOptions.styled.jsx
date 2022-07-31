import styled from '@emotion/styled';

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
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;

  background-color: ${props => props.theme.colors.colorBtn};
  border: ${props => props.theme.borderBtn};
  border-radius: 3px;
  cursor: pointer;

  transition: color 250ms ${props => props.theme.transitionFunction},
    background-color 250ms ${props => props.theme.transitionFunction},
    box-shadow 250ms ${props => props.theme.transitionFunction};

  :hover {
    color: ${props => props.theme.colors.activText};
    background-color: ${props => props.theme.colors.activBtn};
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }

  :not(:last-child) {
    margin-right: ${props => props.theme.spacing(2)};
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
`;
