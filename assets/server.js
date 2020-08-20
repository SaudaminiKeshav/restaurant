// Dependencies
class Customer {
    constructor(name, phone, email, id) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.id = id;
    }

    getName() {
        console.log("Name:", this.name);
        return this.name;
    }
    getId() {
        console.log("ID:", this.id);
        return this.id;
    }
    getPhone() {
        console.log("Phone number:", this.phone);
        return this.phone;
    }
    getEmail() {
        console.log("Email:", this.email);
        return this.email;
    }
    getStatus() {
        console.log("Status:", this.status);
        return this.status;
    }
}

var customers = [];
var custName = document.querySelector("#reserve-name");
var custPhone = document.querySelector("#reserve-phone");
var custEmail = document.querySelector("#reserve-email");
var custStatus = document.querySelector("#reserve-status");
var custID = document.querySelector("#reserve-id");

document.querySelector("#reserve-submit").addEventListener("click", function(event){
    event.preventDefault();
    const customer = new Customer(custName.value, custPhone.value, custEmail.value, custID.value);
    customers.push(customer);
    console.log(customer)
    localStorage.setItem("customer data", JSON.stringify(customer));
});


// app.get("/home", function(req, res) {
//     res.sendFile(path.join(__dirname, "home.html"));
//   });
//   app.get("/reserve-form", function(req, res) {
//     res.sendFile(path.join(__dirname, "reserve-form.html"));
//   });
//   app.get("/reserve-view", function(req, res) {
//     res.sendFile(path.join(__dirname, "reserve-view.html"));
//   });
//   // Displays all characters
//   app.get("/api/customers", function(req, res) {
//     return res.json(clients);
//   });
//   // Displays a single character, or returns false
//   app.get("/api/customers/:customer", function(req, res) {
//     var chosen = req.params.customer;
//     console.log(chosen);
//     for (var i = 0; i < customers.length; i++) {
//       if (chosen === customers[i].routeName) {
//         return res.json(customers[i]);
//       }
//     }
//     return res.json(false);
//   });