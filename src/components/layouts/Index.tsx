import { ReactNode, useState } from "react";
import { GoGear } from "react-icons/go";
import { FiBell, FiHash, FiMessageCircle } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { LuHouse, LuSearch } from "react-icons/lu";
import * as Layout from "./layout.styles";
import { AnimatePresence } from "motion/react";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  const [showSearchResult, setShowSearchResult] = useState<boolean>(false);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const showSearch = () => {
    setShowSearchResult(!showSearchResult);
  };

  return (
    // Wrapper Layout
    <Layout.Wrapper>
      <Layout.Sidebar>
        {/* sidebar logo */}
        <Layout.SidebarLogo>
          <Layout.Logo
            width={40}
            height={40}
            src="https://fcfac34883e0b5783dba4fa527fde14f.cdn.bubble.io/f1590605384527x357659894791220860/notrealtwitter.svg"
          />
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
      <Layout.Sidebar $right>
        <Layout.SidebarRightWrapper>
          <Layout.SideabarSearch>
            <Layout.SideabarSearchIcon />
            <Layout.SidebarSearchInput
              onClick={showSearch}
              onChange={(e: any) =>
                setSearchKeyword(e?.target?.value as string)
              }
              placeholder="Cari Tag,User,Postingan"
            />
          </Layout.SideabarSearch>
          {/* Search Results */}
          <AnimatePresence>
            {searchKeyword && (
              <Layout.SidebarSearchResult
                initial={{
                  opacity: 0,
                  scaleY: 1.1,
                  translateY: 4,
                }}
                animate={{
                  scaleY: 1,
                  opacity: 1,
                  translateY: 0,
                }}
                exit={{ opacity: 0, scaleY: 1.1, translateY: 4 }}
              >
                <Layout.SidebarSearchResultHeader>
                  Hasil untuk #{searchKeyword}
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
            )}
          </AnimatePresence>
          {/* Trending */}
        </Layout.SidebarRightWrapper>
      </Layout.Sidebar>
    </Layout.Wrapper>
    //end Wrapper layout
  );
};
