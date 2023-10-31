import styled from "styled-components";

export const Label = styled.label`
  margin-top: 1rem;
`;
export const Container = styled.div`
  padding: 2rem;
`;

export const BContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
`;

export const Form = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-top: 0.5rem;
`;

export const Cancel = styled.button`
  width: 5rem;
  padding: 0.5rem 1rem;
  background: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-right: 1rem;
`;

export const Save = styled.button`
  width: 5rem;
  padding: 0.5rem 1rem;
  background: blue;
  color: white;
  border-radius: 5px;
  border: none;
`;

export const ANode = styled.div`
  width: 14rem;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  font-weight: 700;
  margin: 3rem;
`;

export const HBlock = styled.div`
  width: 3rem;
  height: 3rem;
  background: #FFC72C;
  border-radius: 5px;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
export const SBlock = styled.div`
  width: 3rem;
  height: 3rem;
  background: blue;
  border-radius: 5px;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
export const RBlock = styled.div`
  width: 3rem;
  height: 3rem;
  background: red;
  border-radius: 5px;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
