const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");
const { text } = require("express");

suite("Functional Tests", () => {
  test("Translation with text and locale fields", (done) => {
    let text = "I had a bicky then went to the chippy.";
    let locale = "british-to-american";
    let input = { text: text, locale: locale };
    chai
      .request(server)
      .post("/api/translate")
      .send(input)
      .end((err, res) => {
        assert.property(res.body, "translation");
        assert.equal(
          res.body.translation,
          'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.'
        );
        done();
      });
  });
  test("Translation with invalid locale field", (done) => {
    let text = "I had a bicky then went to the chippy.";
    let locale = "british";
    let input = { text: text, locale: locale };
    chai
      .request(server)
      .post("/api/translate")
      .send(input)
      .end((err, res) => {
        assert.property(res.body, "error");
        assert.equal(res.body.error, "Invalid value for locale field");
        done();
      });
  });
  test("Translation with missing text field", (done) => {
    let text = "I had a bicky then went to the chippy.";
    let locale = "british";
    let input = { locale: locale };
    chai
      .request(server)
      .post("/api/translate")
      .send(input)
      .end((err, res) => {
        assert.property(res.body, "error");
        assert.equal(res.body.error, "Required field(s) missing");
        done();
      });
  });
  test("Translation with missing locale field", (done) => {
    let text = "I had a bicky then went to the chippy.";
    let locale = "british";
    let input = { text: text };
    chai
      .request(server)
      .post("/api/translate")
      .send(input)
      .end((err, res) => {
        assert.property(res.body, "error");
        assert.equal(res.body.error, "Required field(s) missing");
        done();
      });
  });
  test("Translation with empty text field", (done) => {
    let text = "";
    let locale = "british";
    let input = { text: text, locale: locale };
    chai
      .request(server)
      .post("/api/translate")
      .send(input)
      .end((err, res) => {
        assert.property(res.body, "error");
        assert.equal(res.body.error, "No text to translate");
        done();
      });
  });
  test("Translation with empty text field", (done) => {
    let text = "Tea time is usually around 4 or 4.30.";
    let locale = "american-to-british";
    let input = { text: text, locale: locale };
    chai
      .request(server)
      .post("/api/translate")
      .send(input)
      .end((err, res) => {
        assert.property(res.body, "translation");
        assert.equal(res.body.translation, "Everything looks good to me!");
        done();
      });
  });
});
