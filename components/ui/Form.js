import styled from "styled-components";

export const Form = styled.form`
  width: 20%;
`;

export const Error = styled.p`
    background-color: red;
    padding: .5rem;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: #FFF;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 2rem;
`;

export const Input = styled.input`
  border-radius: 0;
  padding: 15px 20px;
  width: 100%;
`;


export const Field = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    label {
        flex: 0 0 150px;
        font-size: 1.8rem;
    }
    input, 
    textarea {
        flex: 1;
        padding: 1rem;
    }
    textarea {
        height: 400px;
    }
`;
