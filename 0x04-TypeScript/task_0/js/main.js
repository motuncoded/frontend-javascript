// Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
var student1 = {
    firstName: "John",
    location: "New York"
};
var student2 = {
    firstName: "Jane",
    location: "Los Angeles"
};
var studentsList = [student1, student2];
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
var table = document.createElement("table");
var headerRow = document.createElement("tr");
headerRow.innerHTML = "<th>First Name</th><th>Last Name</th><th>Age</th><th>Location</th>";
table.appendChild(headerRow);
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    row.innerHTML = "<td>".concat(student.firstName, "</td><td>").concat(student.location, "</td>");
    table.appendChild(row);
});
document.body.appendChild(table);



