import React from "react";
import { useState, useEffect } from "react";
import LoaderComponent from "../LoaderComponent/LoaderComponent";
import { Outlet } from "react-router-dom";
import AOS from "aos";
export default function HandleLoadingComponent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        AOS.init(); 
        AOS.refresh(); 
        setLoading(false); 
      }, 2000);
    };
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);
  return (
    <>
      {loading && <LoaderComponent />}
      {!loading && (
        <div>
          <Outlet />
        </div>
      )}
    </>
  );
}