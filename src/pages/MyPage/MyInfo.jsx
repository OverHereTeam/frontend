import React from "react";
import styled from "styled-components";
import SideBar from "../../components/MyPage/SideBar";

function MyInfo() {
    return (
        <Container>
            <SideBar />
            <Contents>
                <Header>나의 정보</Header>

                <StyledTable>
                    <Tbody>
                        <tr>
                            <td className="bold">로그인 계정</td>
                            <td> 카카오 </td>
                        </tr>
                        <tr>
                            <td className="bold"> 아이디 </td>
                            <td> beyond1234@kakao.com </td>
                        </tr>
                        <tr className="bold">
                            사용자 유형
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                <input type="radio" value="disabled" /> 장애인
                                <input type="radio" value="disabled" /> 동반자
                                <input type="radio" value="disabled" /> 일반인
                            </td>
                        </tr>
                    </Tbody>
                </StyledTable>


                <SaveButton> 저장 </SaveButton>
                <WithDraw>회원탈퇴</WithDraw>
            </Contents>
        </Container>        
    );
}

export default MyInfo;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 3em;
`
const Contents = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 18em);        
`
const Header = styled.h2`
    padding-bottom: 1em;
    margin: .5em 0;
    border-bottom: 2px solid black;
`
const StyledTable = styled.table`
    border-spacing: 0 1.5em;
    margin-bottom: 8em;
`
const Tbody = styled.tbody`
    td {
        color: #505458;
        padding-right: 5em;
    }
    .bold {
        color: #3A3D40;
        font-weight: bold;
    }
`
const SaveButton = styled.button`
    // display: inline-flex;
    // justify-content: center;
    align-self: anchor-center;
    border-radius: 4px;
    border: none;
    background-color: #529B40;
    color: #fff;
    padding: 1em 5em;
    // margin: 1em 0;
    cursor: pointer;
`
const WithDraw = styled(SaveButton)`
    background-color: unset;
    color: #8E9398;
    cursor: pointer;
    border: none;
`