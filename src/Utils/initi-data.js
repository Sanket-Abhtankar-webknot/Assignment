const initialData = {
  nodes: {
    node1: {
      id: "node1",
      inputs: {
        url: "",
      },
      content: "HTTP trigger",
    },
    node2: {
      id: "node2",
      inputs: {
        title: "",
        subtitle: "",
        logo: "",
        emailInput: "",
        placeholder: "",
        buttonText: "",
      },
      content: "Sign up Page",
    },
    node3: {
      id: "node3",
      inputs: {
        url: "",
      },
      content: "Redirect user",
    },
  },
  columns: {
    column1: {
      id: "column1",
      title: "Nodes canvas",
      taskIds: ["node1", "node2", "node3"],
    },
  },
  columnOrder: ["column1"],
};
export default initialData;
