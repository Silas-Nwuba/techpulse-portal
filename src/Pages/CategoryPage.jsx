import React, { useEffect } from "react";
import Category from "../feature/category/Category";

const CategoryPage = () => {
  useEffect(() => {
    document.title = "TekMatas | Category";
    return () => {
      document.title = "TekMatas | Category";
    };
  }, []);
  return <Category />;
};

export default CategoryPage;
