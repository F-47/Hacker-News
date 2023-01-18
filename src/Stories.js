import React from "react";
import { useGlobalContext } from "./context";

const Stories = () => {
  let { isLoading, stories, removeStory } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <div className="stories">
      {stories.map((story) => {
        
        let { created_at, title, url, author,objectID } = story;
        let now = new Date()
        let nowYear = parseInt(now.toLocaleDateString('zh-Hans-CN').split("/")[0])
        let publishYear = parseInt(created_at.split("T")[0].split('-')[0])
        let differ = nowYear - publishYear

        return <div key={objectID} className="story">
            {title && <>
            <div className="title">{title}</div>
            <div className="info">
              By {author} | {differ===1 ? "1 year ago" : differ===0 ? "a year ago" : differ+" years ago"} 
            </div>
            <div className="btns">
              <a
                href={url}
                className="readMoreBtn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
              <button className="removeBtn" onClick={()=>removeStory(objectID)}>Remove</button>
            </div>
          </>}
          </div>
      })}
    </div>
  );
};

export default Stories;
