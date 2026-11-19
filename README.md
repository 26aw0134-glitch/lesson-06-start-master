# SHINDAN STUDIO（第6回の教材）

「本の選び方診断」に、操作をつけるための教材です。

## 起動のしかた

```bash
git clone https://github.com/mafy55/lesson-06-start.git
cd lesson-06-start
npm install
npm run dev
```

ターミナルに表示された `Local:` のURLを、ブラウザで開きます。

## 今日編集するファイル

`src/components/DiagnosisPlayer.jsx`

- 実習①：`①②③` の印がある箇所
- 実習②：`④⑤⑥` の印がある箇所。⑥は `snippets/answer-button.txt` の内容で差し替える

## 途中から合流するとき

実習①の完成版が `checkpoints/checkpoint-1/DiagnosisPlayer.jsx` にあります。
中身を、`src/components/DiagnosisPlayer.jsx` にコピーして使います。

## 今日は編集しないファイル

| ファイル | 役割 |
|---|---|
| `src/data/diagnosis.json` | 診断データ |
| `src/lib/score.js` | 採点と結果の決定 |
| `src/components/ResultView.jsx` | 結果の表示 |
| `src/components/DebugPanel.jsx` | 確認用の表示 |
