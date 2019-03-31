// Ad generator for Google Ads for prodcuts ( for services additional fork should be created)

// SUBMIT BUTTON !
var submit = document.getElementById("submit-btn")
submit.addEventListener("click", function (e) {
    e.defaultPrevented;

    // Capturing user's values when button is pressed

    var captureCompany = document.getElementById("company-name");
    var captureProduct = document.getElementById("product-name");
    var captureKeywords = document.getElementById("keywords-name");
    var captureFinalUrl = document.getElementById("final-url");


    // Base: 

    keyWords = {

        companyName: captureCompany.value,

        keyword: captureKeywords.value,

        product: captureProduct.value,

        finalUrl: captureFinalUrl.value,
    }


    createTableRow()
    builtHeadlines();
    builtDescriptions();
    builtPathsAndUrls();

}

)

// addional features 

location: "x";

// triggered components --- 1 or 0

var discounts = document.getElementById("trigger-discounts").value
// var discountPercent = document.getElementById("discount-number").value
var buy1Get2 = 1 
var delivery = document.getElementById("trigger-delivery").value
var ecoFriendly = document.getElementById("trigger-eco-friendly").value
var catalogue = document.getElementById("trigger-catalogue").value



// method



var featureComponents = [

]

// Making Headline

// 1

// everything in the if () statement for checking length

function builtHeadlines() {

    var hlOptions = [
        "Buy " + keyWords.product + " online",

        "Online catalogue" + keyWords.product,

        "Buy " + keyWords.product + "from " + keyWords.companyName,
    ]

    for (i = 0; i < hlOptions.length; i++) {
        console.log(hlOptions[i]);
    }

    // Selection the needed lines by class
    var hlImport = document.getElementsByClassName("hd");



    // pushing the needed strings in the table  -- (selecting all empty space in the table by selector and replace it with strings)
    for (i = 0; i < hlOptions.length; i++) {
        hlImport[i].innerHTML = hlOptions[i];
    }


}



// Combain Descriptions - also checking itriggered componetns and adding themon the fly - need to add other triggers //

function builtDescriptions() {

    var descrOptions = [

        "Best quality " + keyWords.product + " suitable for everyone. Make your order right now!",
        "Quality " + keyWords.product + " for most demanding people. Dont wait and order right now!",
    ]

    if (ecoFriendly == "on") {
        descrOptions.push("Eco-friendly " + keyWords.product + " for you and your family. Order now!");
    }

    if (catalogue == "on") {
        descrOptions.push("Full catalogue of " + keyWords.product + " Choose you favorite and order now");
    }

    if (delivery == "on") {
        descrOptions.push("Fast and secure delivery. Make your order and get your " + keyWords.product + " right to your home");
    }

    if (buy1Get2 == "on") {
        descrOptions.push("Famous buy 1 get 2 " + keyWords.product + " without any additional costs. Hurry up and place an order!");
    }

    // if (discounts == "on") {
//     discounts = discountPercent; // number have to be provide by user
//     featureComponents.push("Up to " + discounts + "% off.");
// }


    // Selection the needed lines by class
    var descrImport = document.getElementsByClassName("descr");

    // pushing the needed strings in the table  -- (selecting all empty space in the table by selector and replace it with strings)
    for (i = 0; i < descrOptions.length; i++) {
        descrImport[i].innerHTML = descrOptions[i];
    }


}

// createing new line in table that is needed.

function builtPathsAndUrls() {

    var finalUrls = document.getElementsByClassName("final-url");

    for (i = 0; i < numberAdsTake.value; i++ ) {
    finalUrls[i].textContent = keyWords.finalUrl;
    }

    var paths1 = document.getElementsByClassName("path1");
    console.log(paths1)

    for (i = 0; i < numberAds.value; i++ ) {
    paths1[i].innerHTML = keyWords.product;
    }

    var paths2 = document.getElementsByClassName("path2");

    for (i = 0; i < numberAds.value; i++ ) {
    paths2[i].innerHTML = keyWords.companyName;
    }
}

var numberAdsTake = document.getElementById("numberAds")

function createTableRow() {


    //capturing number of ads
    
    var numberAds = numberAdsTake.value;


    var rw = document.getElementsByTagName("tr").length
    console.log(rw)

    for (rw; rw <= numberAds; rw++) { 

    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell4 = row.insertCell(3);
    cell5 = row.insertCell(4);
    cell6 = row.insertCell(5);
    cell7 = row.insertCell(6);
    cell8 = row.insertCell(7);
    cell9 = row.insertCell(8);
    cell10 = row.insertCell(9);
    cell11 = row.insertCell(10);

    cell7.setAttribute("class","descr")
    cell8.setAttribute("class","descr")
    cell9.setAttribute("class","path1")
    cell10.setAttribute("class","path2")
    cell11.setAttribute("class","final-url")
    

    }
}




