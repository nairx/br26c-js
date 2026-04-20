const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("Data Recieved!");
      reject("Some Error");
    }, 2000);
  });
};
async function getData() {
  try {
    console.log("Start");
    const result = await fetchData();
    console.log(result);
    console.log("End");
  } catch (err) {
    console.log(err)
  }
}
getData();
