import React from "react";
import "../styles/TopicListItem.scss";


const TopicListItem = ({topic}) => {
  return (
    <div className="topic-list__item">
      <h1>{topic.title}</h1>
    </div>
  );
};

export default TopicListItem;
 