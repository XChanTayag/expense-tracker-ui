import React, {useEffect, useState} from 'react';
import {Button, Divider, Space, Table, Tag} from "antd";
import {Content} from "antd/es/layout/layout";
import IncomeModal from "../components/modal/IncomeModal";
import ExpenseModal from "../components/modal/ExpenseModal";
import {useDispatch, useSelector} from "react-redux";
import {addTransaction, fetchAllTransactions} from "../redux/actions/transactions";

function Transaction(props) {
    const transactions = useSelector(state => state.TRANSACTIONS);
    const [incomeOpen, setIncomeOpen] = useState(false);
    const [expenseOpen, setExpenseOpen] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const dispatch = useDispatch();

    const columns = [
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Account',
            dataIndex: 'account',
            key: 'account',
        },
        {
            title: 'Remarks',
            dataIndex: 'remarks',
            key: 'remarks',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Edit</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    useEffect(() => {
        dispatch(fetchAllTransactions());
    }, [dispatch]);

    useEffect(() => {
        if (transactions.result.length !== 0)
            setDataSource(transactions.result);
        console.log(transactions.result)
    }, [transactions.result])


    const onCreate = (values) => {
        console.log('Received values of form: ', values);
        dispatch(addTransaction(values));
        setIncomeOpen(false);
        setExpenseOpen(false);
    };

    return (
        <Content
            style={{
                padding: 24,
                minHeight: 280
            }}
        >
            <Space wrap>
                <Button
                    type="primary"
                    onClick={() => {
                        setIncomeOpen(true);
                    }}
                >
                    Income
                </Button>
                <Button
                    type="primary"
                    onClick={() => {
                        setExpenseOpen(true);
                    }}
                >
                    Expense
                </Button>
            </Space>

            <IncomeModal
                open={incomeOpen}
                onCreate={onCreate}
                onCancel={() => {
                    setIncomeOpen(false);
                }}
            />
            <ExpenseModal
                open={expenseOpen}
                onCreate={onCreate}
                onCancel={() => {
                    setExpenseOpen(false);
                }}
            />
            <Divider orientation="left">Transactions</Divider>
            <Table columns={columns} dataSource={dataSource}/>
        </Content>
    );
}

export default Transaction;