import React, { useEffect, useState } from "react";
/**
 * export defaultの場合 : import コンポーネント名 from コンポーネントのパス
 * export const 関数の場合 : import {コンポーネント名} from コンポーネントのパス
 */
import { ColorfullMessage } from "./components/ColorfulMessage";

//レンダリングする関数(コンポーネント)。頭文字は大文字
//戻り値で整形するhtmlタグを返す。必ず１つのタグにまとめる必要がある
//エラー回避のためだけにタグを追加するのはアンチパターンなため、React.Fragmentタグで囲いその子要素のみを出力する。また、省略系で空のタグで代用できる
const App = () => {
  //state : コンポーネントが持つ状態。値が動的に変化する
  // useState(初期値) : stateの定義。 const [stateの変数,stateを更新する関数] = useState()の形で定義することが多い
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickButton = () => {
    //useState()で分割代入したstate更新関数を呼び、処理を引数に描く
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //useEffect(関数,[変数...]) : 変数の値が変化すると関数を実行させる。他のstateと分離できる。
  //第二引数に空の配列を指定すると最初の読み込み時のみ実行させることができる。
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        // setFaceShowFlag(true); too many renderingが発生。
        faceShowFlag || setFaceShowFlag(true);
      } else {
        // setFaceShowFlag(false);
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  //イベントの登録: イベントハンドラ={処理する関数}
  /** cssの登録
   *  cssの場合: htmlと同じようにclassやidを付与
   *  reactの場合: style={オブジェクト}
   */
  /** コンポーネントのpropsを使った同的な出力
   * １つのタグにまとめる場合 : < コンポーネント名 props /> : コンポーネント側では受け取ったprops.propのプロパティ名で出力する
   * htmlのように閉じタグを使う場合 : <コンポーネント名 props>　文字列　</コンポーネント名> : コンポーネント側では受け取ったprops.childrenでタグの配下にある文字列を出力
   */
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfullMessage color="yellow" message="お元気ですか?" />
      <ColorfullMessage color="pink">お元気でしょうか?</ColorfullMessage>
      <button onClick={onClickButton}>ボタン</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ´ ▽ ` )</p>}
    </>
  );
};

//コンポーネントとして使えるようにexportしておく export default コンポーネント名;
export default App;

//reactの拡張子は'js' or 'jsx'
//エラーは起きないもののコンポーネントとして使うなら'jsx'にすべき
