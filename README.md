# Folder-To-Animation-GIF
- Photoshop用JSX
- 複数ファイルを読み込み、GIFアニメーションとして保存できるよう自動設定する支援スクリプト
- Blender等から書き出した連番画像を手軽にアニメーション化することを想定しているので、サイズ調整機能などはありません

## 利用方法
1. このページの **Clone or download** ボタン ＞ **Downroad ZIP** でダウンロードなどする
1. 解凍してできた **FolderToAnimationGIF.jsx** を **Adobe Photoshop ＞ Presets ＞ Scripts** フォルダに入れる
1. Photoshopを再起動
1. メニューの **ファイル ＞ 自動処理 ＞ 「複数ファイルからGIFアニメ作成」** を実行
1. 設定が終わったら **「Web用に保存」** ダイアログが開くので、GIF形式で減色設定などして保存

## 補足
- デフォルトの再生速度は1フレーム0.04秒（25fps）。一応ダイアログ出してますが問題なければそのままOKしてください
- Photoshop CC 2017 (64bit) + Windows7Pro で動作確認
