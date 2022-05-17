import { DatePicker, Form, Select } from "antd";
import 'antd/dist/antd.css';

const { Option } = Select;

const SreachCommon = ({dataList}) => {
    let defaultVal = dataList.filter(i => {return i.isSelected});
    return (
        <div>
            <Form
                layout="inline"
            >
                <Form.Item
                    label='Category'
                >
                    <Select
                        placeholder="Select Category"
                        allowClear
                        defaultValue={defaultVal.length ? defaultVal[0].value : ''}
                    >
                        {dataList !== undefined && dataList && dataList.length ? 
                            dataList.map(i => {
                                return <Option key={i.value} value={i.value}>{i.name}</Option>
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