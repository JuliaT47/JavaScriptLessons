import { Component } from "react";

class MyClassComponent extends Component {
  state = {
    todos: [],
    input: "",
    timer: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, [1000]);

    const lsTodos = localStorage.getItem("todos");
    if (lsTodos) {
      this.setState({ todos: JSON.parse(lsTodos) });
    }
  } // if statement to stop componentDidMount from mounting null expressions
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      console.log("componentDidUpdate");
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  addTask = () => {
    this.setState({ todos: [...this.state.todos, this.state.input] });
    this.setState({ input: "" });
  };
  onChangeHandler = (e) => {
    const value = e.target.value;
    this.setState({ input: value });
  };
  // methods in class components do not use const
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <>
        <h2>{this.state.timer}</h2>
        <input value={this.state.input} onChange={this.onChangeHandler} />
        <button onClick={this.addTask}>Add task</button>
        {this.state.todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
      </>
    );
  }
}

export default MyClassComponent;
