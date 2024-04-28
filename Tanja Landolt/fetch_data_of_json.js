// data.js

// Function to fetch JSON data
async function fetchData() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// Export fetchData function to make it accessible from other files
export { fetchData };
