import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-top: -80px;
`;
const LoginWrap = styled.div`
    width: 500px; 
    padding: 40px;
`;
const Title = styled.h2`
    font-size: 40px;
    margin-bottom: 20px;
    text-align: left;
`;
const SubTitle = styled.p`
    margin-bottom: 50px;
    text-align: left;
`;
const Input = styled.input`
    width: 100%;
    padding: 12px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;
const CheckBoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;
const CheckBoxWrapper = styled.div`
    display: flex;
    align-items: center;
`;
const CheckBox = styled.input`
    margin-right: 8px;
`;
const CheckBoxLabel = styled.label`
    font-size: 14px;
`;
const FindPasswordLink = styled.a`
    font-size: 14px;
    color: #666;
    text-decoration: underline;
    cursor: pointer;
`;
const LoginButton = styled.button`
    width: 100%;
    padding: 14px;
    background-color: #1e6a77;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
`;
const OtherLinks = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`;
const SignUpLink = styled.a`
    font-size: 14px;
    color: #1e6a77;
    cursor: pointer;
`;
const AdminLoginLink = styled.a`
    font-size: 14px;
    color: #666;
    cursor: pointer;
`;

const App = () => {
  return (
    <Container>
        <LoginWrap>
            <Title>Login</Title>
            <SubTitle>이메일과 비밀번호를 입력해주세요.</SubTitle>
            <Input type="text" placeholder="아이디" />
            <Input type="password" placeholder="비밀번호" />
            <CheckBoxContainer>
                <CheckBoxWrapper>
                    <CheckBox type="checkbox" id="idcheck"/>
                    <CheckBoxLabel htmlFor="idcheck">아이디를 저장합니다.</CheckBoxLabel>
                </CheckBoxWrapper>
                <FindPasswordLink href="/">비밀번호 찾기</FindPasswordLink>
            </CheckBoxContainer>
            <LoginButton>로그인 하기</LoginButton>
            <OtherLinks>
                <SignUpLink href="/">회원가입 하기</SignUpLink>
                <AdminLoginLink href="/">관리자 로그인</AdminLoginLink>
            </OtherLinks>
        </LoginWrap>
    </Container>
  );
};

export default App;