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

// function ListItem(props) {
//   return <li>{props.animal}</li>;
// }

// function List(props) {
//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return <ListItem key={animal} animal={animal} />;
//       })}
//     </ul>
//   );
// }

// function Greeting() {
//   const animals = ['Lion', 'Cow', 'Snake', 'Lizard'];

//   return (
//     <div>
//       <h1>Animals: </h1>
//       <List animals={animals} />
//     </div>
//   );
// }

// function List(props) {
//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return animal.startsWith('L') ? <li key={animal}>{animal}</li> : null;
//       })}
//     </ul>
//   );
// }

// function Greeting() {
//   const animals = ['Lion', 'Cow', 'Snake', 'Lizard'];

//   return (
//     <div>
//       <h1>Animals: </h1>
//       <List animals={animals} />
//     </div>
//   );
// }

function List(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function Greeting() {
  const animals = [''];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}

export default Greeting;
