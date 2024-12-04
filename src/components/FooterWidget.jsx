import { Col, Row } from 'antd';
import { Avatar, List, Tag } from 'antd';
import { featured } from '../assets/data';


  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

const FooterWidget = () => {

  return (
    <div className="footerWidget">
        <div className="container">
            <Row gutter={[24, 24]}>
                {/* featured */}
                <Col sm={{ span: 12 }} md={{ span: 6 }}>
                <h3>Featured</h3>
                <List
                    itemLayout="horizontal"
                    dataSource={featured}
                    renderItem={(item) => (
                    <List.Item >
                        <List.Item.Meta
                          style={{ color: '#ffffff' }}
                        avatar={<Avatar src={item.image} />}
                        title={<a  style={{ color: '#ffffff' }} href={item.link}>{item.title}</a>}
                        description={<span style={{ color: '#ffffff' }}>$ {item.cost}</span>}
                        />
                    </List.Item>
                    )}
                />
                </Col>

                {/* top rated */}
                <Col  sm={{ span: 12 }} md={{ span: 6 }}>
                <h3>Top Rated</h3>
                <List
                    itemLayout="horizontal"
                    dataSource={featured}
                    renderItem={(item) => (
                    <List.Item >
                        <List.Item.Meta
                          style={{ color: '#ffffff' }}
                        avatar={<Avatar src={item.image} />}
                        title={<a  style={{ color: '#ffffff' }} href={item.link}>{item.title}</a>}
                        description={<span style={{ color: '#ffffff' }}>$ {item.cost}</span>}
                        />
                    </List.Item>
                    )}
                />
                </Col>

                {/* tag */}
                <Col sm={{ span: 12 }} md={{ span: 6 }}>
                    <div className="tags">
                        <h3>Tags</h3>
                        <Tag> <a href="www.google.com">Smart Phones</a></Tag>
                        <Tag>Laptops</Tag>
                        <Tag>Tablets</Tag>
                        <Tag closable>Headset</Tag>
                        <Tag closable>VR Devices</Tag>
                    </div>
                </Col>

                {/* recent posts */}
                <Col  sm={{ span: 12 }} md={{ span: 6 }}>
                <h3>Recent Posts</h3>
                <List
                    size="small"
                    className='recentPost'
                    dataSource={data}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                    />
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default FooterWidget