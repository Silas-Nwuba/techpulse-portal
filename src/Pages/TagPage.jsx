import React, { useEffect } from "react";
import Tag from "../ui/Tag";

const TagPage = () => {
  useEffect(() => {
    document.title = "TekMatas | Tag";
    return () => {
      document.title = "TekMatas | Tag";
    };
  }, []);
  return <Tag />;
};
export default TagPage;
