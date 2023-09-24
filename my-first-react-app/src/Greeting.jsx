// function Greeting() {
//   return (
//     <div>
//       <h1>&quot;How r u baby&quot;</h1>
//       <h2>GoodMorning</h2>;
//       <img src="../img/pic.gif" alt="" />
//     </div>
//   );
// }

// export function Cranberry() {
//   return <h3>Have a day!!</h3>;
// }

// Cranberry();

// export default Greeting;

function ListItem(props) {
  return <li>{props.animal}</li>;
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}

function Greeting() {
  const animals = ['Lion', 'Cow', 'Snake', 'Lizard'];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}

export default Greeting;
