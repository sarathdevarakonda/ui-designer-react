import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectHistoricEvents } from './historicEventsReducer';

import { List, Typography } from 'antd';

const { Text } = Typography;

const HistoricEventsList = () => {
 const historicEvents = useSelector(selectHistoricEvents);


  return (
    <List
      itemLayout="vertical"
      size="large"
      style={{ maxHeight: '100vh', overflowY: 'auto' }} // Adjust the maxHeight as needed

      dataSource={historicEvents}
      renderItem={(item) => (
        <List.Item>
          <div>
            <Text strong>{item.date}</Text>
            <Text>{` - ${item.people}`}</Text>
          </div>
          <ul>
            {item.content.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </List.Item>
      )}
    />
  );
};

export default HistoricEventsList;
