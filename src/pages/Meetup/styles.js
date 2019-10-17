import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Loading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingTop: 20, paddingLeft: 20, paddingRight: 20 },
})``;

export const Filter = styled.View`
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
`;

export const DateFilter = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  padding: 0 20px;
`;
