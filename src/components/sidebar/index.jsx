import React from "react";
import styled from "styled-components";
import logo from '../../images/스택로고.png';
import setting from '../../images/설정.png';

const Sidebar = styled.div`
    width: 120px; /* Sidebar width */
    background-color: #f5f5f5;
    color: black;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Ensure spacing between elements */
    position: fixed;
    left: 0;
    top: 50px;
    height: calc(100vh - 90px); /* Fill the remaining height */
    font-weight: bold;
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: 0px; /* Adjusted margin */
`;

const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 10px; /* Consistent space between items */
    padding: 5px; /* Added padding for text */
  }

  ul li a {
    text-decoration: none;
    color: black;
    font-size: 16px;
    display: block; /* Makes the entire list item clickable */
    text-align: left; /* Align text to the left */
  }

  ul li a:hover {
    text-decoration: underline;
  }
`;

const Settings = styled.div`
  text-align: center;
  padding-top: 10px; /* Consistent space at the bottom */
`;

const MainContent = styled.div`
  margin-left: 200px; /* Adjusted margin to fit new sidebar width */
  padding: 20px;
  background-color: #fff;
  width: 100%;
`;

const App = () => {
    return (
        <div>
            <Sidebar>
                <Logo>
                    <img src={logo} alt="Stack Logo" width="80" />
                </Logo>
                <Nav>
                    <ul>
                        <li><a href="#">새 노트 작성</a></li>
                        <li><a href="#">노트 목록 보기</a></li>
                        <li><a href="#">글6</a></li>
                        <li><a href="#">글5</a></li>
                        <li><a href="#">글4</a></li>
                        <li><a href="#">글3</a></li>
                        <li><a href="#">글2</a></li>
                        <li><a href="#">글1</a></li>
                        <li><a href="#">캘린더</a></li>
                        <li><a href="#">로그인</a></li>
                    </ul>
                </Nav>
                <Settings>
                    <img src={setting} alt="Settings" width="30" />
                </Settings>
            </Sidebar>
            <MainContent>
                {/* Your main content goes here */}
            </MainContent>
        </div>
    );
};

export default App;
