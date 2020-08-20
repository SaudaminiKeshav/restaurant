const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");

const render = customers => {
  const html = [];

  customers.array.forEach(customer => {
    if (customer.getStatus() === "Reserved") {
      html.push(customer
        .filter(customer => employee.getRole() === "Reserved")
        .map(manager => renderManager(manager))
      );
      return renderReserved();
    }
  });
  
  html.push(customers
    .filter(customer =>
       customer.getStatus() === "Reserved")
    .map(reserved => renderReserved(reserved))
  );
  html.push(customers
    .filter(customer => customer.getStatus() === "Waiting")
    .map(waiting => renderWaiting(waiting))
  );

  return renderMain(html.join(""));
};

const renderReserved = customer => {
  let template = fs.readFileSync(path.resolve(templatesDir, "customer.html"), "utf8");
  
  template = replacePlaceholders(template, "name", customer.getName());
  template = replacePlaceholders(template, "phone", customer.getPhone());
  template = replacePlaceholders(template, "email", customer.getEmail());
  template = replacePlaceholders(template, "id", customer.getId());
  template = replacePlaceholders(template, "status", customer.getStatus());
  return template;
};

const renderWaiting = customer => {
  let template = fs.readFileSync(path.resolve(templatesDir, "customer.html"), "utf8");
  template = replacePlaceholders(template, "name", customer.getName());
  template = replacePlaceholders(template, "phone", customer.getPhone());
  template = replacePlaceholders(template, "email", customer.getEmail());
  template = replacePlaceholders(template, "id", customer.getId());
  template = replacePlaceholders(template, "status", customer.getStatus());
  return template;
};

const renderMain = html => {
const template = fs.readFileSync(path.resolve(templatesDir, "reserve-view.html"), "utf8");

return replacePlaceholders(template, "team", html);
};

const renderMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "reserve-view.html"), "utf8");
  return replacePlaceholders(template, "team", html);
  };

const replacePlaceholders = (template, placeholder, value) => {
const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
return template.replace(pattern, value);
};


module.exports = render;
