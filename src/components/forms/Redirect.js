import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import {
  BContainer,
  Cancel,
  Container,
  Form,
  Input,
  Save,
} from "../../Utils/styled";

export default function Redirect({ onSubmit }) {
  const [input, setInput] = useState({ url: "" });
  const { handleMenu } = useContext(AppContext);

  function handleChange(event) {
    setInput({
      url: event.target.value,
    });
  }

  function handleOnClose() {
    handleMenu();
  }

  return (
    <Container>
      <h3>Redirect URL</h3>
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
          <Cancel onClick={handleOnClose} type="button">
            cancel
          </Cancel>
          <Save type="submit">save</Save>
        </BContainer>
      </Form>
    </Container>
  );
}
