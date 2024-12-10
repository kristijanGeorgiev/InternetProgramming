type MyPromiseType<T> = Promise<T>;
function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched successfully!"), 2000);
  });
}

type FetchDataType = Awaited<ReturnType<typeof fetchData>>;

async function displayFetchedData(): Promise<void> {
  const data: FetchDataType = await fetchData();
  console.log(data);
}

async function processValues(): Promise<void> {
  const value: Awaited<Promise<number>> = await new Promise((resolve) => resolve(42));
  console.log(`Processed value: ${value}`);
}

console.log("Fetching data...");
displayFetchedData();

console.log("\nProcessing values...");
processValues();
