# Folder-To-Animation-GIF
- Photoshop用JSX
- 複数ファイルを読み込み、GIFアニメーションとして保存できるよう自動設定するスクリプト


## 利用方法
1. このページの **Clone or download** ボタン ＞ **Downroad ZIP** でダウンロード
1. 解凍してできた **FolderToAnimationGIF.jsx** を **Adobe Photoshop ＞ Presets ＞ Scripts** フォルダに入れる
1. Photoshopを再起動
1. メニューの **ファイル ＞ スクリプト ＞ 「複数ファイルからGIFアニメ作成」** を実行
1. 自動設定が終わったら **「Web用に保存」** ダイアログが開くので、GIF形式で減色設定などして保存

## 補足
- Blender等から書き出した連番画像を手軽にアニメーション化することを想定しています。細かいエラーチェックはしません
- 再生速度の初期値24fpsはBlenderのデフォルトに合わせていますが、精度の問題で若干ずれる可能性があります
- Photoshop CC 2017 (64bit) + Windows7Pro で動作確認
