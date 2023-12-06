import { PayloadAction, createSlice } from "@reduxjs/toolkit";

/*
    reducer와 action을 한곳에서 해줍니다.
    name: 리듀서의 이름
    initialState: 초기값
    reducers: 상태가 변경했을때 어떻게 실행되는지 정하는 부분
*/

interface UserProps {
    name: string,
    age: number,
    gender: string,
    email: string
}

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            name: "",
            age: 0,
            gender: "",
            email: ""
        }
    },
    reducers: {
        userUpdate: (state, action: PayloadAction<UserProps>) => {
            state.user = action.payload;
        },
    }
})

export const { userUpdate } = userSlice.actions;
export default userSlice.reducer;