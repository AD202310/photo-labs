import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";


const TopicList = ({ topics, getPhotosByTopic }) => {
  // Mapping through the topics array to create TopicListItem components
  const topicList = topics.map(topic => {
    return (
      <TopicListItem 
        topic={topic} 
        key={topic.id} 
        getPhotosByTopic={getPhotosByTopic} 
      />
    );
  });

  return (
    // Container div for the TopicList component
    <div className="top-nav-bar__topic-list" >
      {/* Rendering the list of TopicListItem components */}
      {topicList}
    </div>
  );
};


export default TopicList;
