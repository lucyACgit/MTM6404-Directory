//1

function list(clients) {
  return clients
    .map(
      (client, index) => `
      <li class="list-group-item d-flex justify-content-between" data-index="${index}">
        ${client.name}
        <strong>$${client.balance}</strong>
      </li>
    `,
    )
    .join("");
}

// Create an order function. It will take two arguments (an array of clients, a string of a property in the client object) and return an array of clients sorted by a specified property. The sort() method with an arrow function should be used.

//2
function order(clients, property) {
  return clients.sort((a, b) => a[property] - b[property]);
}

// Create an total function. It will take one argument (an array of clients) and return a number. The number will be total sum of the balances from every client. The reduce() method with an arrow function should be used.

//3
function total(clients) {
  return clients.reduce((total, client) => {
    return total + client.balance;
  }, 0);
}

// Create an info function. It will take one argument (a number matching the index of the desired client) and return an object containing the desired clients information. The find() method with an arrow function should be used.

//4
function info(index) {
  return clients.find((client, i) => i === index);
}

// Create an search function. It will take one argument (a string containing the search query) and return an array of clients that includes the query in their name. The filter() method with an arrow function should be used. Hint: To avoid issues with case, use toLowerCase() on the query and client's name.

//5
function search(query) {
  return clients.filter((client) =>
    client.name.toLowerCase().includes(query.toLowerCase()),
  );
}
