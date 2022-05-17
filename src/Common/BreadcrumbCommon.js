import { Breadcrumb } from "antd"

const BreadcrumbCommon = ({ header, title }) => {

    return (
        <Breadcrumb>
            <Breadcrumb.Item>
                <span>{header}</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="text-primary">
                <span>{title}</span>
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadcrumbCommon;