import styled from 'styled-components';


export const PageContainer = styled.div`
    border: 1px solid red;
    display: flex;
    flex: 1;
    padding: 20px 10px;
    justify-content: center;
    height: fit-content;
`;

export const BookContainer = styled.div`
    border: 1px solid red;
    display: flex;
    flex: 1;
    max-width: 800px;
    padding: 0 20px;
    flex-direction: column;
    height: fit-content;
`;

export const BookTitle = styled.h1`
    border: 1px solid blue;
    display: flex;
    flex: 1;
    height: fit-content;
    justify-content: center;
`;

export const BookInformation = styled.div`
    border: 1px solid blue;
    display: flex;
    flex: 1;
    height: fit-content;
    justify-content: center;
`;

export const BookAvatar = styled.div`
    height: 400px;
    width: 300px;
    background-position: center;
    background-size: cover;
`;

export const BookDescription = styled.div`
    display: flex;
    flex: 1;
    padding: 20px;

    p {

    }
`;

export const BookPurchase = styled.div`
    display: flex;
    flex: 1;
    border: 1px solid green;
    height: fit-content;
    padding: 20px;
`;