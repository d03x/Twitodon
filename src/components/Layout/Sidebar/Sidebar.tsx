import { navHeight } from "@/components/Navbar/Navbar.styles";
import { breakpoint } from "@/utils/breakpoint";
import { BiBell, BiBookmark, BiMessage, BiPhotoAlbum, BiSmile, BiStore, BiVideo } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { LuGamepad } from "react-icons/lu";
import { PiUsersThree } from "react-icons/pi";
import { TiHomeOutline } from "react-icons/ti";

import styled from "styled-components";
const sidebarWidth = "180px";
const SidebarMain = styled.div`
  
  min-width: ${sidebarWidth};
  width: 100%;
  padding: 1em 0px;
  position: sticky;
  top: ${navHeight};
  padding-right:0.7em;
  box-sizing: border-box;
  border-right: 1px solid var(--color_separator_secondary);
  height: calc(100vh - ${navHeight} - 1px);
  display: none;
  @media (min-width: ${breakpoint.xl}) {
    display: flex;
    flex-direction: column;
    gap: 0.2em;
  }
`;
const SidebarItem = styled.a`
  display: flex;
  cursor: pointer;
  box-sizing: border-box;
  align-items: center;
  padding:0.3em 0.5em;
  border-radius: 10px;
  &:hover{
    color: var(--color_text_accent);
    background: var(--color_background_secondary--hover);
  }
`;

const SidebarIcon = styled.span`
color: var(--color_panel_header_icon);
  svg{
    width: 22px;
    height: 22px;
  }
`;
const SidebarLabel = styled.span`
  display: block;
  font-size: 14px;
  margin-left: 4px;
`;
const SidebarDivider = styled.div`
background:var(--color_separator_secondary);
height:0.3px;
margin-left: 2.2em;

`
export const Sidebar = () => {
  return (
    <SidebarMain>
      <SidebarItem>
        <SidebarIcon>
          <TiHomeOutline />
        </SidebarIcon>
        <SidebarLabel>Kabar Beranda</SidebarLabel>
      </SidebarItem>
      <SidebarItem>
        <SidebarIcon>
          <BiBell />
        </SidebarIcon>
        <SidebarLabel>Notifikasi</SidebarLabel>
      </SidebarItem>
      <SidebarItem>
        <SidebarIcon>
          <BiMessage />
        </SidebarIcon>
        <SidebarLabel>Pesan</SidebarLabel>
      </SidebarItem>
      <SidebarItem>
        <SidebarIcon>
          <PiUsersThree />
        </SidebarIcon>
        <SidebarLabel>Komunitas</SidebarLabel>
      </SidebarItem>
      <SidebarItem>
        <SidebarIcon>
          <BsPeople />
        </SidebarIcon>
        <SidebarLabel>Teman</SidebarLabel>
      </SidebarItem>
      <SidebarItem>
        < SidebarIcon>
          <BiBookmark />
        </SidebarIcon>
        <SidebarLabel>Bookmark</SidebarLabel>
      </SidebarItem>

      <SidebarItem>
        <SidebarIcon>
          <BiStore />
        </SidebarIcon>
        <SidebarLabel>Jual Beli</SidebarLabel>
      </SidebarItem>
      <SidebarDivider as={"divider"} />
      <SidebarItem>
        <SidebarIcon>
          <BiSmile />
        </SidebarIcon>
        <SidebarLabel>Stiker</SidebarLabel>
      </SidebarItem>
      <SidebarItem>
        <SidebarIcon>
          <BiVideo />
        </SidebarIcon>
        <SidebarLabel>Video</SidebarLabel>
      </SidebarItem>
      <SidebarItem>
        <SidebarIcon>
          <BiPhotoAlbum />
        </SidebarIcon>
        <SidebarLabel>Foto Album</SidebarLabel>
      </SidebarItem>
      <SidebarItem>
        <SidebarIcon>
          <LuGamepad />
        </SidebarIcon>
        <SidebarLabel>Game</SidebarLabel>
      </SidebarItem>

    </SidebarMain>
  );
};
