import React from "react";
import { useParams } from "react-router-dom";

function CourseDetailTypeId() {
  // Sử dụng useParams để lấy dữ liệu params về
  const data = useParams();
  return (
    <div>
      Course: Tên khóa học - {data.type} Id khóa học: {data.id}
    </div>
  );
}

export default CourseDetailTypeId;
