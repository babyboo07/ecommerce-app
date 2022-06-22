import { Button, Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import BreadcrumbCommon from "../Common/BreadcrumbCommon";
import { PlusOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getCategorylist } from "../Redux/product/actions";
import { getProductSelector } from "../Redux/product/selectors";

const { Option } = Select;

const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }

    return e && e.fileList;
};

const ProductCreate = () => {
    let [isError, setIsError] = useState(false);
    const [imgList, setImgList] = useState([]);
    const dispatch = useDispatch();
    const productData = useSelector(getProductSelector);
    const [categoryList, setCategoryList] = useState(null);
    const { categories } = productData;

    useEffect(() => {
        dispatch(getCategorylist());
    }, [])

    const onFinishFailed = (errorInfo) => {
        console.log(!imgList || imgList.length === 0)
        if (!imgList || imgList.length === 0) {
            setIsError(true)
        } else {
            setIsError(false)
        }
        console.log('Failed:', errorInfo);
    };

    const tailLayout = {
        wrapperCol: { offset: 14, span: 16 },
    };

    const beforeUpload = (file) => {
        const isImg = file.type.includes('image');

        if (isImg) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                let newImgList = [...imgList];
                newImgList.push({
                    id: file.uid,
                    name: file.name,
                    src: reader.result
                })
                setImgList(newImgList);
            }
        }

        return false;
    }

    const onFinish = (values) => {
        if (!imgList || imgList.length === 0) {
            setIsError(true)
            return
        }
        setIsError(false)
        values.images = imgList.map(i => { return i.src });

        dispatch(addProduct(values));
    };

    const handleSelectFile = (files) => {
        let fileList = [];
        let fileData = [];
        for (let file of files) {
            if (file.type.includes('image')) {
                fileList.push(file);
            }
        }

        fileList.map((file, index) => {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                fileData.push({
                    id: uuid(),
                    name: file.name,
                    src: reader.result
                })

                if (index === fileList.length - 1) {
                    setImgList(fileData);
                }
            }
        })
    }

    const removeImage = (id) => {
        setImgList(imgList.filter(i => i.id !== id))
    }

    return (
        <div>
            <div>
                <BreadcrumbCommon header={'Product'} title={'Add'} />
            </div>
            <div className="pt-4">
                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 10 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Product Name"
                        name="productName"
                        rules={[{
                            required: true, message: "Please input your Product Name!"
                        }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="cateId" label="Category" rules={[{ required: true, message: 'Plesse select your Category' }]}>
                        <Select
                            placeholder="Select Category"
                            onChange={(e) => setCategoryList(e)}
                        >
                            {categories ?
                                categories.map((cl) => { return (<Option key={cl.id} value={cl.id} >{cl.cateName}</Option>) }) : (<></>)
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{
                            required: true,
                            message: 'Please input description!'
                        }]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        label="Quantity"
                        name="qty"
                        rules={[{
                            required: true,
                            message: 'Quantity is required'
                        }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{
                            required: true,
                            message: 'Price is required'
                        }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Material"
                        name="material"
                        rules={[{
                            required: true,
                            message: 'Material is required!'
                        }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Image"
                        name="image"
                        getValueFromEvent={normFile}
                        valuePropName="fileList"
                    >
                        <Input
                            accept="image/*"
                            type="file"
                            id="product-img"
                            multiple
                            onChange={(e) => {
                                handleSelectFile(e.target.files);
                            }}
                            style={{ display: 'none' }}
                        />
                        <Button onClick={() => {
                            document.getElementById('product-img').click();
                        }}><FontAwesomeIcon icon={faUpload} /></Button>

                        {imgList && imgList.length ?
                            <ul className="fileList">
                                {imgList.map(i => {
                                    return (
                                        <li key={i.id} className="fileItem">
                                            <img src={i.src} alt={i.name} />
                                        </li>
                                    )
                                })}
                            </ul> : null
                        }
                        {
                            isError && !imgList.length ? <div className="ant-form-item-explain">
                                <div role="alert" className="ant-form-item-explain-error">Please select Image</div>
                            </div> : null
                        }
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button className="btn-success" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default ProductCreate;