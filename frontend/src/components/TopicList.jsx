import React from "react";
import "styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  return (
    <nav className="top-nav-bar__topic-list">
      {props.topics.map((topicData) => (
        <TopicListItem key={topicData.id} topic={topicData} />
      ))}
    </nav>
  );
};

export default TopicList;
