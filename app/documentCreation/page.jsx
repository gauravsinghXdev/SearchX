import React from "react";
import DocumentCreationFirst from "../components/documentCreation/DocumentCreationFirst";
import DocumentCreationSecond from "../components/documentCreation/DocumentCreationSecond";
import DocumentCreationFourth from "../components/documentCreation/DocumentCreationFourth";
import DocumentCreation from "../components/Layouts/DocumentCreation";
import DocumentCreationThird from "../components/documentCreation/DocumentCreationThird";
const page = () => {
  return (
    <>
      <DocumentCreation>
        <div>
          {/* <DocumentCreationFirst /> */}
          <DocumentCreationSecond />
          {/* <DocumentCreationFourth /> */}
          {/* <DocumentCreationThird /> */}
        </div>
      </DocumentCreation>
    </>
  );
};

export default page;
