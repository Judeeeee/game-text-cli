/* eslint-disable no-undef */
const display = require("./index");
jest.setTimeout(10000);

describe("入力から出力までの一連のテスト", () => {
  test("文字が全てひらがなに変換される。API側で文節が半角スペースで区切られる", async () => {
    let output = "";
    let stdout = {
      write: (str) => {
        output += str;
      },
    };
    const input = "吾輩は猫である名前はまだない";
    const expected = "わがはいは\nねこである\nなまえは\nまだ\nない\n";
    await display(input, stdout);
    expect(output).toBe(expected);
  });

  test("句読点・半角スペースが含まれている文章", async () => {
    let output = "";
    let stdout = {
      write: (str) => {
        output += str;
      },
    };
    const input = "読点、と半角スペース と句点。で区切った文章です。";
    const expected =
      "とうてん\nと\nはんかくすぺーす\nと\nくてん\n\nで\nくぎった\nぶんしょうです\n\n";
    await display(input, stdout);

    expect(output).toBe(expected);
  });

  test("句読点のみの文章", async () => {
    let output = "";
    let stdout = {
      write: (str) => {
        output += str;
      },
    };
    const input = "、。 ";
    const expected = "\n\n\n";
    await display(input, stdout);
    expect(output).toBe(expected);
  });

  test("引数を渡していない場合、文指定を促す", async () => {
    let output = "";
    let stdout = {
      write: (str) => {
        output += str;
      },
    };
    const input = undefined;
    const expected = "引数に文を指定してください。";
    await display(input, stdout);
    expect(output).toBe(expected);
  });
});
