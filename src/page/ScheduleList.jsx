import styled from "styled-components"
import { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import { ChevronLeft } from 'lucide-react';
import moment from "moment";


export default function ScheduleList(){

    const [value, onChange] = useState(new Date());//얘는 뭐지
    const list = ['2024-07-30', '2024-08-01', '2024-08-15']

    return(
        <Container>
        <Link style={{ width: 'fit-content' }} to='/'><ChevronLeft /></Link>
        <div>
          <Calendar
            onChange={onChange}
            value={value}

            formatDay={(locale, date) => moment(date).format("DD")}
            view="month"
            prev2Label={null}
            next2Label={null}
            // tileContent={addContent}
            showNeighboringMonth={false}
            
            tileContent={({ date, view }) => {

                const html = [];
                if (list.find((x) => x === moment(date).format('YYYY-MM-DD'))) {
                  html.push(<Dot></Dot>);
                }
                return (
                  <>
                  <div className="flex justify-center items-center absoluteDiv">
                    {html}
                  </div>
                  </>
                );
            }}
            />
        </div>
        {moment(value).format("YYYY년 MM월 DD일")}

        </Container>
    )
}

const Container = styled.div`
  max-width: 400px;
  background-color: white;
  border:solid 1px #E5E7EB;
  margin: 0px auto;
  min-height: 100svh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

const Dot = styled.div`
background-color: #ff6060;
width: 8px;
height: 8px;
border-radius: 50%;
margin: 0 auto;
margin-top: 10px;
`