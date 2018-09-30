import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    console.log('Props :: ', props.NavbarItens)
    this.state = {
      name : "initalstate",
      name1 : "Sonia Linda",
      name2 : "Vitor Lindo",
      isName1 : true,
      title : "Isto e a navbar",
      navItens : props.NavbarItens
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('Click happened ==');
    this.setState((state) => {
      this.state.isName1 = !this.state.isName1;
      return {name: state.isName1 ? state.name1 : state.name2};
    });
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="Navbar">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contacts</li>
        </ul>
        <h1> Isto titulo :  {this.state.name} </h1>
        <button onClick={this.handleClick}>Click Me Sónia</button>
      </div>
    );
  }
}

export default Navbar;
