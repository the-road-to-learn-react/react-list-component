import React from 'react';

const initialList = ['Learn React', 'Learn GraphQL'];

// const ListWithoutKey = () => {
//   const [list, setList] = React.useState(initialList);

//   const handleClick = event => {
//     setList(list.slice().reverse());
//   };

//   return (
//     <div>
//       <ul>
//         {list.map((item, index) => (
//           <li>
//             <label>
//               <input type="checkbox" />
//               {item}
//             </label>
//           </li>
//         ))}
//       </ul>

//       <button type="button" onClick={handleClick}>
//         Reverse List
//       </button>
//     </div>
//   );
// };

const ListWithUnstableIndex = () => {
  const [list, setList] = React.useState(initialList);

  const handleClick = event => {
    setList(list.slice().reverse());
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <label>
              <input type="checkbox" />
              {item}
            </label>
          </li>
        ))}
      </ul>

      <button type="button" onClick={handleClick}>
        Reverse List
      </button>
    </div>
  );
};

export default ListWithUnstableIndex;
