import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  LineSeries,
  Legend,
  Tooltip,
} from "@devexpress/dx-react-chart-material-ui";
import {
  ValueScale,
  EventTracker,
  Animation,
} from "@devexpress/dx-react-chart";
import styled from "styled-components";

export function Grid() {
  const data = [
    {
      major: "멀티미디어",
      grade: 3.0,
      hakjeom: 4.0,
    },
    {
      major: "C언어",
      grade: 2.8,
      hakjeom: 4.0,
    },
    {
      major: "디지털공학개론",
      grade: 3.4,
      hakjeom: 4.0,
    },
    {
      major: "PC활용",
      grade: 2.9,
      hakjeom: 4.0,
    },
    {
      major: "정보통신개론",
      grade: 3.8,
      hakjeom: 4.0,
    },
    {
      major: "유비쿼터스개론",
      grade: 4.0,
      hakjeom: 4.0,
    },
  ];
  return (
    <>
      <ChartContainer>
        <Paper>
          <Chart data={data}>
            <ValueScale name="grade" />
            <ArgumentAxis />
            <ValueAxis scaleName="grade" showGrid={false} showLine showTicks />
            <BarSeries
              name="과목별 성적"
              valueField="grade"
              argumentField="major"
              scaleName="grade"
            />
            <Animation />
            <Legend />
            <EventTracker />
            <Tooltip />
          </Chart>
        </Paper>
      </ChartContainer>
      <GradeContainer>
        <GradeContainer__header>
          <h2>1학년 1학기</h2>
          <h4>평점 0 전공 0 취득 0</h4>
        </GradeContainer__header>
        <GradeContainer__gradeHeader>
          <div>
            <span>과목명</span>
          </div>
          <div>
            <span>학점</span>
            <span>전공</span>
            <span>성적</span>
          </div>
        </GradeContainer__gradeHeader>
      </GradeContainer>
    </>
  );
}

const ChartContainer = styled.div`
  width: 60%;
  margin: 3rem auto;
`;

const GradeContainer = styled.div`
  display: block;
  margin: 1rem auto;
`;

const GradeContainer__header = styled.div`
  display: flex;
  flex-direction: column;
  justify-contentl: center;
  align-items: center;
  padding: 1rem 1rem;
`;

const GradeContainer__gradeHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 2rem;
`;
