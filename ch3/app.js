/*1. Declare a variable called age & assign to it your age. Show
your age in an alert box. */

var age;
age=23;
alert("I am "+ " " + age + "years old");

/*2. Declare & initialize a variable to keep track of how many
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You
have visited this site N times”*/

var counter;
counter=+prompt("Enter No of visits",);
alert("You have visited"+ " " + counter + "times");

/*Declare a variable called birthYear & assign to it your
birth year. Show the following message in your browser:*/

var birthYear = 1996;

document.writeln("My birth year is",birthYear);
document.writeln("<br> Datatype of declared variable is number");

/*4. A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables
the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to
order*/

var vname="Naveed"
var ptitle="T Shirts";
var quantity=5;

document.write( "<br>" + vname +" " +"ordered"+ " " +quantity+"  " +ptitle+" on XYZ Clothing store")
