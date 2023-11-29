import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header>
      <h1>Med-Stock Manager</h1>
      <button onClick={props.onShowCart}>Cart</button>
    </header>
  );
};

export default Header;
