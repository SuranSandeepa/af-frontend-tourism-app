import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/tours");
  }, []);

  return <></>;
}

export default NotFound;
