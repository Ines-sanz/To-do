import React, { useState } from "react";

//include images into your bundle
//create your first component

const Home = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setList([task, ...list]);
      setTask("");
    } else {
      alert("Task cannot be empty");
    }
  };

  const handleDelete = (index) => {
    setList((prevList) => prevList.filter((_, i) => i !== index));
  };

  console.log(task);
  console.log("-------->", list);
  return (
    <div className="container-fluid">
      <h1 className="myTitle pt-5 pb-1">To do :</h1>
      <div className="d-flex justify-content-center">
        <div className="myContainer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={(e) => setTask((prev) => (prev = e.target.value))}
              value={task}
              className="myInput"
              placeholder="What needs to be done?"
            />
          </form>
          <ul>
            {list.length > 0 ? (
              list.map((el, i) => (
                <div className="myTasks" key={i}>
                  {el}
                  <span
                    className="fa-solid fa-xmark delete"
                    onClick={() => handleDelete(i)}
                  ></span>
                </div>
              ))
            ) : (
              <div className="noTasks">All done!</div>
            )}
          </ul>
          <div className="leftTasks">
            <p>{list.length > 0
              ? list.length > 1
                ? `${list.length} tasks to do!!`
                : `${list.length} task to do`
              : "No tasks!"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
