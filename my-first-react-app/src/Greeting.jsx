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

// function List(props) {
//   if (!props.animals) {
//     return <div>Loading...</div>;
//   }

//   if (props.animals.length === 0) {
//     return <div>There are no animals in the list!</div>;
//   }

//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return <li key={animal}>{animal}</li>;
//       })}
//     </ul>
//   );
// }

// function Greeting() {
//   const animals = [];

//   return (
//     <div>
//       <h1>Animals: </h1>
//       <List animals={animals} />
//     </div>
//   );
// }

// function Button(props) {
//   const buttonStyle = {
//     color: props.color,
//     fontSize: props.fontSize + 'px',
//   };

//   return <button style={buttonStyle}>{props.text}</button>;
// }

// function Greeting() {
//   return (
//     <div>
//       <Button text="Click Me!" color="blue" fontSize={12} />
//       <Button text="Don't Click Me!" color="red" fontSize={12} />
//       <Button text="Click Me!" color="blue" fontSize={20} />
//     </div>
//   );
// }

// function Button({
//   text = 'Click Me!',
//   color = 'blue',
//   fontSize = 12,
//   handleClick,
// }) {
//   const buttonStyle = {
//     color: color,
//     fontSize: fontSize + 'px',
//   };

//   return (
//     <button onClick={handleClick} style={buttonStyle}>
//       {text}
//     </button>
//   );
// }

// function Greeting() {
//   const handleButtonClick = () => {
//     window.location.href = 'http://www.google.com';
//   };

//   return (
//     <div>
//       <Button s={handleButtonClick} />
//     </div>
//   );
// }

// function Card({ children }) {
//   return (
//     <div className="card">
//       <div className="card-content">{children}</div>
//     </div>
//   );
// }

// function Greeting() {
//   return (
//     <div>
//       <Card>
//         <h1>Photo</h1>
//         <img
//           className="avatar"
//           src="https://i.imgur.com/OKS67lhm.jpg"
//           alt="Aklilu Lemma"
//           width={100}
//           height={100}
//         />
//       </Card>
//       <Card>
//         <h1>About</h1>
//         <p>
//           Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
//           natural treatment to schistosomiasis.
//         </p>
//       </Card>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import './App.css';

// const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

// function Greeting() {
//   const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
//   const [backgroundCount, setBackgroundCount] = useState(0);

//   const onButtonClick = (color) => () => {
//     setBackgroundColor(color);
//     setBackgroundCount(backgroundCount + 1);
//   };

//   return (
//     <div
//       className="App"
//       style={{
//         backgroundColor,
//       }}
//     >
//       {COLORS.map((color) => (
//         <button
//           type="button"
//           key={color}
//           onClick={onButtonClick(color)}
//           className={backgroundColor === color ? 'selected' : ''}
//         >
//           {color}
//         </button>
//       ))}
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import './App.css';

// function Greeting() {
//   const [person, setPerson] = useState({ name: 'John', age: 100 });

//   // BAD - Don't do this!
//   // const handleIncreaseAge = () => {
//   //   // mutating the current state object
//   //   person.age = person.age + 1;
//   //   setPerson(person);
//   // };

//   // GOOD - Do this!
//   const handleIncreaseAge = () => {
//     // copy the existing person object into a new object
//     // while updating the age property
//     const newPerson = { ...person, age: person.age + 1 };
//     setPerson(newPerson);
//   };

//   return (
//     <>
//       <h1>{person.name}</h1>
//       <h2>{person.age}</h2>
//       <button onClick={handleIncreaseAge}>Increase age</button>
//     </>
//   );
// }

import React, { useState } from 'react';
import './App.css';

function Greeting() {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About" isActive={true}>
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology" isActive={true}>
        The name comes from алма, the Kazakh word for "apple" and is often
        translated as "full of apples". In fact, the region surrounding Almaty
        is thought to be the ancestral home of the apple, and the wild Malus
        sieversii is considered a likely candidate for the ancestor of the
        modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({ title, children, isActive }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>Show</button>
      )}
    </section>
  );
}

export default Greeting;
