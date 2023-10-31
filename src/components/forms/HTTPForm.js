import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";

const Container = styled.div`
  padding: 2rem;
`;

const BContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
`;

const Form = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-top: 0.5rem;
`;

const Cancel = styled.button`
  width: 5rem;
  padding: 0.5rem 1rem;
  background: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-right: 1rem;
`;

const Save = styled.button`
  width: 5rem;
  padding: 0.5rem 1rem;
  background: blue;
  color: white;
  border-radius: 5px;
  border: none;
`;

export default function HTTPForm({ onSubmit }) {
  const [input, setInput] = useState({ url: "" });
  const { handleMenu } = useContext(AppContext);

  function handleChange(event) {
    setInput({
      url: event.target.value,
    });
  }

  function handleClose() {
    handleMenu();
  }

  return (
    <Container>
      <h3>Sandbox URL</h3>
      <Form onSubmit={onSubmit(input)}>
        <label htmlFor="sandboxUrl">URL</label>
        <Input
          value={input.url}
          onChange={handleChange}
          id="sandboxUrl"
          type="text"
          placeholder="https://"
        />
        <BContainer>
          <Cancel onClick={handleClose} type="button">
            cancel
          </Cancel>
          <Save type="submit">save</Save>
        </BContainer>
      </Form>
    </Container>
  );
}
