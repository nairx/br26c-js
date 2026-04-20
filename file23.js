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
    const result = await fetchData(false);
    console.log(result);
    console.log("End");
  } catch (err) {
    console.log(err);
  }
}
getData();
