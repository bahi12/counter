import React, { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  const restart =() =>{
    setCount(0);
  }

  const handleStepChange = (event) => {
    const selectedValue = parseInt(event.target.value, 10);
  
    if (!isNaN(selectedValue)) {
      // If a numeric value is selected, set the step to that value
      setStep(selectedValue);
    } else {
      // If the current count is selected, set the step to the current count
      setStep(count);
    }
  };

  useEffect(()=> {
    // Update the dropdown option when count changes
    setStep(count);
  }, [count]);

  return (
    <div className="container m-5 p-1 bg-warning">
      <h1 className="display-4">Counter App</h1>
      <div className=" bg-white">
      <p className="lead p-2">Count: {count}</p>

      <div className="input-group mb-3 p-2">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="stepDropdown">
            Step:
          </label>
        </div>
        <select
          className="custom-select"
          id="stepDropdown"
          onChange={handleStepChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="5">5</option>
          <option value={count}>{count}</option>
        </select>
      </div>

      <div className="row p-3">
        <div className="col">
          <button className="btn btn-success btn-block" onClick={increment}>
            Increment
          </button>

          <button className="btn btn-secondary btn-block" onClick={restart}>
            Restart
          </button>

          <button className="btn btn-danger btn-block" onClick={decrement}>
            Decrement
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Counter;