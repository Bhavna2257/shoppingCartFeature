import { Component } from "react";
class Item extends Component {
  render() {
    return (
      <div>
        <span className={this.formatBadge()}> {this.formatCount()} </span>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.props.OnAddItem(this.props.items)}
        >
          +
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.props.onRemoveItem(this.props.items)}
          disabled={this.props.items.value < 1}
        >
          -
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.items.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  formatBadge() {
    return this.props.items.value === 0
      ? "badge badge-warning m-2"
      : "badge badge-primary m-2";
  }
  formatCount() {
    const { value } = this.props.items;
    return value === 0 ? "zero" : value;
  }
}

export default Item;
