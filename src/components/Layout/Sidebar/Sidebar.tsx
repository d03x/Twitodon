import Icon from "@/components/Icon";
import { breakpoint } from "@/utils/breakpoint";
import { motion } from "motion/react";
import styled from "styled-components";
import avatar from "@/assets/avatar.webp";
const SidebarWrapper = styled.div`
  margin: 0.3em 0px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 1em);
`;
const SidebarLogo = styled.div``;
const SidebarMenu = styled.div`
  margin-top: 0.5em;
`;
const SidebarProfile = styled.div`
  margin-top: auto;
`;
const MenuItem = styled(motion.a)`
  display: flex;
  color: var(--sidebar-label-color);
  padding: 11px 0em;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
`;
const MenuItemLabel = styled.span`
  margin-left: 8px;
  display: none;
  font-family: var(--font-helvetica-light);
  @media (min-width: ${breakpoint.lg}) {
    display: block;
  }
`;
const MenuItemIcon = styled(Icon).attrs({
  size: 25,
})`
  border: 1px solid;
`;

const SidebarUserInfo = styled.div`
  display: flex;
  padding:0.5em;
  /* background: #a1a1a139; */
  margin-right: 0.8em;
  border-radius: 2em;
  align-items: center;
`;
const SidebarAvatar = styled.img`
  width: 40px;
  aspect-ratio: 1/1;
  border-radius: 100%;
`;
const SidebarUserMeta = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;
const SidebarUserName = styled.span`
  font-family: var(--font-helvetica-bold);
  font-size: 16px;
`;
const SidebarUserNickName = styled.span`
  font-size: 14px;
`;

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarLogo>
        <Icon size={39} color={"blue"} name="logo" />
      </SidebarLogo>
      <SidebarMenu>
        <MenuItem>
          <MenuItemIcon name="home" />
          <MenuItemLabel>Beranda</MenuItemLabel>
        </MenuItem>
        <MenuItem>
          <MenuItemIcon name="notification" />
          <MenuItemLabel>Notifications</MenuItemLabel>
        </MenuItem>
        <MenuItem>
          <MenuItemIcon name="at" />
          <MenuItemLabel>Cari Orang</MenuItemLabel>
        </MenuItem>
        <MenuItem>
          <MenuItemIcon name="hash" />
          <MenuItemLabel>Hastag</MenuItemLabel>
        </MenuItem>
        <MenuItem>
          <MenuItemIcon name="search" />
          <MenuItemLabel>Jelajahi</MenuItemLabel>
        </MenuItem>
        <MenuItem>
          <MenuItemIcon name="message-empty" />
          <MenuItemLabel>Percakapan</MenuItemLabel>
        </MenuItem>
        <MenuItem>
          <MenuItemIcon name="settings" />
          <MenuItemLabel>Pengaturan</MenuItemLabel>
        </MenuItem>
        <MenuItem>
          <MenuItemIcon name="more-horiz" />
          <MenuItemLabel>Lainnya</MenuItemLabel>
        </MenuItem>
      </SidebarMenu>
      <SidebarProfile>
        <SidebarUserInfo>
          <SidebarAvatar src={avatar} />
          <SidebarUserMeta>
            <SidebarUserName>Dadan Hidaat</SidebarUserName>
            <SidebarUserNickName>@dadandev</SidebarUserNickName>
          </SidebarUserMeta>
        </SidebarUserInfo>
      </SidebarProfile>
    </SidebarWrapper>
  );
};
