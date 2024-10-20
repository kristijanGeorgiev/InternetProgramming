async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  }
  
  const obj = { a: 1, b: 2, c: 3 };
  console.log(Object.entries(obj));  // [['a', 1], ['b', 2], ['c', 3]]  