import React, { Component } from "react";
import Task from "../../Components/ListItems/Task/Task";
class ListItems extends Component {

  render() {
    const getTasksFromLocalSt = JSON.parse(localStorage.getItem("tasksItems")) || [];
    
    return  (
      
      getTasksFromLocalSt.map((task, index) => (
      <Task id={task.id} value={task.task} isChecked={task.isChecked} handleDeleteBtn={() => {
        this.props.handleDeleteBtn(task.id)
      }} handleEditTask={this.props.handleEditTask}/>
    ))
    
    );
  }
}

export default ListItems;
