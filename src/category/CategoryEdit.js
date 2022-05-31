import { Button, Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import BreadcrumbCommon from "../Common/BreadcrumbCommon.js";
import { editCategory, getParentCate, showCategory } from "../Redux/category/actions.js";
import { getCateSelector } from "../Redux/category/selectors.js";

const { Option } = Select;

const CategoryEdit = (props) => {
    const [level, setLevel] = useState(1);
    const [form] = Form.useForm()
    const [parentCategory, setParentCategory] = useState(null);
    const cateData = useSelector(getCateSelector);
    const dispatch = useDispatch();
    const { detailCate } = cateData;
    const { parentCate } = cateData;
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getParentCate());
        dispatch(showCategory({ id: id }));
    }, []);

    useEffect(() => {
        setLevel(detailCate?.level)
    }, [detailCate]);

    const onFinish = (values) => {
        values.id = id;
        dispatch(editCategory(values,navigate))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const tailLayout = {
        wrapperCol: { offset: 14, span: 16 },
    };

    const renderParentCategory = () => {
        if (level === undefined || !level || level === 1) return null;
        let data = parentCate.filter(c => c.level === level - 1);

        return (
            <Form.Item name="cateId" label="Parent" rules={[{ required: true, message: 'Plesse select cate\'s Parent' }]}>
                <Select
                    placeholder="Select a cate's Parent"
                    onChange={(e) => setParentCategory(e)}
                >
                    {
                        data.map((pc) => {
                            if (pc.level === level - 1) {
                                return (<Option key={pc.id} value={pc.id} >{pc.cateName}</Option>)
                            }

                            return null;
                        })
                    }
                </Select>
            </Form.Item>
        )
    }

    return (
        <div>
            <div>
                <BreadcrumbCommon header={'Category'} title={'Edit'} />
            </div>
            <div className="pt-4">
                {detailCate ?
                    <Form
                        form={form}
                        name="basic"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 10 }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        initialValues={detailCate}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Category Name"
                            name="cateName"
                            rules={[{
                                required: true, message: "Please input your Category Name!"
                            }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item name="level" label="Level" rules={[{ required: true, message: 'Plesse select your level' }]}>
                            <Select
                                placeholder="Select a option and change input text above"
                                onChange={(e) => {
                                    setParentCategory(null);
                                    form.setFieldsValue({
                                        parent: null
                                    })
                                    setLevel(e)
                                }}
                            >
                                <Option value={1}>1</Option>
                                <Option value={2}>2</Option>
                                <Option value={3}>3</Option>
                            </Select>
                        </Form.Item>
                        {renderParentCategory()}
                        <Form.Item {...tailLayout}>
                            <Button className="btn-success" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form> : null
                }
            </div>
        </div>
    );
}

export default CategoryEdit;