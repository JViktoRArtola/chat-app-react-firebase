import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    column-gap: 2rem;
    height: auto;
    position: relative;
    background-image: url('/whatsapp.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
`;

export const LateralBar = styled.div`
    border-right: 1px solid #007730
`;

export const Title = styled.h2`
    text-align: center;
    color: white;
`;

export const LeftContainer = styled.div`
    background-color: rgba(58, 83, 53, 0.53);
    height: 90.5vh;
    overflow-y: scroll;
    border-top: 1px solid #007730
`;


export const Touchable = styled.button`
    padding: 4px;
    width: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: white;
    border-bottom: 2px solid #575763;
`;

export const Text = styled.p`
    font-size: 1.2rem;
`;




