import React from "react";

//props: コンポーネントの引数。動的にコンポーネントの表示内容を変更できる
//propsを受け取るときはオブジェクトにプロパティとして格納される
export const ColorfullMessage = (props) => {
  //分割代入でpropsからそれぞれ変数に代入
  const { color, message } = props;
  /**
   * props = {
   * prop1: value1,
   * prop2: value2 ...
   * }
   */
  //propsのオブジェクト.プロパティでpropを取得できる
  const contentStyle = {
    fontSize: "18px",
    color: color
  };
  //returnするタグに出力するときは{}で囲う
  // propsを出力するときは{props.渡したpropのプロパティ名}
  // タグの配下にある文字列を出力する場合は{props.children}で表示する
  return (
    <>
      <p style={contentStyle}>{message}</p>
    </>
  );
};

// export default ColorfullMessage;
