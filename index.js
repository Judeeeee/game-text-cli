#!/usr/bin/env node
const { setTimeout } = require("timers/promises");

class DisplayText {
  constructor(input) {
    this.input = input;
  }

  async convert() {
    const onlyHiraganaSentence = await this.toHiragana(this.input);
    const json = await this.toJson(onlyHiraganaSentence);
    const displayText = await this.format(json);
    const splitedText = displayText.split(/[、。 ]/);
    return splitedText;
  }

  toHiragana(input) {
    const resource = "https://labs.goo.ne.jp/api/hiragana";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        app_id: process.env.GOO_LABO_APP_ID,
        sentence: `${input}`,
        output_type: "hiragana",
      }),
    };

    return new Promise((resolve) => {
      const onlyHiraganaSentence = fetch(resource, options);
      resolve(onlyHiraganaSentence);
    });
  }

  toJson(onlyHiraganaSentence) {
    return new Promise((resolve) => {
      const json = onlyHiraganaSentence.json();
      resolve(json);
    });
  }

  format(json) {
    return new Promise((resolve) => {
      const converted = json.converted;
      resolve(converted);
    });
  }
}

const display = async (input, output) => {
  if (input === undefined) {
    output.write("引数に文を指定してください。");
    return;
  }

  const displayText = new DisplayText(input);
  const convertedText = await displayText.convert();
  let fragmentIndex = 0;
  let charIndex = 0;

  while (fragmentIndex < convertedText.length) {
    const fragment = convertedText[fragmentIndex];
    if (charIndex < fragment.length) {
      const char = fragment.charAt(charIndex);
      output.write(char);
      charIndex++;
    } else {
      output.write("\n");
      fragmentIndex++;
      charIndex = 0;
    }
    await setTimeout(200);
  }
};

display(process.argv[2], process.stdout);

module.exports = display;
