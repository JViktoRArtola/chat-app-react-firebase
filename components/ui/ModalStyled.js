import styled from "styled-components";


export const Float = styled.div`
    position: absolute;
    top: 1.5rem;
    right: .9rem;
`;
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  flex: 1;
  justify-content: center;
  align-items: center;
    display: block;
`;


export const Section = styled.section`
  position:fixed;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  background-color: #091540;
  border-radius: 10px;
  padding: 12px;
  align-items: center;
`;

export const Title = styled.h2`
  color: white;
  font-size: 20px;
  font-weight: 400;
`;

export const Bar = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px 0;
`;


export const Cancel = styled.button`
  padding-left: 20px;
  padding-right: 20px;
  background-color: #eaf0f5;
  border-radius: 6px;
  line-height: 16px;
  letter-spacing: 0.5px;
  font-weight: 500;
  border: none;
  &:hover {
    cursor: pointer;
}
`;

export const Proceed = styled.button`
  padding: 15px;
  background-color: #e00000;
  color: white;
  border-radius: 6px;
  line-height: 16px;
  letter-spacing: 0.5px;
  border: none;
  font-weight: 500;
  &:hover {
    cursor: pointer;
}
`;

export const Exit = styled.button`
    padding: 1.3em 0.3em;
    border-radius: 20em;
    background-color: red;
    color: white;
    border: none;
    &:hover {
        cursor: pointer;
    }
`;
