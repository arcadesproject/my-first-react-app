import Overview from './components/Overview'
import React, { Component } from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      task: '',
      tasks: [],
    }
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: '',
    })
  }

  handleRemove = (e) => {
    const { id } = e.target
    const newTasksList = this.state.tasks
    newTasksList.splice((id-1), 1)
    this.setState({
      tasks: newTasksList
    })
  }

  render() {
    const { tasks, task } = this.state
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            onChange={this.handleChange}
            value={task}
            type="text"
          />
        </form>
        <Overview tasks={tasks} handleRemove={this.handleRemove}/>
      </div>
    )
  }
}

export default App;
