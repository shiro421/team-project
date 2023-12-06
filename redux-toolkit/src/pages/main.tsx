import { useDispatch, useSelector } from "react-redux";
import { userUpdate } from "../features/user/user";

interface UserProps {
    user: {
        user: {
            name: string,
            age: number,
            gender: string,
            email: string
        }
    }
}
const Main = () => {

    // useSelector를 사용하면 reducer에 접근 할 수 있습니다.
    const user = useSelector((state: UserProps) => state.user.user);
    
    const dispatch = useDispatch();

    const update = () => {
        dispatch(userUpdate({ name: "Jun", age: 20, gender: "man", email: "junhyeok419@naver.com" }))
    }

    return (
        <div>
            <h1>유저 내용입니다.</h1>
            <ul style={{listStyle: "none", textAlign: "left"}}>
                <li>이름: {user.name}</li>
                <li>나이: {user.age}</li>
                <li>성별: {user.gender}</li>
                <li>이메일: {user.email}</li>
            </ul>

            <button onClick={update}>변경!</button>
        </div>
    );
}

export default Main;