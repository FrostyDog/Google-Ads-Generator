// Ad generator for Google Ads 

// triggered components --- 1 or 0




var discounts 

var buy1Get2

var Delivery // fast or free

var ecoFriendly = 1;

var catalogue = 1; // or single product

// method

if (discounts == true) {

}


// Base: 

var keyWords = {

companyName: "name",

keyword: "x",

product: "x",

}

// features 



// Making Headline

// 1

// everything in the if () statement for checking length

function builtHeadline() {

    var hlOptions = ["Buy " + keyWords.product + " online",

    "Online catalogue" + keyWords.product,

    "Buy " + keyWords.product + "from " + keyWords.companyName]

    for (i = 0; i < hlOptions.length; i++) {
        // console.log (hlOptions[i]);
    }

}

builtHeadline()


// Combain Descriptions

function builtDescription(){

    var descrOptions = [

    "Best quality " + keyWords.product + " suitable for everyone. Make your order right now!",
]

    if (ecoFriendly == true) {

       descrOptions.push( "Eco-friendly " + keyWords.product + " for you and your family. Order now!" );
    }

    if (catalogue == true) {
        descrOptions.push("Full catalogue of " + keyWords.product + " Choose you favorite and order now");
    }

    for (i = 0; i < descrOptions.length; i++) {
        console.log (descrOptions[i]);
    }

   

}

builtDescription();