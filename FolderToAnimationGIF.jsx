/*
<javascriptresource>
<name>複数ファイルからGIFアニメ作成...</name>
</javascriptresource>
*/

// =======================================================
// dialog
var F = prompt("アニメーションフレームの再生速度を設定してください。（単位はfps）",24);
var FPS = eval(F);

var CR = String.fromCharCode(13);
alert("【ファイルをレイヤーとして読み込み】ダイアログが表示されたら、「参照」ボタンで複数ファイルを指定して「OK」を押してください。"+CR+CR+"少し待つとアニメーション設定が完了し、【Web用に保存】ダイアログが開きます。GIF画像形式で各種オプションを設定して保存してください。");

// =======================================================
// Load Files into Stack
var idAdobeScriptAutomationScripts = stringIDToTypeID( "AdobeScriptAutomation Scripts" );
var desc14 = new ActionDescriptor();
var idjsNm = charIDToTypeID( "jsNm" );
desc14.putString( idjsNm, """ファイルをレイヤーとして読み込み...""" );
var idjsMs = charIDToTypeID( "jsMs" );
desc14.putString( idjsMs, """undefined""" );
executeAction( idAdobeScriptAutomationScripts, desc14, DialogModes.NO );

// makeFrameAnimation
var idmakeFrameAnimation = stringIDToTypeID( "makeFrameAnimation" );
executeAction( idmakeFrameAnimation, undefined, DialogModes.NO );

// FramesFromLayers
var idanimationFramesFromLayers = stringIDToTypeID( "animationFramesFromLayers" );
var desc16 = new ActionDescriptor();
executeAction( idanimationFramesFromLayers, desc16, DialogModes.NO );

// reverseFrames
var idRvrs = charIDToTypeID( "Rvrs" );
var desc18 = new ActionDescriptor();
var idnull = charIDToTypeID( "null" );
var ref1 = new ActionReference();
var idanimationFrameClass = stringIDToTypeID( "animationFrameClass" );
var idOrdn = charIDToTypeID( "Ordn" );
var idTrgt = charIDToTypeID( "Trgt" );
ref1.putEnumerated( idanimationFrameClass, idOrdn, idTrgt );
desc18.putReference( idnull, ref1 );
executeAction( idRvrs, desc18, DialogModes.NO );

// SelectAllFrames
var idanimationSelectAll = stringIDToTypeID( "animationSelectAll" );
var desc20 = new ActionDescriptor();
executeAction( idanimationSelectAll, desc20, DialogModes.NO );

// setFrameDelay
setFrameDelay ( 1/FPS );
function setFrameDelay ( delayTime )
{
  var idsetd = charIDToTypeID( "setd" );
  var desc23 = new ActionDescriptor();
  var idnull = charIDToTypeID( "null" );
  var ref2 = new ActionReference();
  var idanimationFrameClass = stringIDToTypeID( "animationFrameClass" );
  var idOrdn = charIDToTypeID( "Ordn" );
  var idTrgt = charIDToTypeID( "Trgt" );
  ref2.putEnumerated( idanimationFrameClass, idOrdn, idTrgt );
  desc23.putReference( idnull, ref2 );
  var idT = charIDToTypeID( "T   " );
  var desc24 = new ActionDescriptor();
  var idanimationFrameDelay = stringIDToTypeID( "animationFrameDelay" );
  desc24.putDouble( idanimationFrameDelay, delayTime );
  var idanimationFrameClass = stringIDToTypeID( "animationFrameClass" );
  desc23.putObject( idT, idanimationFrameClass, desc24 );
  executeAction( idsetd, desc23, DialogModes.NO );
}

// loopForever
var idsetd = charIDToTypeID( "setd" );
var desc25 = new ActionDescriptor();
var idnull = charIDToTypeID( "null" );
var ref3 = new ActionReference();
var idanimationClass = stringIDToTypeID( "animationClass" );
var idOrdn = charIDToTypeID( "Ordn" );
var idTrgt = charIDToTypeID( "Trgt" );
ref3.putEnumerated( idanimationClass, idOrdn, idTrgt );
desc25.putReference( idnull, ref3 );
var idT = charIDToTypeID( "T   " );
var desc26 = new ActionDescriptor();
var idanimationLoopEnum = stringIDToTypeID( "animationLoopEnum" );
var idanimationLoopType = stringIDToTypeID( "animationLoopType" );
var idanimationLoopForever = stringIDToTypeID( "animationLoopForever" );
desc26.putEnumerated( idanimationLoopEnum, idanimationLoopType, idanimationLoopForever );
var idanimationClass = stringIDToTypeID( "animationClass" );
desc25.putObject( idT, idanimationClass, desc26 );
executeAction( idsetd, desc25, DialogModes.NO );

// saveForWeb
var idExpr = charIDToTypeID( "Expr" );
var desc28 = new ActionDescriptor();
var idUsng = charIDToTypeID( "Usng" );
var idSaveForWeb = stringIDToTypeID( "SaveForWeb" );
var desc29 = new ActionDescriptor();
desc28.putObject( idUsng, idSaveForWeb, desc29 );
executeAction( idExpr, desc28, DialogModes.ALL );
