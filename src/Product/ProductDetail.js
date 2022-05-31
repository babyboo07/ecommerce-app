import { render } from "@testing-library/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BreadcrumbCommon from "../Common/BreadcrumbCommon";
import { getDetailProduct } from "../Redux/product/actions";
import { getProductSelector } from "../Redux/product/selectors";
import siteConfig from "../siteConfig";

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const productData = useSelector(getProductSelector);
    const { detailProduct } = productData;

    useEffect(() => {
        dispatch(getDetailProduct({ id: id }));
    }, []);


    return (
        <div>
            <div>
                <BreadcrumbCommon header={'Product'} title={'Detail'} />
            </div>
            <div className="pt-4">
                {detailProduct ?
                    <>
                        <table className="table table-striped table-bordered" style={{ maxWidth: '700px' }}>
                            <tbody>
                                <tr>
                                    <td width="150">Product Name</td>
                                    <td>{detailProduct.name}</td>
                                </tr>
                                <tr>
                                    <td>Price</td>
                                    <td>{detailProduct.price}</td>
                                </tr>
                                <tr>
                                    <td>Category</td>
                                    <td>{detailProduct.cateName}</td>
                                </tr>
                                <tr>
                                    <td>Quantity</td>
                                    <td>{detailProduct.qty}</td>
                                </tr>
                                <tr>
                                    <td>Material</td>
                                    <td>{detailProduct.material}</td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td>{detailProduct.description}</td>
                                </tr>
                                <tr>
                                    <td>Dicount</td>
                                    <td>{detailProduct.discount}</td>
                                </tr>
                                <tr>
                                    <td>Images</td>
                                    <td>
                                        {detailProduct.images !== undefined && detailProduct.images &&
                                            <ul className="fileList">
                                                {detailProduct.images.map(i => {
                                                    return (
                                                        <li key={i.id} className="fileItem">
                                                            <img src={siteConfig.apiRoot + i.path} alt={''} />
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                    : null
                }
            </div>
        </div >
    );
}
export default ProductDetail;