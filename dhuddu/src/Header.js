


function Header(props) {

  const backstyle ={BackgroundColor : "Green"}
  return (
    <header style = {backstyle}>
      <h1 > {props.title} </h1>

    </header>
  );
}


Header.defaultProps = {                // default to be set
      title : "List of todo"

}  

export default Header