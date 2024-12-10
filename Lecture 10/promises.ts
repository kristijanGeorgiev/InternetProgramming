function fetchUserData(userId: number): Promise<{ id: number; name: string }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId === 1) {
          resolve({ id: userId, name: "John Doe" });
        } else {
          reject(new Error("User not found"));
        }
      }, 2000);
    });
  }
  function displayUserData(userId: number): void {
    fetchUserData(userId)
      .then((user) => {
        console.log(`User found: ${user.name}`);
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
      });
  }
  
  async function displayUserDataAsync(userId: number): Promise<void> {
    try {
      const user = await fetchUserData(userId);
      console.log(`User found: ${user.name}`);
    } catch (error) {
      console.error(`Error: ${(error as Error).message}`);
    }
  }
  
  console.log("Using .then() and .catch():");
  displayUserData(1);
  displayUserData(2);
  
  console.log("\nUsing async/await:");
  displayUserDataAsync(1);
  displayUserDataAsync(2);
  