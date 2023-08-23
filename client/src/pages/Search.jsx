import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useKeywordContext } from "../context/SearchKeywordContext";
import { styled } from "styled-components";
import api from "../components/utils/send";
import { BlueButton } from "../components/common/Button";
import QuestionsList from "../components/home/QuestionsList";

const SearchHeadLine = styled.div`
  width: 100%;
  margin-top: 26px;
  .infinite-scroll {
    width: 100%;
    height: 50px;
    bottom: 0px;
  }
  .search-headline-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  div > h1 {
    max-width: 100%;
    height: 35px;
    font-size: 27px;
    margin-left: 25px;
  }
  div > button {
    padding: 0px;
    height: 37.8px;
    width: 103px;
    margin-right: 48px;
    font-size: 13px;
    font-weight: bold;
  }
  .counter-container {
    width: 1100px;
    height: 30px;
    margin-right: 24px;
    border-bottom: 1px solid var(--border);
  }
  .counter-container > h3 {
    margin-left: 25px;
    font-size: 17px;
    font-weight: 500;
  }
  .result-container {
    width: 1100px;
    height: 281px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 24px 24px 24px;
  }
  .search-icon {
    width: 96px;
    height: 96px;
    color: var(--black-400);
  }
  .result-container > h2 {
    margin-top: 12px;
    margin-bottom: 13px;
    font-size: 17px;
    font-weight: 600;
  }
  .keyword-wrap {
    font-size: 17px;
    font-weight: bolder;
  }
  .result-container > h3 {
    font-size: 13px;
  }
  .result-filtered-container {
    width: 100%;
    max-width: 1100px;
  }
`;

export default function Search() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const { keywordHandler } = useKeywordContext();
  const [questionsData, setQuestionsData] = useState([]);

  //GET : /questions/search?keyword={keyword}
  const endpoint = `/questions/search?keyword=${keyword}`;
  useEffect(() => {
    const fetchData = async () => {
      const responseData = await api.get(endpoint).then((res) => res.data);
      setQuestionsData(responseData.data);
    };
    fetchData();
  }, [keyword]);

  const askBtnHandler = () => {
    navigate("/ask");
  };

  return (
    <SearchHeadLine>
      <div className="search-headline-container">
        <h1>Search Results</h1>
        <BlueButton
          onClick={() => {
            askBtnHandler();
          }}
        >
          Ask Question
        </BlueButton>
      </div>
      <div className="counter-container">
        <h3>{`${questionsData.length} questions`}</h3>
      </div>
      {questionsData.length > 0 ? (
        <QuestionsList questionsFiltered={questionsData}></QuestionsList>
      ) : (
        <div className="result-container">
          <img src="/images/searchImg.png" alt="searchIcon" className="search-icon"></img>
          <h2>
            We couldn't find anything for <span className="keyword-wrap">{keyword}</span>
          </h2>
          <h3>Try different or less specific keywords.</h3>
        </div>
      )}
      <div className="infinite-scroll"></div>
    </SearchHeadLine>
  );
}
