var super_important = 0;
var names_of_the_students =[];
var name_of_the_student = "";
var abcd = "";
var i = 0;
var y = 0;
var m = 1;
z = 0;
s = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var abc = 0;
var f = 0;
var e = 0;
var  r = 0;
var g = 0;
var l = 0;
if(r >= 0) {
    r++;
}
function on() {
    z  = 1;
    localStorage.list = document.getElementById("list").innerHTML;
    e = 1;
    console.log(localStorage.list);
    localStorage.setItem('names_of_the_students_array', [JSON.stringify(names_of_the_students)]);
    console.log(localStorage.names_of_the_students_array);
    localStorage.abcd = abcd;
    localStorage.i = i;
    localStorage.names_of_the_students = name_of_the_student;
    localStorage.number_of_students = document.getElementById("h1").innerHTML;
    localStorage.c = c;
    localStorage.z = z;
    super_important++;
    console.log(super_important);
    document.getElementById("autoSave").innerHTML = "Autosae is on"
}
function off() {
    z  = 0;
    document.getElementById("autoSave").innerHTML = " Autosave is off ";
    console.log(z);
}
function submit() { 
    if(document.getElementById("input1").value == abcd){
        alert(" Error: There wasn't any input ");
    } 
    else{
    i++
    var newDiv = document.createElement("div");
    newDiv.innerHTML =  i + "." + document.getElementById("input1").value;
    document.getElementById("list").appendChild(newDiv);
    name_of_the_student = document.getElementById("input1").value;
    names_of_the_students.push(name_of_the_student);
    console.log(names_of_the_students);
    document.getElementById("input1").value = "";
    if(z == 1) {
        save();
    }
    if(z == 0) {
        a++;
        console.log(a);
    }
    document.getElementById("input1").innerHTML = "";
    document.getElementById("h1").innerHTML = " Number of components in the list " + " = " + i;
    console.log(i);
    document.getElementById("input1").innerHTML = "";
    }
}
function xyz() {
    document.getElementById(newDiv).removeChild(this);
}
function sort() {
    if(names_of_the_students == abcd) {
        alert("Error: There are no components in the database to sort alphabetically");
    }
    else{
    names_of_the_students.sort();
    document.getElementById("sortedlist").innerHTML =  names_of_the_students.join("<br>");
}
}
function save() {
    if(names_of_the_students == abcd) {
        alert("Error: There are no names in the database");
    }
    else{
    localStorage.list = document.getElementById("list").innerHTML;
    e = 1;
    console.log(localStorage.list);
    localStorage.setItem('names_of_the_students_array', [JSON.stringify(names_of_the_students)]);
    console.log(localStorage.names_of_the_students_array);
    localStorage.abcd = abcd;
    localStorage.i = i;
    localStorage.names_of_the_students = name_of_the_student;
    localStorage.number_of_students = document.getElementById("h1").innerHTML;
    localStorage.c = c;
    localStorage.z = z;
    super_important++;
    console.log(super_important);
}
}
function load() {
    document.getElementById("list").innerHTML = localStorage.list;
    names_of_the_students = JSON.parse(localStorage.getItem('names_of_the_students_array'));
    abcd = localStorage.abcd;
    i = localStorage.i;
    name_of_the_student = localStorage.names_of_the_students;
    console.log(i);
    console.log(abcd);
    console.log(names_of_the_students);
    console.log(name_of_the_student);
    document.getElementById("h1").innerHTML = localStorage.number_of_students;
    c = localStorage.c;
}
function search() {
    s = 0;
    length = names_of_the_students.length;
    input = document.getElementById("searchinput").value;
    found = 0;
    s++;
    console.log(s);
    if(input == abcd) {
        alert(" Error: There wasn't any input ");
        document.getElementById("searchresult").innerHTML = "";
    }
    for(j = 0; j < length; j++){
        if (input == names_of_the_students[j]) {
            found++;
            console.log(found);
            console.log(j);
        }
        if(found == 0) {
            document.getElementById("searchresult").innerHTML = " No search results found ";
        }
        else{
        document.getElementById("searchresult").innerHTML = found + " Search results found ";
    }
    }
}
