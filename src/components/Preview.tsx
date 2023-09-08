import React from "react";

function Preview({ url, title, desc, domain, imgUrl }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid lightgrey",
      }}
    >
      <a
        href={url}
        target="_blank"
        style={{
          // width: "70%",
          padding: "20px",
        }}
      >
        <strong style={{ fontSize: "14px" }}>{title}</strong>
        <br></br>
        <em
          style={{
            fontSize: "12px",
            color: "var(--ifm-menu-color)",
          }}
        >
          {desc}
        </em>
        <br></br>
        {/* <br></br> */}
        <strong style={{ fontSize: "12px", opacity: "0.7", fontWeight: "700" }}>
          {domain}
        </strong>
      </a>
      <a href={url} target="_blank">
        <div
          style={{
            width: "150px",
            height: "150px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${imgUrl})`,
          }}
        ></div>
      </a>
    </div>
  );
}

export default Preview;
