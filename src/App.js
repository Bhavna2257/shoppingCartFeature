import "./App.css";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import { Component } from "react";

class App extends Component {
  state = {
    items: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleAddItem = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].value++;
    this.setState({ items });
  };
  handleRemoveItem = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].value--;
    this.setState({ items });
  };
  handleReset = () => {
    const items = this.state.items.map((i) => {
      i.value = 0;
      return i;
    });
    this.setState({ items });
  };
  handleDelete = (itemId) => {
    //console.log("event handler called", itemId);
    const items = this.state.items.filter((i) => i.id !== itemId);
    this.setState({ items });
  };
  render() {
    return (
      <div className="App">
        <Navbar
          totalItems={this.state.items.filter((i) => i.value > 0).length}
        />
        <Cart
          items={this.state.items}
          onReset={this.handleReset}
          OnAddItem={this.handleAddItem}
          onRemoveItem={this.handleRemoveItem}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}
export default App;
