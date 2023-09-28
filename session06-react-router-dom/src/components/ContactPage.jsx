import React from "react";
import { useLocation } from "react-router-dom";

function ContactPage() {
  // Sử dụng useLocation
  const location = useLocation();
  console.log(location);
  return <div>ContactPage</div>;
}

export default ContactPage;
