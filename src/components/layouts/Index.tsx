import { motion } from "motion/react";
import { ReactNode } from "react";
import styled from "styled-components";
import { FaUserCircle, FaHome } from "react-icons/fa";
import {
  GoBell,
  GoComment,
  GoGear,
  GoHash,
  GoHome,
  GoPerson,
  GoSearch,
} from "react-icons/go";
import { FcHome, FcSearch } from "react-icons/fc";
import { FiBell, FiHash, FiMessageCircle } from "react-icons/fi";
import { HiUserCircle } from "react-icons/hi";
import { TiUserOutline } from "react-icons/ti";
import { RxAvatar } from "react-icons/rx";
import { LuHouse, LuSearch } from "react-icons/lu";

import * as Layout from "./layout.styles";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    // Wrapper Layout
    <Layout.Wrapper>
      <Layout.Sidebar>
        {/* sidebar logo */}
        <Layout.SidebarLogo>
          <Layout.Logo
            width={33}
            height={33}
            src="https://colibrism.terla.pro/themes/default/statics/img/logo.png"
          />
          <Layout.LogoBrandName>Twitodon</Layout.LogoBrandName>
          <Layout.BetaBadge>Beta</Layout.BetaBadge>
        </Layout.SidebarLogo>
        {/* SIdebar Menu */}
        <Layout.SidebarMenu>
          <Layout.SidebarMenuItem>
            <Layout.SidebarMenuIcon>
              <LuHouse size={25} />
            </Layout.SidebarMenuIcon>
            <Layout.SidebarMenuLabel>Home</Layout.SidebarMenuLabel>
          </Layout.SidebarMenuItem>
          <Layout.SidebarMenuItem>
            <Layout.SidebarMenuIcon>
              <LuSearch size={25} />
            </Layout.SidebarMenuIcon>
            <Layout.SidebarMenuLabel>Search</Layout.SidebarMenuLabel>
          </Layout.SidebarMenuItem>
          <Layout.SidebarMenuItem>
            <Layout.SidebarMenuIcon>
              <FiBell size={25} />
            </Layout.SidebarMenuIcon>
            <Layout.SidebarMenuLabel>Notifikasi</Layout.SidebarMenuLabel>
          </Layout.SidebarMenuItem>
          <Layout.SidebarMenuItem>
            <Layout.SidebarMenuIcon>
              <FiMessageCircle size={25} />
            </Layout.SidebarMenuIcon>
            <Layout.SidebarMenuLabel>Pesan</Layout.SidebarMenuLabel>
          </Layout.SidebarMenuItem>
          <Layout.SidebarMenuItem>
            <Layout.SidebarMenuIcon>
              <FiHash size={25} />
            </Layout.SidebarMenuIcon>
            <Layout.SidebarMenuLabel>Feeds</Layout.SidebarMenuLabel>
          </Layout.SidebarMenuItem>
          <Layout.SidebarMenuItem>
            <Layout.SidebarMenuIcon>
              <RxAvatar size={25} />
            </Layout.SidebarMenuIcon>
            <Layout.SidebarMenuLabel>Akun Saya</Layout.SidebarMenuLabel>
          </Layout.SidebarMenuItem>
          <Layout.SidebarMenuItem>
            <Layout.SidebarMenuIcon>
              <GoGear size={25} />
            </Layout.SidebarMenuIcon>
            <Layout.SidebarMenuLabel>Pengaturan</Layout.SidebarMenuLabel>
          </Layout.SidebarMenuItem>
          <Layout.ButtonNewPost>Buat Postingan</Layout.ButtonNewPost>
        </Layout.SidebarMenu>
      </Layout.Sidebar>
      <Layout.Content>
        <Layout.Navbar>
          <Layout.NavbarHamburgerMenu />
          <Layout.NavbarLeft>Feed</Layout.NavbarLeft>
          <Layout.Logo
            width={30}
            height={30}
            src="https://colibrism.terla.pro/themes/default/statics/img/logo.png"
          />
          <Layout.NavbarRight>
            <Layout.UserProfile />
          </Layout.NavbarRight>
        </Layout.Navbar>
        {children}
      </Layout.Content>
      <Layout.Sidebar>
        <Layout.SidebarRightWrapper>
          <Layout.SideabarSearch>
            <Layout.SideabarSearchIcon />
            <Layout.SidebarSearchInput placeholder="Cari Tag,User,Postingan" />
          </Layout.SideabarSearch>

          {/* Search Results */}
          <Layout.SidebarSearchResult>
            <Layout.SidebarSearchResultHeader>
              Hasil untuk #pembina
            </Layout.SidebarSearchResultHeader>
            <Layout.SidebarSearchContent>
              <ul>
                <li>
                  <p>#fufufafa</p>
                </li>
                <li>
                  <p>#au ah gelap</p>
                </li>
                <li>
                  <p>#kaburajadulu</p>
                </li>
              </ul>
            </Layout.SidebarSearchContent>
          </Layout.SidebarSearchResult>
          {/* Trending */}
        </Layout.SidebarRightWrapper>
      </Layout.Sidebar>
    </Layout.Wrapper>
    //end Wrapper layout
  );
};
