import styled from "styled-components";

export default function Navbar() {
  return <Nav>Site name</Nav>;
}

const Nav = styled.nav`
  font-size: 18px;
  min-height: 60px;
  width: 600px;
  align-self: flex-end;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightBlue};
`;
