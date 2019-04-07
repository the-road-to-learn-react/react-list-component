import React from 'react';

// *Inlined List*

// const SimpleList = () => (
//   <ul>
//     {['a', 'b', 'c'].map(function(item) {
//       return <li key={item}>{item}</li>;
//     })}
//   </ul>
// );

// *Declared/Defined list for List*

// const list = ['a', 'b', 'c'];

// const SimpleList = () => (
//   <ul>
//     {list.map(function(item) {
//       return <li key={item}>{item}</li>;
//     })}
//   </ul>
// );

// *Arrow Function List with block body*

// const list = ['a', 'b', 'c'];

// const SimpleList = () => (
//   <ul>
//     {list.map(item => {
//       return <li key={item}>{item}</li>;
//     })}
//   </ul>
// );

// *Arrow Function List with concise body*

const list = ['a', 'b', 'c'];

const SimpleList = () => (
  <ul>
    {list.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export default SimpleList;
