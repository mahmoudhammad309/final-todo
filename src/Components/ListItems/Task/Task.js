import React, { Component } from "react";

class Task extends Component {
  state = { isEditing: false, currentValue: '' };

  componentDidMount() {
    this.setState({currentValue: this.props.value});
    console.log(document.querySelector('.new-task'));
  }

  handleChange = (event) => {
    this.setState({currentValue: event.target.value})
  }
  render() {
    return (
      <div className="taskSec" >
        {this.state.isEditing ? (
          <>
          <div className="new-task">
            <input type="text" value={this.state.currentValue} onChange={this.handleChange} />
          </div>
          <div className="btn-sec">
              <button
                className="edit-btn"
                onClick={() => {
                  this.props.handleEditTask(this.state.currentValue, this.props.id);
                  this.setState({isEditing: false})
                }}
              >
                Save
              </button>
              <button
                className="del-btn"
                onClick={() => this.setState({ isEditing: false, currentValue: this.props.value })}
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="new-task">
              <input type="checkbox" />
              <p>{this.props.value}</p>
            </div>
            <div className="btn-sec">
              <button
                className="del-btn"
                onClick={() => this.props.handleDeleteBtn()}
              >
                Del
              </button>
              <button
                className="edit-btn"
                onClick={() => this.setState({ isEditing: true })}
              >
                Edit
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Task;
