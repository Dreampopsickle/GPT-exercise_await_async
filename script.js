async function fetchData() {
    const display = document.getElementById('fetched-data');
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
        display.innerHTML = `
            <div><strong>User ID:</strong> ${data.userId}</div>
            <div><strong>ID:</strong> ${data.id}</div>
            <div><strong>Title:</strong> ${data.title}</div>
            <div><strong>Completed:</strong> ${data.completed ? 'Yes' : 'No'}</div>`
            ;
    } catch (error) {
        console.error('Error fetching data:', error);
        display.textContent = `Error fetching data: ${error.message}`
    };
}

const button = document.getElementById('fetch-button');
button.addEventListener('click', fetchData);