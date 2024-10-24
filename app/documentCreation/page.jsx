
import React from "react";
import DocumentCreationFirst from "../components/documentCreation/DocumentCreationFirst";
import DocumentCreationSecond from "../components/documentCreation/DocumentCreationSecond";
import DocumentCreationFourth from "../components/documentCreation/DocumentCreationFourth";
import DocumentCreation from "../components/Layouts/DocumentCreation";
import GenerateDocument from "../components/documentCreation/GenerateDocument";
import Template1 from "../components/documentCreation/ResumeTemplete/ResumeTemplate1";
const page = () => {
  return (
    <>
      <DocumentCreation>
        <div>
          {/* <DocumentCreationFourth /> */}
          <DocumentCreationFirst/>
          {/* <Template1/> */}
          {/* <GenerateDocument/> */}
        </div>
      </DocumentCreation>
    </>
  );
};

export default page;
