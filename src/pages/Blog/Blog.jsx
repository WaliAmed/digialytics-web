import React from "react";
import { MutatingDots } from "react-loader-spinner";

const Blog = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "50%",
          marginBottom: "50%",
        }}
      >
        <MutatingDots
          height="100"
          width="100"
          color={"var(--main-color-2)"}
          secondaryColor="black"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <p>Coming Soon!</p>
      </div>
    </div>
  );
};

export default Blog;
