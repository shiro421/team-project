import React from "react";
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/user/user";
/*
  configureStore: 여기서 모든 state를 관리해줍니다.
  reducer에 상태관리할 내용들을 저장합니다.
*/
export default configureStore({
  reducer: {
    user: userReducer
  }
})