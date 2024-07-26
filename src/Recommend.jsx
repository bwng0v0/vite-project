import styled from "styled-components";
import { Plus } from 'lucide-react';

function Recommend(){
    return(
        <Container>
            <Schedule>
            <ItemBox>
                <div>
                    <Name>카페 가기</Name>
                    <Description>시원한 음료 한잔 어떠신가요</Description>
                </div>
                <Add><Plus /></Add>
            </ItemBox>
            <ItemBox>
                <div>
                    <Name>카페 가기</Name>
                    <Description>시원한 음료 한잔 어떠신가요</Description>
                </div>
                <Add><Plus /></Add>
            </ItemBox>
            <ItemBox>
                <div>
                    <Name>카페 가기</Name>
                    <Description>시원한 음료 한잔 어떠신가요</Description>
                </div>
                <Add><Plus /></Add>
            </ItemBox>
            <ItemBox>
                <div>
                    <Name>카페 가기</Name>
                    <Description>시원한 음료 한잔 어떠신가요</Description>
                </div>
                <Add><Plus /></Add>
            </ItemBox>

            </Schedule>
            
            <Submit>일정 추가하기</Submit>
        </Container>
    )
}

export default Recommend;

const Container = styled.div`
    max-width: 400px;
    background-color: white;
    border:solid 1px #E5E7EB;
    margin: 0px auto;
    min-height: 100svh;
    padding: 32px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

const Schedule = styled.div`
    display: flex;
    flex-direction: column;
    gap:16px;
`

const ItemBox = styled.div`
    background-color: #F8FFA4;
    height: 110px;
    border-radius: 18px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
`

const Name = styled.h4`
    font-size: 26px;
    font-weight: 500;
    margin: 0;
    color: #292929;
`
const Description = styled.p`
    font-size: 14px;
    margin: 0;
    margin-top: 6px;
    color: #595959;
`

const Add = styled.button`
    width: 50px;
    height: 50px;
    background-color: white;
    margin: auto 0;
    border-radius: 100px;
    border: none;
    box-sizing: border-box;
    padding: 13px;
`

const Submit = styled.button`
    height: 50px;
    font-size: 17px;
    border: none;
    background-color: #10B981;
    color: white;
    border-radius: 19px;
`