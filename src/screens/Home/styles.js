import styled from 'styled-components/native';

export const Container = styled.View`
background-color: #fff;
`;

export const ScrollHorizontal = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingLeft: 0,
    },
}))`
  `;
