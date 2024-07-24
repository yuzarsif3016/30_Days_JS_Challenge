// Example URL (invalid or incorrect)
const invalidUrl = 'https://api.invalid-url-example.com/data';

// Asynchronous function to fetch data
async function fetchData() {
  try {
    const response = await fetch(invalidUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Data fetched successfully:', data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error.message);
  }
}

// Call the asynchronous function
fetchData();