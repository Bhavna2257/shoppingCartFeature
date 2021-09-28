import { Component } from "react";
import "./cart.css";
import Item from "./item";
class Cart extends Component {
  render() {
    return (
      <div className="cart-outer">
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.items.map((items) => (
          <Item
            key={items.id}
            onDelete={this.props.onDelete}
            OnAddItem={this.props.OnAddItem}
            onRemoveItem={this.props.onRemoveItem}
            // value={items.value}
            // id={items.id}
            items={items}
          />
        ))}
      </div>
    );
  }
}

export default Cart;
