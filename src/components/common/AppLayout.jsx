import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

const { Header, Footer,  Content } = Layout;

const AppLayout = () => {
    // return ture ? <Outlet /> : <Navigate to="/login" />
    return (
        // <>
        // <Outlet />
        // </>
        <Layout>
           <Header >
               <AppHeader />
           </Header>
           <Content >
            <Outlet />
           </Content>
           <Footer >
             <AppFooter />
           </Footer>
        </Layout>
    )
}

export default AppLayout