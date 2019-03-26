// Ad generator for Google Ads for prodcuts ( for services additional fork should be created)


var submit = document.getElementById("submit-btn")

submit.addEventListener("click", function (e) {
    e.defaultPrevented;

    // Capturing user's values when button is pressed

    var captureCompany = document.getElementById("company-name");
    var captureProduct = document.getElementById("product-name");
    var captureKeywords = document.getElementById("keywords-name");
    var captureFinalUrl = document.getElementById("final-url");

    console.log(captureProduct)

    // Base: 

    keyWords = {

        companyName: captureCompany.value,

        keyword: captureKeywords.value,

        product: captureProduct.value,

        finalUrl: captureFinalUrl.value,
    }


        builtHeadlines();
        builtDescriptions();

}

)





// addional features 

location: "x";



// triggered components --- 1 or 0

var discounts
var discountPercent
var buy1Get2
var delivery// fast or free
var ecoFriendly = 1;
var catalogue = 1;// or single product

// array of components for loop (которая выделяет нужное)

// var deferentiate= [
//     catalogue,
//     ecoFriendly,
//     delivery,
//     buy1Get2,
//     discounts,
// ] 

// loop (because of the fact that results have to defferent in every itteration - loop can not be used)

// for (i=0; i < deferentiate.length; i++) {
//     if (deferentiate[i] == true)
//         featureComponents.push(deferentiate[i])
// }

// method

if (discounts == true) {
    discounts = discountPercent; // number have to be provide by user
    featureComponents.push("Up to " + discounts + "% off." );
}

var featureComponents =[

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
     console.log (hlOptions[i]);
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

    if (ecoFriendly == true) {
        descrOptions.push("Eco-friendly " + keyWords.product + " for you and your family. Order now!");
    }

    if (catalogue == true) {
        descrOptions.push("Full catalogue of " + keyWords.product + " Choose you favorite and order now");
    }

    if (delivery == true) {
        descrOptions.push("Fast and secure delivery. Make your order and get your " + keyWords.product + " right to your home");
    }

    if (buy1Get2 == true) {
        descrOptions.push("Famous buy 1 get 2 " + keyWords.product + " without any additional costs. Hurry up and place an order!");
    }


    // for (i = 0; i < descrOptions.length; i++) {
    //     console.log (descrOptions[i]);
    // }

    // Selection the needed lines by class
    var descrImport = document.getElementsByClassName("descr");

    // pushing the needed strings in the table  -- (selecting all empty space in the table by selector and replace it with strings)
    for (i = 0; i < descrOptions.length; i++) {
        descrImport[i].innerHTML = descrOptions[i];
    }


}
