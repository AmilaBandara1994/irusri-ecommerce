import { FloatButton } from 'antd';
const FooterCopyRight = () => {
  return (
    <div className="footerCopyright">
        <div className="container">
            <div className="copyright">
             ©2024 Created by E-Commerce
            </div>
            <div className="toTop">
            <FloatButton.BackTop visibilityHeight={0} />
            </div>
        </div>
    </div>
  )
}

export default FooterCopyRight