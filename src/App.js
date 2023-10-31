import {
  createContext,
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import initialData from "./Utils/initi-data";
import { fabric } from "fabric";

import { Canvas, ConfigMenu, Navbar } from "./components";
import { DragDropContext } from "react-beautiful-dnd";
import "./app.css";

export const AppContext = createContext(null);

function App() {
  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [nodeToConfig, setNodeToConfig] = useState(null);
  // const [canvas, setCanvas] = useState("");

  // const initCanvas = () =>
  //   new fabric.Canvas("canvas", {
  //     height: 700,
  //     width: 1530,
  //     backgroundColor: "lightgray",
  //   });
  // useEffect(() => {
  //   setCanvas(initCanvas());
  // }, []);

  // const addRectangleWithClickEvent = () => {
  //   const rect = new fabric.Rect({
  //     left: 100,
  //     top: 100,
  //     fill: "red",
  //     width: 150,
  //     selectable: true,
  //     height: 80,
  //   });

  //   canvas.add(rect);

  //   rect.on("mousedown", () => {
  //     alert("Rectangle clicked!");
  //   });
  // };

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

  // useEffect(() => {
  //   if (canvas) {
  //     addRectangleWithClickEvent();
  //   }
  // }, [canvas]);

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
