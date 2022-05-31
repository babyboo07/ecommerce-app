import { DatePicker, Form, Select } from "antd";
import 'antd/dist/antd.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategorylist } from "../Redux/product/actions";
import { getProductSelector } from "../Redux/product/selectors";

const { Option } = Select;

const SreachCommon = () => {
    const dispatch = useDispatch();
    const productData  = useSelector(getProductSelector);
    const {categories} = productData;

    useEffect(()=>{
        dispatch(getCategorylist());
    },[])
    return (
        <div>
            <Form
                layout="inline"
            >
                <Form.Item
                    label='Category'
                    name = 'cateId'
                >
                    <Select
                        placeholder="Select Category"
                        allowClear
                    >
                        {categories ? 
                            categories.map(i => {
                                return <Option key={i.id} value={i.id}>{i.cateName}</Option>
                            }): null
                        }
                    </Select>
                </Form.Item>
                <Form.Item
                    label='Order Date'
                >
                    <DatePicker />
                </Form.Item>
            </Form>
        </div>
    );
}

export default SreachCommon;