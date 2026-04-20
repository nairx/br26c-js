const fetchData = (flag) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flag) resolve("Data Recieved");
      else reject("Data Error");
    }, 2000);
  });
};
async function getData() {
  try {
    console.log("Start");
    const result = await fetchData(true);
    console.log(result);
    console.log("End");
  } catch (err) {
    console.log(err);
  }
}


// fetchData()
//   .then((data) => {
//     console.log("Start");
//     console.log(data);
//     console.log("End");
//   })
//   .catch((err) => console.log(err));



getData();
