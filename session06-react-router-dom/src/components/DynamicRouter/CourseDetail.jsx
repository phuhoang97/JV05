import React from "react";
import { useParams } from "react-router-dom";

function CourseDetail() {
  // Sử dụng useParams
  const param = useParams();
  console.log(param);
  return <div>CourseDetail: {param.id}</div>;
}

export default CourseDetail;
