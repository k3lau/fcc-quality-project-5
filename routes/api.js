"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    if (
      !req.body.hasOwnProperty("text") ||
      !req.body.hasOwnProperty("locale")
    ) {
      return res.send({ error: "Required field(s) missing" });
    }
    if (req.body.text == "") {
      return res.send({ error: "No text to translate" });
    }
    if (
      req.body.locale != "american-to-british" &&
      req.body.locale != "british-to-american"
    ) {
      return res.send({ error: "Invalid value for locale field" });
    }
    let result = translator.translate(req.body.text, req.body.locale);
    if (req.body.text == result) {
      result = "Everything looks good to me!";
    }
    return res.send({ text: req.body.text, translation: result });
  });
};
