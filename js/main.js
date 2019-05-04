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

    // Base: 

    baseInfo = {

        companyName: captureCompany.value,

        keyword: captureKeywords.value,

        product: captureProduct.value,

        finalUrl: captureFinalUrl.value,
    }

    if (baseInfo.companyName == "" || baseInfo.product == "")                                  
    { 
        window.alert("Please enter your Company name and product"); 
        return false; 
    } 
   
    else if (baseInfo.finalUrl== "")                               
    { 
        window.alert("I also need Final URL to proceed"); 
        return false; 
    } else {
        console.log("YES!")

    // executing main structure functions

    createTableRow()
    builtHeadlines();
    builtDescriptions();
    builtPathsAndUrls();
    addKeywords();
    addAdGroupCampaign();


}}

)


var numberAdsTake = document.getElementById("numberAds")

function createTableRow() {


    //capturing number of ads

    var numberAds = numberAdsTake.value;


    var rw = document.getElementsByTagName("tr").length
    // IMPORTANT!!! rw = consist of 1 HEAD ROW + Ad rows. So physically we have (rw - 1) ad row.
    var table = document.getElementById("table");

    // Reseating number of Ads current

    for (rw; rw > numberAds; rw--) {
        table.deleteRow(-1);
    }

        // Controlling rw number with "++" and "--"

    // Because of "<=" sign, when we reach 10 rw (9 ad rows) and number of Ads = 10, 10 = 10 which is true, so we add 1 more rw and make physical 10 rows).
    for (rw; rw <= numberAds; rw++) {

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
            "Buy " + baseInfo.product + " Online",
            "Catalog of " + baseInfo.product,
            "Buy " + baseInfo.product + " From " + baseInfo.companyName,
            `${baseInfo.product} in ${locationTarget}`,
            `Special Prices on ${baseInfo.product}`,
            `Looking For ${baseInfo.product}`,


        ]

        hl2RawCheck = [
            `Limited Special Offer`,
            `Online-Shop ${baseInfo.companyName}`,
            `Great Special Offer`,
            `We Are Not on Comparison Sites`,
            `You Need That ${baseInfo.product}`,
            

        ]

        hl3RawCheck = [
            `${baseInfo.companyName}`,
            "Great Discounts",
            "Don't Miss the Opportunity",
            `Great Prices`,
            `Get It Now`,
            `You Wouldn't Find Better`,


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
            "Best Quality " + baseInfo.product + " Suitable for Everyone. Make Your Order Right Now!",
            "Quality " + baseInfo.product + " for Most Demanding People. Don't Wait and Order Right Now.",
            `Best ${baseInfo.product} in ${locationTarget}. Order Now and Enjoy! `,
            `Don't Miss an Incredible Opportunity. Buy ${baseInfo.product} Now!`,
            `Fast Shipping Right to Your Home. Only Secure Payments`,
            `Delivering Only Best Experience and Best Quality ${baseInfo.product}.`,
            `Ready-To-Help Support and Fast Shipping.`,
            `Having Troubles Finding Great ${baseInfo.product}? We Got You Covered.`,
            `Searching for Ages To Buy New ${baseInfo.product}? You Have Found it!`,
            `It's Okay To Search For Something New. The New Is Here.`,
            `Time to Order ${baseInfo.product} Has Come. Check Out ${baseInfo.companyName}.`,
            `We Know It is Hard To Find Perfect ${baseInfo.product}. Luckily, You Have Us.`,
            `Follow Your Dream And Get Your ${baseInfo.product} From The Best Ones.`,
            `We All Need a ${baseInfo.product}. So Why Not Get One Now?`,
            `Stay Alert! You Can Miss Great Deal And Discount.`,
            `Everyone Wants To Have These ${baseInfo.product}. But You Can have It!`,
            

        ]

        console.log(locationTarget)

        if (locationTarget !== "") {
            descrOptionsRaw.push("One of the best " + baseInfo.product + " in " + locationTarget + ". Order now!");
        }

        if (ecoFriendly == true) {
            descrOptionsRaw.push("Eco-friendly " + baseInfo.product + " for you and your family. Order now!");
        }

        if (discounts == true) {
            descrOptionsRaw.push(`Check Out Our Limeted Special. Don't Wait and Order Now!`);
            descrOptionsRaw.push(`Big Discounts on Your Favorite ${baseInfo.product}. Fast and Secure Delivery`);
            descrOptionsRaw.push(`Gigantic Sales! Buy Now and Save Your Money`);
        }

        if (catalogue == true) {
            descrOptionsRaw.push("Full catalogue of " + baseInfo.product + " Choose you favorite and order now!");
            descrOptionsRaw.push(`Be Wise and Choose the Best. Check Out Our Catalogue.`);
            descrOptionsRaw.push(`You Would Find a Wide Range of ${baseInfo.product}. Take a Look!`);
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
    for (i = 0; i < (numberAds.value * 2); i+=2) {
        let x = i + 1
        let randomx = Math.floor(Math.random() * descrOptions.length)
        var random = Math.floor(Math.random() * descrOptions.length)
        let trueRandomX = randomx - 1
        descrImport[i].innerHTML = descrOptions[random];
        if (random != randomx){
        descrImport[x].innerHTML = descrOptions[randomx];
        console.log (randomx)}
        else if (randomx > 2  && trueRandomX !== random) {
        descrImport[x].innerHTML = descrOptions[trueRandomX]
        console.log (`${trueRandomX} workin`)
        } else {
            let betterTrueRandomX = randomx + 1
            descrImport[x].innerHTML = descrOptions[betterTrueRandomX]
            console.log (`${betterTrueRandomX} better workin`)
        }
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
        "General for " + baseInfo.product + " + " + baseInfo.keyword,


    ]

    // need to make fuction that will create no more than 3 ads withing 1 ad group.
    // So no more than 3 values will repeate in the adGroupTab
    var adGroupOptions = [
        `${baseInfo.product}`,
        `${baseInfo.product} + ${locationTarget}`,
        `Buy ${baseInfo.product} `,
        `${baseInfo.product} + ${baseInfo.keyword}`,
        `Buy ${baseInfo.product} online`,
        `Buy ${baseInfo.product} + online`,
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



