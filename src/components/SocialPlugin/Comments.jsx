import React from "react";

const Comments = ({ dataHref }) => {
  console.log(dataHref);
  return (
    <div
      class="fb-comments"
      data-href={`https://khan-pets-client.vercel.app/products/${dataHref}`}
      data-width=""
      data-numposts="5"
    ></div>
  );
};

export default Comments;
