import styled from 'styled-components';

export const MainPageStyle = styled.div`
    height: 100vh;
    display: flex;
`;

export const MainPageLeft = styled.div`
    background-color: #222222;
    width: 250px;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 20px;
`;

export const AvatarImage = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 100%;
    margin: 30px 0px 20px 0px;
    background-position: center;
    background-size: cover;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

export const MainPageMenu = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    list-style-type: none;

    li {
        width: fit-content;
        float: right;
        color: white;
        margin: 5px 0px 0px auto;
    }
`;
export const MainPageLinks = styled.div`
    display: flex;
    position: absolute;
    box-sizing: border-box;
    flex-direction: row-reverse;
    bottom: 10px;
    rifht: 10px;
    padding: 10px 0px;
    align-self: flex-end;

    i {
        color: white;
        margin: 0 10px;
    }
`;

export const MainPageContent = styled.div`
    background-color: red;
    display: flex;
    flex: 1;
`;
