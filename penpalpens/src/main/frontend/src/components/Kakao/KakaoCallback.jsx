import React from "react";
import axios from "axios"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const KakaoCallback = () => {

<<<<<<< HEAD
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code)
    axios({
        method : "GET",
        url : `/login/penpalpens?code=${code}`
    })
    .then((res) => {
        console.log(res.data); //
    })
=======
    const navigate = useNavigate();
>>>>>>> 3c6e4cd8361eb6b95524b2250d3ab2ff94a19f28

    // URL에서 "code" 파라미터 가져오기
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code);

    useEffect(() => {
        // Kakao 로그인 요청을 보낼 URL
        const url = `/login/penpalpens?code=${code}`;

        // axios를 사용하여 서버에 요청 보내기
        axios
            .get(url)
            .then((response) => {
                // 요청이 성공한 경우 서버 응답을 처리할 수 있습니다.
                console.log("서버 응답:", response.data);
                localStorage.setItem('token', response.data)
                navigate("/kakaoinfo")
            })
            .catch((error) => {
                // 요청이 실패한 경우 에러를 처리할 수 있습니다.
                console.error("에러 발생:", error);
            });
    }, [code]); // code가 변경될 때마다 useEffect 실행
}

export default KakaoCallback;