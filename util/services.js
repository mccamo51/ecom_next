import axios from "axios";

import React from "react";

function makeAxiosRequest(method, urlPath, data) {
  /* Auxiliar function to make different axios requests to my endpoint */

  return axios({
    method,
    url: `${process.env.NEXT_PUBLIC_LOCAL_BASE_URL}${urlPath}`,
    data,
  })
    .then((res) => res.data)
    .catch((err) => {
      if (err.response) {
        /* 
            The request was made and the server responded with a status code
            that falls out of the range of 2xx
          */
        throw err.response.data;
      } else if (err.request) {
        // Client never received a response, or request never left
        throw err.request;
      } else {
        // Something happened in setting up the request that triggered an Error
        throw new Error(`Error: ${err.message}`);
      }
    });
}
export default makeAxiosRequest;
