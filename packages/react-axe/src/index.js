import React from "react";
import ReactDOM from "react-dom";

const reactAxe = {
  actions: {
    myPackageName: {
      init: () => {
        if (process.env.NODE_ENV !== "production") {
          const axe = require("@axe-core/react");
          axe(React, ReactDOM, 1000);
        }
      },
    },
  },
};

export default reactAxe;