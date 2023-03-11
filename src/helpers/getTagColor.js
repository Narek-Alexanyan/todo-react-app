import { tags } from "../constants/tags"

export const getTagColor = (value) => {
  return tags.find(tag => tag.value === value).color
}