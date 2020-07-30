import styled from "styled-components";

export const LogoImage = styled.img`
  max-width: 168px;

  @media (max-width: 800px) {
    max-width: 105px;
  }
`;

export const MenuWrapper = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 1;

  position: fixed;
  top: 0;
  left: 0;
  padding-left: 5%;
  padding-right: 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--black);
  border-bottom: 2px solid var(--primary);

  @media (max-width: 800px) {
    height: 40px;
    justify-content: center;
  }
`;

// export const ButtonLink = styled(Button)`
//   color: var(--white);
//   border: 1px solid var(--white);
//   padding: 16px 24px;
//   font-size: 16px;
//   border-radius: 4px;
//   font-weight: bold;
//   text-decoration: none;
//   transition: opacity 0.3;
  
//   &:hover,
//   &:focus {
//     opacity: .5;
//   }

//   @media (max-width: 800px) {
//     position: fixed;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: var (--primary);
//     color: var(--white);
//     outline: 0;
//     text-align: center;
//     border: 0;
//     border-radius: 0;
//   }
// `;
