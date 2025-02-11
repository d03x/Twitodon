import { ReactNode } from "react";
import * as Layout from "@/components/Layout/Layout.styles";
import Navbar from "../Navbar/Navbar";
import { Sidebar } from "./Sidebar/Sidebar";
interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = (props: AppLayoutProps) => {
  return (
    <Layout.Main>
      <Navbar />
      <Layout.Wrapper>
        <Layout.Begin>
          <Sidebar />
          <Layout.Content>{props.children}</Layout.Content>
        </Layout.Begin>
      </Layout.Wrapper>
    </Layout.Main>
  );
};

export default AppLayout;
