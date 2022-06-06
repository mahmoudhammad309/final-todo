import React, { Component } from "react";
import ListItems from "./Components/ListItems/ListItems";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskInput: "",
      tasksItems: [
      
      ],
      isEmptyString: false,
      isRecurring: false,
    };
  }

  handleChange = (typing) => {
    this.setState({ taskInput: typing.target.value, isRecurring: false  });
  };

  handleAddTask = (event) => {
    event.preventDefault();
    const { taskInput, tasksItems } = this.state;
    const tasksArr = [...tasksItems];
    const allTasksTitle = tasksItems.map((e) => e.task);
    if (taskInput !== "") {
      if (!allTasksTitle.includes(taskInput)) {

        tasksArr.push({
          id: tasksArr.length + 1,
          task: taskInput,
          isChecked: false
        });
      } else if (allTasksTitle.includes(taskInput)) {
        this.setState({ isRecurring: true })
      }
      this.setState({ isEmptyString: false });
    } else {
      // check if the input is empty or not
      this.setState({ isEmptyString: true });
    }

    this.setState({ tasksItems: tasksArr, taskInput: '' });
  };


  handleDeleteBtn = (index) => {
    const tasksItems = this.state.tasksItems.filter((element) => {
      return index !== element.id});
    this.setState({tasksItems})
  }

  handleEditTask = (newValue, id ) => {
    const newArr = this.state.tasksItems.map(task => {
      if(task.id === id) {
        task.task = newValue;
      }
      return task;
    })
    this.setState({tasksItems: newArr})
  } 

  
  renderWarningEmpty = () => {
    if (this.state.isEmptyString) {
      let warningBlankTxt = this.state.taskInput ? "hide" : "show";
      return (
        <span className={`alert ${warningBlankTxt}`}>
          You cannot enter empty value
        </span>
      );
    }
  };
  renderWarningRecurring = () => {
    if (this.state.isRecurring) {
      return <span className="alert">You cannot enter recurring value</span>;
    }
  };
  render() {

    return (
      <section className="container">
        <form className="head" onSubmit={this.handleAddTask}>
          <input
            type="text"
            placeholder="Add item ..."
            onChange={this.handleChange}
            value={this.state.taskInput}
          />
          <button className="addBtn"> Add </button>
        </form>
        {this.renderWarningEmpty()}
        {this.renderWarningRecurring()}

        {this.state.tasksItems.length === 0 &&
          "There is nothing to do today :("}
        <ListItems tasksItems={this.state.tasksItems} handleEditTask={this.handleEditTask} handleDeleteBtn={this.handleDeleteBtn}/> 
      </section>
    );
  }
}

export default App;
