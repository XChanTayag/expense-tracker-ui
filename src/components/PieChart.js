import React from 'react';
import {Pie} from '@ant-design/plots';
import {Card} from "antd";

const PieChart = (props) => {

    const config = {
        appendPadding: 10,
        data: props.data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
            type: 'inner',
            offset: '-30%',
            content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };
    return (
        <Card bordered={false} title={props.title}>
            <Pie {...config}/>
        </Card>
    );
};

export default PieChart;
