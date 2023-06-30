import {Card, Statistic} from 'antd';

const CardComponent = (props) => (
    <Card bordered={false}>
        <Statistic
            title={props.title}
            value={props.content}
            precision={2}
            valueStyle={{
                color: '#3f8600',
            }}
            prefix="₱"
        />
    </Card>
);
export default CardComponent;