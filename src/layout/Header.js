import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, Menu,  Layout, Space } from "antd";
import "../css/Header.css"
import { faKey, faArrowAltCircleRight, faFaceDizzy, faAlignLeft, faInfo } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from "react";

const { Header } = Layout;

const HeaderLayout = (props) => {
    useEffect(() => {
        let el = document.getElementById('root');
        if (el.clientWidth <= 600) {
            props.setIsCollapse(true)
        }

        window.addEventListener('resize', () => {
            let el = document.getElementById('root');
            if (el.clientWidth <= 600) {
                props.setIsCollapse(true)
            }
        });
    }, [])

    const menu = (
        <Menu
            items={[
                {
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                            <FontAwesomeIcon icon={faInfo} className={"px-2"}/>
                            My information
                        </a>
                    ),
                },
                {
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="/changepass">
                            <FontAwesomeIcon icon={faKey} className={"px-2"}/>
                            Change passwork
                        </a>
                    ),
                },
                {
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                            <FontAwesomeIcon icon={faArrowAltCircleRight} className={"px-2"}/>
                            Logout    
                        </a>
                    ),
                },
            ]}
        />
    );

    return (
        <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
        >
            <div className="col-12 row">
                <div className="col-7">
                    <FontAwesomeIcon className="ms-3" icon={faAlignLeft} size="lg" onClick={() => props.setIsCollapse(!props.isCollapse)} />
                </div>
                <div className="col-5 bd-highlight text-end">
                    <Dropdown overlay={menu}>
                        <a onClick={e => e.preventDefault()}>
                            <Space>
                                <FontAwesomeIcon icon={faFaceDizzy} size="xl" color="black" />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </div>
        </Header>
    )
}
export default HeaderLayout;