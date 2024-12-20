let orignalString = "I love my country pakistan.<br> I like my city Faisalabad.<br> I love my Homeland." 
let cities = ["Faisalabad","Lahore","Karachi","Islamabad","Burewala","Multan","Kashmir"]
function convertToLowerCase(){
    document.getElementById("output").innerHTML = "";
    document.getElementById("input").innerHTML = "";
    let lowerCase1 = orignalString.toLowerCase();
    document.getElementById("output").innerHTML = lowerCase1;
}
function convertToUpperaCase(){
    document.getElementById("output").innerHTML = "";
    document.getElementById("input").innerHTML = "";
    let upperCase1 = orignalString.toUpperCase();
    document.getElementById("output").innerHTML = upperCase1;
}
function convertToCapitalize(){
    document.getElementById("output").innerHTML = "";
    document.getElementById("input").innerHTML = "";
    let capitalizeString = '<span style ="text-transform:capitalize;"> ' + orignalString + "</span>" ;
    document.getElementById("output").innerHTML = capitalizeString
}

function betterFormatting(){
    document.getElementById("output").innerHTML = "";
    let text = document.getElementById("input").value;
    if ( !text ){
        alert("Please Enter Text")
        return
    }
    text = text.toLowerCase()
    document.getElementById("output").style.textTransform ="capitalize" ;
    document.getElementById("output").innerHTML = text;
}

function printAllCities(){
    document.getElementById("output").innerHTML = "";
for (let i = 0; i < cities.length; i++) {
    let num = i + 1;
    document.getElementById("output").innerHTML += num + ")" + cities[i] + "<br>"
    
}
   

}
function addYourCityInList() {
    document.getElementById("output").innerHTML = "";
    let city = document.getElementById("input").value;
    
    if (!city) {
        alert("Please Enter Your city");
        return;
    }
    
    let cityFirstWord = city.slice(0, 1).toUpperCase();
    let cityNextWords = city.slice(1).toLowerCase();
    let fullCity = cityFirstWord + cityNextWords;
    let cityFound = false;

    for (let i = 0; i < cities.length; i++) {
        if (fullCity === cities[i]) {
            cityFound = true;
            let html = "<span style='color: red; font-size: 20px;'>" + fullCity + "</span> is already exists in this list.";
            document.getElementById("output").innerHTML = html;
            break; // Exit the loop if the city is found
        }
    }

    if (!cityFound) { // Use '!' to check if cityFound is false
        cities.push(fullCity);
        let html = "<span style='color: green; font-size: 20px;'>" + fullCity + "</span>  has been successfully added to the list &#10084;&#65039;.";
        document.getElementById("output").innerHTML = html;
    }
}
function checkYourCityInList() {
    document.getElementById("output").innerHTML = "";
    let city = document.getElementById("input").value;
    
    if (!city) {
        alert("Please Enter Your city");
        return;
    }
    
    let cityFirstWord = city.charAt(0).toUpperCase();
    let cityNextWords = city.slice(1).toLowerCase();
    let fullCity = cityFirstWord + cityNextWords;
    let cityFound = false;

    for (let i = 0; i < cities.length; i++) {
        if (fullCity === cities[i]) {
            cityFound = true;
            let html = "<span style='color: red; font-size: 20px;'>" + fullCity + "</span> is available in thsi list &#128512;";
            document.getElementById("output").innerHTML = html;
            break; // Exit the loop if the city is found
        }
    }

    if (!cityFound) { // Use '!' to check if cityFound is false
        let html = "<span style='color: green; font-size: 20px;'>" + fullCity + "</span>  is not available in list &#128542 Please click on add city button to add city.";
        document.getElementById("output").innerHTML = html;
    }
}
function findThisWord() {
    document.getElementById("output").innerHTML = "";
    let word = document.getElementById("input").value;
    
    if (!word) {
        alert("Please Enter word");
        return;
    }
     let wordLower = word.toLowerCase()
     let orignalStringLower = orignalString.toLocaleLowerCase()
     let findWord = orignalStringLower.indexOf(wordLower)

   
    if (findWord!= -1) { // Use '!' to check if cityFound is false
        let html = "<span style='color: green; font-size: 20px;'>" + wordLower + "</span>  is  available in String &#128525 at " + findWord + "index";
        document.getElementById("output").innerHTML = html;
    }
    else {let html = "<span style='color: green; font-size: 20px;'>" + wordLower + "</span>  is not available in String &#128542 .";
        document.getElementById("output").innerHTML = html;

    }
}
function replaceThisWord(){
    document.getElementById("output").innerHTML = "";
    let word = document.getElementById("input").value;
    
    if (!word) {
        alert("Please Type a word for replacing");
        return;
    }
    let replcewith = prompt("Please Enter word which you want to replace with " + word + ";")
    if (!replcewith) {
        alert("Please enter word")
        return  
    }
     let wordLower = word.toLowerCase()
     let orignalStringLower = orignalString.toLowerCase()
     let replcewithLower = replcewith.toLowerCase()
     wordLower = new RegExp(wordLower,"g");
     let thereplacrword = orignalStringLower.replace(wordLower,replcewithLower);
     document.getElementById("output").innerHTML = thereplacrword


}

const clearInput = () => {
    document.getElementById("input").value = ""; // Clear the input field
}

const getInputValue = () => {
    return document.getElementById("input").value; // Return the current value of the input field
}
function clearOutput(){
    document.getElementById("output").innerHTML = "";
}