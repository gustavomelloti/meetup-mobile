import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingTop: 20, paddingLeft: 20, paddingRight: 20 },
})``;

export const Loading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
