import Icon from "../Icon";
import * as Nav from "./Navbar.styles";

export default function Navbar() {
  return (
    <Nav.MainNav>
      <Nav.NavWrapper>
        <Nav.Logo>
          <Icon name="logo" size={34} />
        </Nav.Logo>
        <Nav.NavItemLeft>
            <Nav.TopInputSearch/>
        </Nav.NavItemLeft>
      </Nav.NavWrapper>
    </Nav.MainNav>
  );
}
