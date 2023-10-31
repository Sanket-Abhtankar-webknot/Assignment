import React, { useContext, useState } from "react";
import {
  BContainer,
  Cancel,
  Container,
  Form,
  Input,
  Label,
  Save,
} from "../../Utils/styled";
import { AppContext } from "../../App";

export default function SignupForm({ onSubmit }) {
  const { handleMenu } = useContext(AppContext);

  const [input, setInput] = useState({
    title: "",
    subtitle: "",
    logo: "",
    emailTitle: "",
    placeholder: "",
    buttonText: "",
  });

  function handleOnClose() {
    handleMenu();
  }

  function handleChange(event) {
    setInput((prevInput) => ({
      ...prevInput,
      [event.target.name]: event.target.value,
    }));
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileContent = event.target.result;
        setInput((prevState) => ({
          ...prevState,
          logo: fileContent,
        }));
      };
      reader.readAsText(file);
    }
  };

  return (
    <Container>
      <h3>Sandbox URL</h3>
      <Form onSubmit={onSubmit(input)}>
        <Label htmlFor="pageTitle">Page Title</Label>
        <Input
          value={input.title}
          onChange={handleChange}
          id="pageTitle"
          placeholder="page title"
          type="text"
          name="title"
        />
        <Label htmlFor="subtitle">URL</Label>
        <Input
          value={input.subtitle}
          onChange={handleChange}
          id="subtitle"
          placeholder="subheading"
          name="subtitle"
          type="text"
        />
        <Label htmlFor="">
          <span></span>
          <Input accept="image/*" type="file" onChange={handleFileChange} />
        </Label>
        <Label htmlFor="emailTitle">Email Input title</Label>
        <Input
          value={input.emailTitle}
          onChange={handleChange}
          id="emailTitle"
          name="emailTitle"
          placeholder="input title"
          type="text"
        />
        <Label htmlFor="placeholder">Email Input placeholder</Label>
        <Input
          value={input.placeholder}
          onChange={handleChange}
          id="placeholder"
          name="placeholder"
          type="text"
          placeholder="placeholder text"
        />
        <Label htmlFor="buttonText">Submit Button Text</Label>
        <Input
          value={input.buttonText}
          onChange={handleChange}
          id="buttonText"
          name="buttonText"
          placeholder="CTA Text"
          type="text"
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
