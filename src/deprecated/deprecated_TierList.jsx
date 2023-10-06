export function TierList({ todoList }) {
  return (
    <>
      <h1 className='header'>Tier List</h1>
      <h3 className='tierS'>Tier S</h3>
      <ul className='listS'>
        {todoList[0].map(todo => {
          return (
            <li key={todo}>
              <label>
                {todo}
              </label>
            </li>
          );
        })}
      </ul>
      <h3 className='tierF'>Tier F</h3>
      <ul className='listF'>
        {todoList[1].map(todo => {
          return (
            <li key={todo}>
              <label>
                {todo}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}
