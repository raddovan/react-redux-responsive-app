import React from "react";
import useFetch from "../../components/Fetch";
import Typography from "@mui/material/Typography";
import AppBar from "../../components/AppBar";

const Gallery = () => {
  const response = useFetch("https://reqres.in/api/users?page=2", {});
  if (!response) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <AppBar />

      <div style={{ marginLeft: 100, marginTop: 100 }}>
        {response.map((item, index) => (
          <div key={index}>
            <Typography
              style={{ color: "#00adb5" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {item.first_name} {item.last_name}
            </Typography>
            <Typography
              style={{ color: "#fff" }}
              variant="body2"
              color="text.secondary"
            >
              email: {item.email}
            </Typography>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
