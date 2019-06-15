
// Handle for one-line-per-word
// let wordPerLine = function(x) {
//   document.getElementById(x).onkeyup = function(e) {
//     e.target.value = e.target.value.replace(" ", "\n").replace(",", "\n");
//   };
// };
// wordPerLine("data");
// wordPerLine("include");
// wordPerLine("exclude");
// wordPerLine("output");



const outputData = document.getElementById("output");

var checkKeywords = () => {
  outputData.innerHTML = "";
  // Capturing valeus
  let data = document.getElementById("data").value.toLowerCase();
  let include = document.getElementById("include").value.toLowerCase();
  let exclude = document.getElementById("exclude").value.toLowerCase();
  // Declaring Arrays
  const includeArr = include.split("\n");
  const dataArr = data.split("\n");
  console.log(dataArr)
  let matchArr = [];

  // include loop (IncludeArr is not an Array but Regex helps with it)
  // for (let i = 0; i < includeArr.length; i++) {
  //   let match = `\\b(\\w*${includeArr[i]}\\w*)\\b`;
  //   let rgx = new RegExp(match, "g");
  //   matchArrs.push(data.match(rgx));
  // }
  // for (let i = 0; i < matchArrs.length; i++) {
  //   matchArr = matchArr.concat(matchArrs[i]);
  // }

  // console.log(includeArr);
  // console.log(includeArr.length);
  // console.log(dataArr)
  // console.log(dataArr.length);

  for (let i = 0; i < includeArr.length; i++) {
    for (let x = 0; x < dataArr.length; x++) {
      if (dataArr[x].includes(includeArr[i])) {
        matchArr.push(dataArr[x]);
      }
    }
  }
  // Checked till matchArr - everything is ok
  // console.log(matchArr)

  // Need to make ExcludeArr an  Array - for now it is just 1 item with all of the text/

  let excludeArr = exclude.split("\n");

  // console.log(matchArr);
  // console.log(matchArr.length);
  // console.log(excludeArr);
  // console.log(excludeArr.length);

  let finalArr = [];
  let excludeElements = [];
  // exclude loop

  console.log(excludeArr);

  if (exclude !== "") {
    for (let c = 0; c < excludeArr.length; c++) {
      console.log("c");
      for (let y = 0; y < matchArr.length; y++) {
        console.log(matchArr[y].includes(excludeArr[c]));
        if (
          matchArr[y].includes(excludeArr[c]) === true &&
          excludeArr[c] !== ""
        ) {
          excludeElements.push(matchArr[y]);
          // finalArr.splice(y, 1);
          console.log(excludeElements);
        }
      }
    }
  } else {
    finalArr = matchArr;
  }

  finalArr = matchArr.filter(function(el) {
    return !excludeElements.includes(el);
  });

  console.log(finalArr);

  outputData.innerHTML = finalArr.join("\n");
};

document.getElementById("button").addEventListener("click", checkKeywords);
