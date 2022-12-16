


  let counter = Number(localStorage.getItem("counter")) || 0;

  function getCounter() {
    return counter;
  }
  
  function setCounter(num) {
    counter += num;
    localStorage.setItem("counter", counter);
    return;
  }
  