import React, { useState } from "react";
import background from "../../img/fondo.png";

//include images into your bundle
//create your first component

const Home = () => {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setList([{text: task, done: false}, ...list]);
      setTask("");
    } else {
      alert("Task cannot be empty");
    }
  };

  const handleDelete = (index) => {
    setList((prevList) => prevList.filter((_, i) => i !== index));
  };

  const handleDone = (ind) =>{
		setList((prevList) => prevList.map((e, i) => i === ind ? {...e, done: !e.done} : e))
	}

  return (
    <div className="container-fluid">
     
      <h1 className="myTitle pt-5 pb-1">To do:</h1>
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
                <div className={el.done? 'taskDone myTasks' : 'myTasks'} key={i}>
                  {el.text}
                  <div>
                  <span
                    className="fa-solid fa-check done"
                    onClick={()=> handleDone(i)}
                  ></span>
                  <span
                    className="fa-solid fa-xmark delete"
                    onClick={() => handleDelete(i)}
                  ></span>
                  </div>
                </div>
              ))
            ) : (
              <div className="noTasks">All done!</div>
            )}
          </ul>
          <div className="leftTasks">
            <p>{list.filter((task) => !task.done).length > 0
              ? list.filter((task) => !task.done).length > 1
                ? `${list.filter((task) => !task.done).length} tasks to do!!`
                : `${list.filter((task) => !task.done).length} task to do`
              : "No tasks!"}</p>
          </div>
        </div>
      </div> 
      <div className="bg"><img src={background} alt="" />
      <div className="circle"></div></div>
    </div>
  );
};

export default Home;
