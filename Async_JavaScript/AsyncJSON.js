// fecth customer data from JSON instead of txt file
document.getElementById('get-customer').addEventListener('click', loadCustomer);

document.getElementById('get-customers').addEventListener('click', loadCustomers);

// Load Customer
function loadCustomer(e) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customer.json', true);
  xhr.onload = function() {
    if (this.status === 200) {
      // through JSON parse we will have an object
      const customer = JSON.parse(this.responseText);
      const output = `
        <table class="u-full-width">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Company</th>
            <th>Membership</th>
          </tr>
        </thead>
        <tbody id="customer-list"></tbody>
          <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.age}</td>
            <td>${customer.company}</td>
            <td>${customer.membership}</td>
          </tr>
      </table>
      `;
      document.getElementById('customer').innerHTML = output;
    }
  }
  xhr.send();
}

// Load Customers
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customers.json', true);
  xhr.onload = function() {
    if (this.status === 200) {
      // through JSON parse we will have an object
      const customers = JSON.parse(this.responseText);
      let output = `
        <table class="u-full-width">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Company</th>
              <th>Membership</th>
            </tr>
          </thead>
          <tbody id="customer-list"></tbody>
        </table>
      `;
      document.getElementById('customers').innerHTML = output;
      const customerList = document.getElementById('customer-list');
      customers.forEach(function(customer) {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${customer.id}</td>
          <td>${customer.name}</td>
          <td>${customer.age}</td>
          <td>${customer.company}</td>
          <td>${customer.membership}</td>
        `;
        customerList.appendChild(row);
      })
    }
  }
  xhr.send();
}