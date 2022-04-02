//Reactのお約束
import React from "react";
//Dom操作に使うコンポーネント
import ReactDom from "react-dom";
//exportされた自作コンポーネントのimport
import App from "./App";

ReactDom.render(<App />, document.getElementById("root"));
