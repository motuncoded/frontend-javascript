// Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)

// Create two students, and create an array named studentsList containing the two variables
interface Student {
    firstName: string;
    location: string;
}

const student1: Student = {
    firstName: "John",
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];


// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
const table = document.createElement("table");
const headerRow = document.createElement("tr");
headerRow.innerHTML = "<th>First Name</th><th>Location</th>";
table.appendChild(headerRow);

studentsList.forEach(student => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
    table.appendChild(row);
});

document.body.appendChild(table);