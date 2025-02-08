import { motion } from "motion/react";
import { BiMenu } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { styled } from "styled-components";

export const Wrapper = styled(motion.div)`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  @media (min-width: 640px) {
    display: flex;
    padding: 0 16px;
  }

  @media (min-width: 768px) {
    max-width: 1280px;
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
    max-width: 1200px;
  }
`;

export const Sidebar = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  display: none;
  @media (min-width: 620px) {
    display: none;
    width: 53px;
  }
  @media (min-width: 720px) {
    display: block;
  }
  @media (min-width: 1024px) {
    min-width: 260px;
  }
`;
export const Content = styled.div`
  width: 100%;
  @media (min-width: 720px) {
    width: calc(100% - 260px - 260px);
  }
  box-sizing: border-box;
  @media (min-width: 620px) {
    width: 100%;
    border-right: 1px solid var(--primary-border-color);
    border-left: 1px solid var(--primary-border-color);
  }
`;

export const Navbar = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: var(--primary-bg-color);
  position: sticky;
  top: 0;
  height: 48px;
  box-sizing: border-box;
  padding: 0 20px;
  border-bottom: 1px solid var(--primary-border-color);
`;

export const NavbarLeft = styled.div`
  margin-right: auto;
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;
export const NavbarRight = styled.div`
  margin-left: auto;
`;
export const UserProfile = styled(motion.div)`
  width: 30px;
  border-radius: 3px;
  color: #646464;
  padding: 3px;
  box-sizing: border-box;
  height: 30px;
  border: 1px solid var(--primary-border-color);
  aspect-ratio: 1/1;
  background-color: #f2f2f2;
`;
export const Logo = styled.img``;
export const SidebarLogo = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;
`;

export const LogoBrandName = styled.span`
  font-weight: 500;
  font-size: 20px;
  color: var(--tertiary-text-color);
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

export const BetaBadge = styled.div`
  font-size: 10px;
  position: relative;
  top: -8px;
  color: var(--danger-color);
  left: 4px;
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;
export const SidebarMenu = styled(motion.div)`
  margin-right: 2em;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  gap: 4px;
  color: var(--primary-text-color);
`;
export const SidebarMenuItem = styled.a`
  display: flex;
  padding: 0.5em;
  gap: 12px;
  flex: 1 1 0%;
  width: 100%;
  cursor: pointer;
  align-items: center;
  border-radius: 10px;
  color: var(--primary-text-color);
  &:hover {
    background-color: var(--secondary-bg-color);
  }
`;
export const SidebarMenuIcon = styled.div`
  width: 10px;
  width: 20px;
  height: 20px;
  color: var(--primary-text-color);
  @media (min-width: 1024px) {
    height: 25px;
    width: 25px;
  }
  svg {
    width: 20px;
    height: 20px;
    @media (min-width: 1024px) {
      height: 25px;
      width: 25px;
    }
  }
`;
export const SidebarMenuLabel = styled.span`
  font-size: 18px;
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

export const ButtonNewPost = styled(motion.button)`
  background: var(--primary-color);
  padding: 1.2em;
  font-weight: bold;
  color: var(--primary-bg-color);
  border-radius: 3em;
  cursor: pointer;
  border: none;
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

export const NavbarHamburgerMenu = styled(BiMenu)`
  width: 30px;
  color: var(--primary-text-color);
  cursor: pointer;
  height: 30px;
  display: block;
  margin-right: auto;
  @media (min-width: 1024px) {
    display: none;
  }
`;
export const SidebarRightWrapper = styled.div`
  padding: 10px;
`;
export const SideabarSearch = styled.form`
  border: 1px solid var(--primary-border-color);
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  background: var(--input-bg-color);
  display: flex;
  box-sizing: border-box;
`;
export const SidebarSearchInput = styled.input`
  height: 2.5em;
  box-sizing: border-box;
  outline: none;
  border: none;
  background: transparent;
  width: 100%;
`;

export const SideabarSearchIcon = styled(GoSearch)`
  width: 24px;
  padding: 0 0.5em;
  padding-right: 2px;
  height: 24px;
`;
export const SidebarSearchResult = styled.div`
  width: 100%;
  margin: 10px 0px;
  border: 1px solid var(--primary-border-color);
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const SidebarSearchResultHeader = styled.div`
  padding: 10px;
  &:hover {
    color: var(--primary-color);
    background-color: var(--input-bg-color);
    cursor: pointer;
  }
  border-bottom: 1px solid var(--primary-border-color);
  font-size: 13px;
  font-weight: bold;
`;

export const SidebarSearchContent = styled.div`
  padding: 0 10px;
  ul {
    list-style: none;
    padding: 0;
    font-size: small;
    li {
      &:hover {
        cursor: pointer;
        color: var(--primary-color);
      }
    }
  }
`;
export const Divider = styled.hr`
  border: 0.5px solid var(--secondary-border-color);
`;
