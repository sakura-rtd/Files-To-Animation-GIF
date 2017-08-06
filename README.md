# Files-To-Animation-GIF
- Photoshop用JSX
- 連番ファイル名のついた複数画像ファイルを読み込み、GIFアニメーションとして保存できるよう自動設定するスクリプト

## インストール
1. **Clone or download** ボタン ＞ **Downroad ZIP** でダウンロード
1. 解凍してできた **FilesToAnimationGIF.jsx** を **Adobe Photoshop ＞ Presets ＞ Scripts** フォルダに入れる
1. Photoshopを再起動

## 使い方
1. Photoshopメニューの **ファイル ＞ スクリプト ＞ 「複数ファイルからGIFアニメ作成」** を実行
1. ダイアログに従って再生速度を確認、読み込む連番画像ファイルを指定して少し待つ
1. 自動設定が終わったら **「Web用に保存」** ダイアログが開くので、GIF形式で減色設定などして保存

## 注意事項
- Blender等から書き出した連番画像を手軽にアニメーション化する用法を想定しています。細かい例外チェックなどはしないので、画像サイズ等を揃えた状態でご利用ください
- 再生速度の初期値24fpsはBlenderのデフォルトに合わせていますが、精度の問題で若干ずれる可能性があります
- Photoshop付属のスクリプト「ファイルをレイヤーとして読み込み」（Load Files into Stack.jsx）を呼び出して利用しています。同じScriptsフォルダにこのファイルがないと動作しません
- Photoshop CC 2017 (64bit) + Windows7Pro で動作確認
