import React from "react";
import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {

  const handleTopicClick = () => {
    props.fetchPhotoByTopic(props.topic.id)
    // console.log("TopicItem: ", props.topic)
  }


  return (
    <div className="topic-list__item">
      <h1><a onClick={handleTopicClick}> {props.topic.title}</a></h1>
    </div>
  );
};

export default TopicListItem;
