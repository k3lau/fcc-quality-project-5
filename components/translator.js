const { stringify } = require("mocha/lib/utils");
const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

const americanOnlyArray = Object.entries(americanOnly);
const americanToBritishSpellingArray = Object.entries(
  americanToBritishSpelling
);
const americanToBritishTitlesArray = Object.entries(americanToBritishTitles);
const britishOnlyArray = Object.entries(britishOnly);

class Translator {
  searchArray(text, dict, mode = "", reverse = false) {
    let search = 0;
    let value = 1;
    if (reverse) {
      search = 1;
      value = 0;
    }
    let remainText = text;
    dict.forEach((key) => {
      let regex;
      if (mode == "title") {
        let filter = key[search].replace(".", ".");
        let replace = key[value].charAt(0).toUpperCase() + key[value].slice(1);
        replace = replace.replace(".", ".");
        regex = new RegExp("\\b" + filter + "\\s", "gi");
        if (text.search(regex) != -1) {
          text = text.replace(
            regex,
            '<span class="highlight">' + replace + "</span>" + " "
          );
        }
      } else {
        regex = new RegExp("\\b" + key[search] + "\\b", "gi");

        if (remainText.search(regex) != -1) {
          remainText = text.replace(regex, "");
          text = text.replace(
            regex,
            '<span class="highlight">' + key[value] + "</span>"
          );
        }
      }
    });
    return text;
  }
  searchTime(text, locale = "american-to-british") {
    let regex, replace;
    if (locale == "american-to-british") {
      regex = new RegExp(/(\d{1,2}):(\d{1,2})/);
    } else {
      regex = new RegExp(/(\d{1,2})\.(\d{1,2})/);
    }
    let match = text.match(regex);
    if (match && text.search(match[0]) != -1) {
      if (locale == "american-to-british") {
        replace = match[1] + "." + match[2];
      } else {
        replace = match[1] + ":" + match[2];
      }
      text = text.replace(
        match[0],
        '<span class="highlight">' + replace + "</span>"
      );
    }
    return text;
  }
  translate(text, locale = "american-to-british") {
    // const str = "First, caramelise the onions.";
    // const reg = new RegExp(/\d{1,2}:\d{1,2}/g);
    // console.log(str.replace(reg));
    if (locale == "american-to-british") {
      text = this.searchArray(text, americanOnlyArray);
      text = this.searchArray(text, americanToBritishSpellingArray);
      text = this.searchArray(text, americanToBritishTitlesArray, "title");
      text = this.searchTime(text, locale);
    } else if (locale == "british-to-american") {
      let reverse = true;
      text = this.searchArray(text, britishOnlyArray);
      text = this.searchArray(
        text,
        americanToBritishSpellingArray,
        "",
        reverse
      );
      text = this.searchArray(
        text,
        americanToBritishTitlesArray,
        "title",
        reverse
      );
      text = this.searchTime(text, locale);
    } else {
    }
    return text;
  }
}

module.exports = Translator;
