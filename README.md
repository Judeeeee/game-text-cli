# game-text-cli
This npm converts all strings passed as arguments into hiragana.

The converted strings are then displayed at regular intervals

https://github.com/Judeeeee/game-text-cli/assets/43412616/ea4cb02b-3948-4ed4-8398-d96422a28967

.






This npm uses gooLab's [hiragana conversion API](https://labs.goo.ne.jp/api/jp/hiragana-translation/).

![image](https://github.com/Judeeeee/game-text-cli/assets/43412616/be9910bf-f1c3-47a9-aa16-c80a66e79a3e)

## Usage
### 1. Application ID Settings
Please agree to the [gooLab API Usage Registration](https://labs.goo.ne.jp/jp/apiregister/) and obtain an Application ID.

Then, set the environment variables with the following command.

```
export GOO_LABO_APP_ID = ‘YOUR_APPLICATION_ID’
```

### 2. Executing the Command
Execute it by passing a string as an argument as follows.

```
npx gt "string"
```

All strings are converted to hiragana, line-breaks are made in phrase, and the text is displayed at regular intervals.

#### Example:
```
❯ npx gt "吾輩は猫である。名前はまだない。"

わがはいは
ねこである

なまえは
まだ
ない
```

## Notes
This npm uses the strings converted by the hiragana conversion API as is.

Kanji with multiple readings, alphabets, and numbers may not be displayed as expected.

