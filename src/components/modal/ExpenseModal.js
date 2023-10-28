import {DatePicker, Form, Input, Modal, Select} from 'antd';
import TextArea from "antd/es/input/TextArea";

const ExpenseModal = ({open, onCreate, onCancel}) => {
    const [form] = Form.useForm();
    return (
        <Modal
            open={open}
            title="Add Expense"
            okText="Add"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        let data = {type:"Expense", ...values}
                        onCreate(data);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                name="form_in_modal"
                initialValues={{
                    modifier: 'public',
                }}
            >
                <Form.Item name="date" label="Date"
                   rules={[
                       {
                           required: true,
                           message: 'Please enter Date.',
                       },
                   ]}
                >
                    <DatePicker/>
                </Form.Item>
                <Form.Item
                    name="amount"
                    label="Amount"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter amount.',
                        },
                    ]}
                >
                    <Input type="number"/>
                </Form.Item>
                <Form.Item
                    name="category"
                    label="Category"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter Category.',
                        },
                    ]}
                >
                    <Select
                        defaultValue="food"
                        options={[
                            {value: 'food', label: 'Food'},
                            {value: 'loan', label: 'Loan'},

                        ]}
                    />
                </Form.Item>
                <Form.Item
                    name="account"
                    label="Account"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter Account.',
                        },
                    ]}
                >
                    <Select
                        defaultValue="cash"
                        options={[
                            {value: 'cash', label: 'Cash'},
                            {value: 'bank', label: 'Bank'},

                        ]}
                    />
                </Form.Item>
                <Form.Item name="remarks" label="Remarks">
                    <TextArea rows={4}/>
                </Form.Item>
            </Form>
        </Modal>
    );
};
export default ExpenseModal;