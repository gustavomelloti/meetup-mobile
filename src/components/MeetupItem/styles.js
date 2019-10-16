import styled from 'styled-components/native';

import Button from '../Button';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const Info = styled.View`
  flex: 1;
  margin-left: 15px;
  margin-top: 15px;
`;

export const Name = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Date = styled.Text`
  font-size: 13px;
  color: #999999;
  margin-left: 5px;
`;

export const Location = styled.Text`
  font-size: 13px;
  color: #999999;
  margin-left: 5px;
`;

export const Organizer = styled.Text`
  font-size: 13px;
  color: #999999;
  margin-left: 5px;
`;

export const SubscriptionButton = styled(Button)`
  margin: 10px 15px 20px;
  height: 40px;
`;

export const CancellSubscriptionButton = styled(Button)`
  margin: 10px 15px 20px;
  height: 40px;
  background: #d44059;
`;

export const InfoRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
