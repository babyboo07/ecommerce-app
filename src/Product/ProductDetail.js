import { Descriptions } from "antd";
import { useParams } from "react-router-dom";
import BreadcrumbCommon from "../Common/BreadcrumbCommon";
import productData from "../Mock/productData";

const ProductDetail = () => {
    const { id } = useParams();

    const product = productData.filter(p => {return p.id === parseInt(id)})[0];

    return (
        <div>
            <div>
                <BreadcrumbCommon header={'Product'} title={'Detail'} />
            </div>
            <div className="pt-4">
                {product !== undefined && product && product.id !== undefined ?
                    < Descriptions layout="horizontal">
                        <Descriptions.Item label="Product Name"><span>{product.productName}</span></Descriptions.Item>
                        <Descriptions.Item label="Price"><span>{product.price}</span></Descriptions.Item>
                        <Descriptions.Item label="Quantity"><span>{product.qty}</span></Descriptions.Item>
                        <Descriptions.Item label="Category"><span>{product.categoryId}</span></Descriptions.Item>
                        <Descriptions.Item label="Material"><span>{product.material}</span></Descriptions.Item>
                    </Descriptions> : null
                }
            </div>
        </div >
    );
}
export default ProductDetail;