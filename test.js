// function Counter() {
//   const [count, setCount] = useState(0);

//   const increament = () => setCount(count + 1);
//   const decreament = () => setCount(count - 1);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increament}>+</button>
//       <button onClick={decreament}>-</button>
//     </div>
//   );
// }

// export default Counter

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewTask] = useState("");

  const Add = () => {
    setTasks([...tasks, { text: newtask, completed: false }]);
  };

  const toggleTask = () => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTasks);
  };

  return (
    <>
      <input value={newtask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={Add}>add</button>

      {tasks.map((task, index) => {
        <li key={index} onClick={() => toggleTask(index)}>
          {task.text}
        </li>;
      })}
    </>
  );
}
