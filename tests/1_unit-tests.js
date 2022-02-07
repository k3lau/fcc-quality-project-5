const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");

suite("Unit Tests", () => {
  let translator = new Translator();
  suite("Translate American English to British English", (done) => {
    test("Test translate function 1", (done) => {
      const sentence = "Mangoes are my favorite fruit.";
      const translatedString =
        'Mangoes are my <span class="highlight">favourite</span> fruit.';
      assert.equal(translator.translate(sentence), translatedString);
      done();
    });
    test("Test translate function 1", (done) => {
      const sentence = "I ate yogurt for breakfast.";
      const translatedString =
        'I ate <span class="highlight">yoghurt</span> for breakfast.';
      assert.equal(translator.translate(sentence), translatedString);
      done();
    });
    test("Test translate function 1", (done) => {
      const sentence = "We had a party at my friend's condo.";
      const translatedString = `We had a party at my friend's <span class="highlight">flat</span>.`;
      assert.equal(translator.translate(sentence), translatedString);
      done();
    });
    test("Test translate function 1", (done) => {
      const sentence = "Can you toss this in the trashcan for me?";
      const translatedString = `Can you toss this in the <span class="highlight">bin</span> for me?`;
      assert.equal(translator.translate(sentence), translatedString);
      done();
    });
    test("Test translate function 1", (done) => {
      const sentence = "The parking lot was full.";
      const translatedString = `The <span class="highlight">car park</span> was full.`;
      assert.equal(translator.translate(sentence), translatedString);
      done();
    });
    test("Test translate function 1", (done) => {
      const sentence = "Like a high tech Rube Goldberg machine.";
      const translatedString = `Like a high tech <span class="highlight">Heath Robinson device</span>.`;
      assert.equal(translator.translate(sentence), translatedString);
      done();
    });
    test("Test translate function 1", (done) => {
      const sentence = "To play hooky means to skip class or work.";
      const translatedString = `To <span class="highlight">bunk off</span> means to skip class or work.`;
      assert.equal(translator.translate(sentence), translatedString);
      done();
    });
    test("Test translate function 1", (done) => {
      const sentence = "No Mr. Bond, I expect you to die.";
      const translatedString = `No <span class="highlight">Mr</span> Bond, I expect you to die.`;
      assert.equal(translator.translate(sentence), translatedString);
      done();
    });
    test("Test translate function 1", (done) => {
      const sentence = "Dr. Grosh will see you now.";
      const translatedString = `<span class="highlight">Dr</span> Grosh will see you now.`;
      assert.equal(translator.translate(sentence), translatedString);
      done();
    });
    test("Test translate function 1", (done) => {
      const sentence = "Lunch is at 12:15 today.";
      const translatedString = `Lunch is at <span class="highlight">12.15</span> today.`;
      assert.equal(translator.translate(sentence), translatedString);
      done();
    });
  });
  suite("Translate from British English to American English", (done) => {
    test("Test translate function 1", (done) => {
      const sentence = "We watched the footie match for a while.";
      const translatedString = `We watched the <span class="highlight">soccer</span> match for a while.`;
      const locale = "british-to-american";
      assert.equal(translator.translate(sentence, locale), translatedString);
      done();
    });
    test("Test translate function 1", (done) => {
      const sentence = "Paracetamol takes up to an hour to work.";
      const translatedString =
        '<span class="highlight">Tylenol</span> takes up to an hour to work.';
      const locale = "british-to-american";
      assert.equal(translator.translate(sentence, locale), translatedString);
      done();
    });
    test("Test translate function 1", (done) => {
      const sentence = "First, caramelise the onions.";
      const translatedString =
        'First, <span class="highlight">caramelize</span> the onions.';
      const locale = "british-to-american";
      assert.equal(translator.translate(sentence, locale), translatedString);
      done();
    });
    test("Test translate function 1", (done) => {
      const sentence = "I spent the bank holiday at the funfair.";
      const translatedString =
        'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
      const locale = "british-to-american";
      assert.equal(translator.translate(sentence, locale), translatedString);
      done();
    });
    test("Test translate function 1", (done) => {
      const sentence = "I had a bicky then went to the chippy.";
      const translatedString =
        'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
      const locale = "british-to-american";
      assert.equal(translator.translate(sentence, locale), translatedString);
      done();
    });
    test("Test translate function 1", (done) => {
      const sentence = "I've just got bits and bobs in my bum bag.";
      const translatedString = `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`;
      const locale = "british-to-american";
      assert.equal(translator.translate(sentence, locale), translatedString);
      done();
    });
    test("Test translate function 1", (done) => {
      const sentence = "The car boot sale at Boxted Airfield was called off.";
      const translatedString = `The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`;
      const locale = "british-to-american";
      assert.equal(translator.translate(sentence, locale), translatedString);
      done();
    });
    test("Test translate function 1", (done) => {
      const sentence = "Have you met Mrs Kalyani?";
      const translatedString = `Have you met <span class="highlight">Mrs.</span> Kalyani?`;
      const locale = "british-to-american";
      assert.equal(translator.translate(sentence, locale), translatedString);
      done();
    });
    test("Test translate function 1", (done) => {
      const sentence = "Prof Joyner of King's College, London.";
      const translatedString = `<span class="highlight">Prof.</span> Joyner of King's College, London.`;
      const locale = "british-to-american";
      assert.equal(translator.translate(sentence, locale), translatedString);
      done();
    });
    test("Test translate function 1", (done) => {
      const sentence = "Tea time is usually around 4 or 4.30.";
      const translatedString = `Tea time is usually around 4 or <span class="highlight">4:30</span>.`;
      const locale = "british-to-american";
      assert.equal(translator.translate(sentence, locale), translatedString);
      done();
    });
  });
  suite("Highlight translation", (done) => {
    test("Highlight translation", (done) => {
      const sentence = "Mangoes are my favorite fruit.";
      const translatedString =
        'Mangoes are my <span class="highlight">favourite</span> fruit.';
      assert.equal(translator.translate(sentence), translatedString);
      done();
    });
    test("Test translate function 1", (done) => {
      const sentence = "I ate yogurt for breakfast.";
      const translatedString =
        'I ate <span class="highlight">yoghurt</span> for breakfast.';
      assert.equal(translator.translate(sentence), translatedString);
      done();
    });
    test("Test translate function 1", (done) => {
      const sentence = "We watched the footie match for a while.";
      const translatedString = `We watched the <span class="highlight">soccer</span> match for a while.`;
      const locale = "british-to-american";
      assert.equal(translator.translate(sentence, locale), translatedString);
      done();
    });
    test("Test translate function 1", (done) => {
      const sentence = "Paracetamol takes up to an hour to work.";
      const translatedString =
        '<span class="highlight">Tylenol</span> takes up to an hour to work.';
      const locale = "british-to-american";
      assert.equal(translator.translate(sentence, locale), translatedString);
      done();
    });
  });
});
