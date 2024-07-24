// Example URL (invalid or incorrect)
const invalidUrl = 'https://api.invalid-url-example.com/data';

// Function to fetch data and handle errors
function fetchData() {
  fetch(invalidUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Data fetched successfully:', data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error.message);
    });
}

// Call the function to fetch data
fetchData();