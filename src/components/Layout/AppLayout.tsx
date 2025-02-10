import { ReactNode } from "react";
import * as Layout from "./Layout.styles";
import { Sidebar } from "./Sidebar/Sidebar";
interface AppLayoutProps {
  children: ReactNode;
}
const AppLayout = (props: AppLayoutProps) => {
  return (
    <Layout.Wrapper>
      <Layout.Container>
        <Layout.Begin>
          <Layout.Sidebar>
            <Sidebar />
          </Layout.Sidebar>
          <Layout.Main>
            <div>{props.children}</div>
          </Layout.Main>
          <Layout.Sidebar>SIDEBAR</Layout.Sidebar>
        </Layout.Begin>
      </Layout.Container>
    </Layout.Wrapper>
  );
};

export default AppLayout;
