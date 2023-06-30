import React from 'react';
import {Card, Col, Divider, Row} from "antd";
import CardComponent from "../components/CardComponent";
import {Content} from "antd/es/layout/layout";
import PieChart from "../components/PieChart";
import TimelineComponent from "../components/TimelineComponent";

function Dashboard(props) {
    const data = [
        {
            type: '分类一',
            value: 27,
        },
        {
            type: '分类二',
            value: 25,
        },
        {
            type: '分类三',
            value: 18,
        },
        {
            type: '分类四',
            value: 15,
        },
        {
            type: '分类五',
            value: 10,
        },
        {
            type: '其他',
            value: 5,
        },
    ];
    return (
        <Content
            style={{
                padding: 24,
                minHeight: 280
            }}
        >
            <Divider orientation="left">Summary</Divider>
            <Row gutter={16}>
                <Col span={8}>
                    <CardComponent title="Income" content={100000}/>
                </Col>
                <Col span={8}>
                    <CardComponent title="Expense" content={100000}/>
                </Col>
                <Col span={8}>
                    <CardComponent title="Total Money" content={100000}/>
                </Col>
            </Row>
            <Divider orientation="left">Summary Breakdown</Divider>
            <Row gutter={16}>
                <Col span={12}>
                    <PieChart data={data} title="Income"/>
                </Col>
                <Col span={12}>
                    <PieChart data={data} title="Expense"/>
                </Col>
            </Row>
            <Divider orientation="center">Recent Transaction</Divider>
            <Row gutter={16}>
                <Col span={24}>
                    <Card>
                        <TimelineComponent/>
                    </Card>
                </Col>
            </Row>
        </Content>
    );
}

export default Dashboard;