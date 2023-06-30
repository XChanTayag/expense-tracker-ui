import {
    AppstoreFilled,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SettingOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons';
import {Button, Layout, Menu, theme} from 'antd';
import {useState} from 'react';
import Dashboard from "./Dashboard";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Transaction from "./Transaction";

const { Header, Sider, Content } = Layout;
const NavBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Router>
            <Layout style={{height:"100vh"}}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <AppstoreFilled />,
                                label: <Link to="/">Dashboard</Link>,
                            },
                            {
                                key: '2',
                                icon: <UnorderedListOutlined />,
                                label: <Link to="/transaction">Transactions</Link>,
                            },
                            {
                                key: '3',
                                icon: <SettingOutlined />,
                                label: <Link to="/settings">Settings</Link>,
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    >
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                    </Header>
                    <Routes>
                        <Route exact path="/" element={<Dashboard />} />
                        <Route exact path="/transaction" element={<Transaction />} />
                    </Routes>
                </Layout>
            </Layout>
        </Router>
    );
};
export default NavBar;