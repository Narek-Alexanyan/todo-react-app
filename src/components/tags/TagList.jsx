import React, { memo, useEffect, useState } from "react";
import TagCircle from "./TagCircle";
import { getTagColor } from "../../helpers/getTagColor";
import { useDidMountEffect } from "../../hooks/useDidMountEffect";

const TagList = memo(({ list, className, handleList, tags = [] }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  useDidMountEffect(() => {
    const updatedSelectedTags = selectedTags.map((tag) => {
      return {
        id: tag.id,
        value: tag.value,
      };
    });
    handleList(updatedSelectedTags);
  }, [selectedTags]);

  useEffect(() => {
    if (tags.length) setSelectedTags(tags);
  }, []);

  const handleSelectedTags = (tag) => {
    if (selectedTags.some((item) => item.id === tag.id)) {
      let tags = selectedTags.filter((el) => el.id !== tag.id);

      setSelectedTags(tags);
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const getActiveTag = (tagId) => {
    const activeTag = selectedTags.find((item) => item.id === tagId);

    return tagId === activeTag?.id;
  };

  return (
    <div className={`flex ${className}`}>
      {list.map((tag) => (
        <div
          key={tag.id}
          className={`flex items-center gap-2 cursor-pointer py-2 px-3 rounded-xl ${
            getActiveTag(tag.id) ? "bg-todo-light-gray" : ""
          }`}
          onClick={() => handleSelectedTags(tag)}
        >
          <TagCircle color={getTagColor(tag.value)} />
          <p className="text-base text-todo-black">{tag.value}</p>
        </div>
      ))}
    </div>
  );
});

export default TagList;
