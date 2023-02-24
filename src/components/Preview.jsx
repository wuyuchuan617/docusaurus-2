import { LinkPreview } from "@dhaiwat10/react-link-preview";

import React from "react";

function Preview(url) {
  return (
    <LinkPreview
      // cardSize="small"
      // showGraphic={true}
      // maxLine={2}
      // minLine={1}
      url={"https://arc.net/"}
      width="400px"
    />
  );
}

export default Preview;
