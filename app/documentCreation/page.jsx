import React from "react";
import DocumentCreationFirst from "../components/documentCreation/DocumentCreationFirst";
import DocumentCreationSecond from "../components/documentCreation/DocumentCreationSecond";
import DocumentCreationFourth from "../components/documentCreation/DocumentCreationFourth";
import DocumentCreation from "../components/Layouts/DocumentCreation";
const page = () => {
  return (
    <>
      <DocumentCreation>
        <div>
          <DocumentCreationFourth />
        </div>
      </DocumentCreation>
    </>
  );
};

export default page;
