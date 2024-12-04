import { Outlet , Navigate} from "react-router-dom";
import { Layout } from 'antd';
import { useAuth } from '../../context/AuthContext';
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

const { Header, Footer,  Content } = Layout;

const AppLayout = () => {
    const {  isLoggedIn} = useAuth()
    return isLoggedIn ?         
        (<Layout>
           <Header >
               <AppHeader />
           </Header>
           <Content >
            <Outlet />
           </Content>
           <Footer >
             <AppFooter />
           </Footer>
        </Layout>) : <Navigate to="/login" />
}

export default AppLayout