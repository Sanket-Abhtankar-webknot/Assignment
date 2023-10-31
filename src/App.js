import { createContext, useCallback, useMemo, useState } from "react";
import initialData from "./Utils/initi-data";
import { Canvas, ConfigMenu, Navbar } from "./components";
import { DragDropContext } from "react-beautiful-dnd";
import "./app.css";

export const AppContext = createContext(null);

function App() {
  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [nodeToConfig, setNodeToConfig] = useState(null);

  const handleUpdateData = useCallback((response) => {
    setData(response);
  }, []);
  const handleMenu = useCallback(() => setOpen((prevState) => !prevState), []);

  const handleConfig = useCallback((response) => {
    setNodeToConfig(response);
  }, []);

  const handleContext = useMemo(
    () => ({
      handleConfig,
      handleUpdateData,
      handleMenu,
      data,
      open,
    }),
    []
  );
  function handleOnDragEnd(result) {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = data.columns[source.droppableId];

    const newNodes = Array.from(column.taskIds);
    newNodes.splice(source.index, 1);
    newNodes.splice(destination.index, 0, draggableId);
    const newColumn = {
      ...column,
      taskIds: newNodes,
    };
    const newCanvas = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
      },
    };

    setData(newCanvas);
    // console.log(newCanvas);
  }

  return (
    <AppContext.Provider value={handleContext}>
      <Navbar />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {data.columnOrder.map((columnId) => {
          const canvas = data.columns[columnId];
          const nodes = canvas.taskIds.map((taskIds) => data.nodes[taskIds]);

          return <Canvas canvas={canvas} nodes={nodes} key={canvas.id} />;
        })}
      </DragDropContext>
      {open && <ConfigMenu node={nodeToConfig} />}
    </AppContext.Provider>
  );
}

export default App;
