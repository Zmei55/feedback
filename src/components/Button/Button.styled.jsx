import styled from '@emotion/styled';

export const Btn = styled.button`
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
