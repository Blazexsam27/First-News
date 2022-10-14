import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function FullPost() {
  const location = useLocation();
  const data = location.state.from;
  useEffect(() => {});

  return <div>FullPost</div>;
}
