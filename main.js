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

    locationTarget = document.getElementById("location-info").value; // working - could be connected to the functions below.
    // Have a connection to description builder and keywords one. 
    //Capturing stance of triggers 

    discounts = document.getElementById("trigger-discounts").checked
    // var discountPercent = document.getElementById("discount-number").value
    buy1Get2 = "no value"
    delivery = document.getElementById("trigger-delivery").checked
    ecoFriendly = document.getElementById("trigger-eco-friendly").checked
    catalogue = document.getElementById("trigger-catalogue").checked
    ecoFriendly = document.getElementById("trigger-eco-friendly").checked

    // Base: 

    baseInfo = {

        companyName: captureCompany.value,

        keyword: captureKeywords.value,

        product: captureProduct.value,

        finalUrl: captureFinalUrl.value,
    }

    // executing main structure functions

    createTableRow()
    builtHeadlines();
    builtDescriptions();
    builtPathsAndUrls();
    addKeywords();
    addAdGroupCampaign();


}

)


var numberAdsTake = document.getElementById("numberAds")

function createTableRow() {


    //capturing number of ads

    var numberAds = numberAdsTake.value;


    var rw = document.getElementsByTagName("tr").length

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

        cell1.setAttribute("class", "keywords")
        cell2.setAttribute("class", "campaign")
        cell3.setAttribute("class", "ad-group")
        cell4.setAttribute("class", "hd1")
        cell5.setAttribute("class", "hd2")
        cell6.setAttribute("class", "hd3")
        cell7.setAttribute("class", "descr")
        cell8.setAttribute("class", "descr")
        cell9.setAttribute("class", "path1")
        cell10.setAttribute("class", "path2")
        cell11.setAttribute("class", "final-url")


    }
}

// addional features info




// Randomazier for pushing if functions in "built functions"


function builtHeadlines() {
    // First and the most important one
    var hl1Options = []
    // Second Headline
    var hl2Options = []
    // Third headline
    var hl3Options = []

    HeadlinesRawCheck()

    // Checking character limits

    function HeadlinesRawCheck() {

        h1RawCheck = [
            "Buy " + baseInfo.product + " online",
            "Catalogue of " + baseInfo.product,
            "Buy " + baseInfo.product + " from " + baseInfo.companyName,
            `${baseInfo.product} in ${locationTarget}`,

        ]

        hl2RawCheck = [
            `Limited Special Offer`,
            `Online-shop ${baseInfo.companyName}`,
            `Great Special Offer`,

        ]

        hl3RawCheck = [
            `${baseInfo.companyName}`,
            "Great Discounts!",
            "Don't Miss the Opportinity!",
            "Fast Delivery",
            `Order now`,
        ]

        // somehow it repeats a lot of iiteration. 4 but not 1. O_O No answer - but the chances for the randomizer at the end are equal - so can stay.
        for (i = 0; i < h1RawCheck.length; i++) {
            if (h1RawCheck[i].length <= 30) {
                hl1Options.push(h1RawCheck[i])
            }
        }

        for (x = 0; x < hl2RawCheck.length; x++) {
            if (hl2RawCheck[x].length <= 30) {
                hl2Options.push(hl2RawCheck[x])
            }
        }

        for (y = 0; y < hl3RawCheck.length; y++) {
            if (hl3RawCheck[y].length <= 30) {
                hl3Options.push(hl3RawCheck[y])
            }
        }

    }

    // Selection the needed lines by class
    var hl1Import = document.getElementsByClassName("hd1");
    var hl2Import = document.getElementsByClassName("hd2");
    console.log(hl2Import)
    var hl3Import = document.getElementsByClassName("hd3");

    // pushing the needed strings in the table  -- (selecting all empty space in the table by selector and replace it with strings)
    for (i = 0; i < (numberAds.value); i++) {
        var random = Math.floor(Math.random() * hl1Options.length)
        hl1Import[i].innerHTML = hl1Options[random];
    }

    for (i = 0; i < (numberAds.value); i++) {
        var random2 = Math.floor(Math.random() * hl2Options.length)
        hl2Import[i].innerHTML = hl2Options[random2];
    }

    for (i = 0; i < (numberAds.value); i++) {
        var random3 = Math.floor(Math.random() * hl3Options.length)
        hl3Import[i].innerHTML = hl3Options[random3];
    }



}


// Combain Descriptions - also checking itriggered componetns and adding themon the fly - need to add other triggers //

function builtDescriptions() {

    var descrOptions = []
    descrRawCheck()
    console.log(descrOptions)

    // Function that checks Raw Descriptions length and if it is okay push it to descrOptions.
    // if statement first push option to raw so the cycle would    
    function descrRawCheck() {

        var descrOptionsRaw = [
            "Best quality " + baseInfo.product + " suitable for everyone. Make your order right now!",
            "Quality " + baseInfo.product + " for most demanding people. Dont wait and order right now!",

        ]

        console.log(locationTarget)

        if (locationTarget !== "") {
            descrOptionsRaw.push("One of the best " + baseInfo.product + " in " + locationTarget + ". Order now.");
        }

        if (ecoFriendly == true) {
            descrOptionsRaw.push("Eco-friendly " + baseInfo.product + " for you and your family. Order now.");
        }

        if (catalogue == true) {
            descrOptionsRaw.push("Full catalogue of " + baseInfo.product + " Choose you favorite and order now.");
        }

        if (delivery == true) {
            descrOptionsRaw.push("Fast and secure delivery. Make your order and get your " + baseInfo.product + " right to your home.");
        }

        if (buy1Get2 == true) {
            descrOptionsRaw.push("Famous buy 1 get 2 " + baseInfo.product + " without any additional costs. Hurry up and place an order!");
        }

        for (x = 0; x < descrOptionsRaw.length; x++) {
            if (descrOptionsRaw[x].length <= 90) {
                descrOptions.push(descrOptionsRaw[x])
            }
        }

    }

    // if (discounts == "true") {
    //     discounts = discountPercent; // number have to be provide by user
    //     featureComponents.push("Up to " + discounts + "% off.");
    // }


    // Selection the needed lines by class
    var descrImport = document.getElementsByClassName("descr");

    // pushing the needed strings in the table  -- (selecting all empty space in the table by selector and replace it with strings)
    for (i = 0; i < (numberAds.value * 2); i++) {
        var random = Math.floor(Math.random() * descrOptions.length)
        descrImport[i].innerHTML = descrOptions[random];
    }

}

// createing new line in table that is needed.

function builtPathsAndUrls() {

    var finalUrls = document.getElementsByClassName("final-url");

    for (i = 0; i < numberAdsTake.value; i++) {
        finalUrls[i].textContent = baseInfo.finalUrl;
    }

    var paths1 = document.getElementsByClassName("path1");

    for (i = 0; i < numberAds.value; i++) {
        paths1[i].innerHTML = baseInfo.product;
    }

    var paths2 = document.getElementsByClassName("path2");

    for (i = 0; i < numberAds.value; i++) {
        paths2[i].innerHTML = baseInfo.companyName;
    }
}

function addKeywords() {
    var keywordsOptions = [
        baseInfo.product,
        '"' + baseInfo.product + '"',
        baseInfo.product + " +" + baseInfo.companyName,
        '"' + 'Buy ' + baseInfo.product + '"',
        "Buy " + baseInfo.product,
        '"' + "Buy " + baseInfo.product + " online" + '"',
        `Buy ${baseInfo.product} with delivery`,

    ]

    if (locationTarget != "") {
        keywordsOptions.push("Buy " + baseInfo.product + " " + locationTarget)
        keywordsOptions.push(baseInfo.product + " in " + locationTarget)
        keywordsOptions.push('"' + baseInfo.product + " in " + locationTarget + '"');
    }

    // function keywordsGenerate (productName) {
    //     for(x = 0; x < numberAds.value; x ++){
    //         keywordsOptions.push() 
    //     }} 
    // keywordsGenerate(baseInfo.product)

    var keywordsImport = document.getElementsByClassName("keywords")

    for (i = 0; i < numberAds.value; i++) {
        var random = Math.floor(Math.random() * keywordsOptions.length)
        keywordsImport[i].innerHTML = keywordsOptions[random];
    }




}

function addAdGroupCampaign() {

    var campaignOptions = [
        "General for " + baseInfo.product + baseInfo.keyword,


    ]

    // need to make fuction that will create no more than 3 ads withing 1 ad group.
    // So no more than 3 values will repeate in the adGroupTab
    var adGroupOptions = [
        `${baseInfo.product}`,
        `${baseInfo.product} + ${locationTarget}`,
        `Buy ${baseInfo.product} `,
        `${baseInfo.product} + ${baseInfo.keyword}`,
    ]


    //capturing cells that is needed and pushing content from Options Array to the table

    var campaignImport = document.getElementsByClassName("campaign")
    var adGroupImport = document.getElementsByClassName("ad-group")


    for (i = 0; i < numberAds.value; i++) {
        var randomCamp = Math.floor(Math.random() * campaignOptions.length);
        campaignImport[i].innerHTML = campaignOptions[randomCamp];
    }

    for (i = 0; i < numberAds.value; i++) {

        var randomAdGroup = Math.floor(Math.random() * adGroupOptions.length);
        adGroupImport[i].innerHTML = adGroupOptions[randomAdGroup];
    }

}



