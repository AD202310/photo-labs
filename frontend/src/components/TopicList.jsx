import React from "react";

import "styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";

const TopicList = () => {
  return (
    <nav className="top-nav-bar__topic-list">
      {topics.map((topicData) => (
        <TopicListItem key={topicData.id} topic={topicData} />
      ))}
    </nav>
  );
};

export default TopicList;
