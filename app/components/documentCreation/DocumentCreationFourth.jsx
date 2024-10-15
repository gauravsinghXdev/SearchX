import React from "react";
import style from "@/styles/documentCreation/documentcreationfourth.module.css";
import template1 from "@/public/documentCreation/template1.png";
import Image from "next/image";
const DocumentCreationFourth = () => {
  const recent = [
    {
      image: template1,
      title: "Business Proposals",
    },
    {
      image: template1,
      title: "Contracts and Agreements",
    },
    {
      image: template1,
      title: "Resumes and CVs",
    },
    {
      image: template1,
      title: "Invoices and Receipts",
    },
    {
      image: template1,
      title: "Case Studies",
    },
  ];

  const BussinessAndFinance = [
    {
      image: template1,
      title: "Meeting Minutes",
    },
    {
      image: template1,
      title: "Project Plans",
    },
    {
      image: template1,
      title: "Financial Reports",
    },
    {
      image: template1,
      title: "Marketing Strategies",
    },
    {
      image: template1,
      title: "Product Catalogs",
    },
    {
      image: template1,
      title: "Research Papers",
    },
  ];
  const personalAndProfessional = [
    {
      image: template1,
      title: "Sales Presentations",
    },
    {
      image: template1,
      title: "Training Manuals",
    },
    {
      image: template1,
      title: "Customer Surveys",
    },
    {
      image: template1,
      title: "Legal Documents",
    },
    {
      image: template1,
      title: "Business Reviews",
    },
    {
      image: template1,
      title: "White Papers",
    },
    {
      image: template1,
      title: "Company Policies",
    },
    {
      image: template1,
      title: "Social Media Guidelines",
    },
    {
      image: template1,
      title: "Product Specifications",
    },
    {
      image: template1,
      title: "User Guides",
    },
    {
      image: template1,
      title: "Annual Reports",
    },
    {
      image: template1,
      title: "Feedback Forms",
    },
  ];
  const legalContract = [
    {
      image: template1,
      title: "Employee Handbooks",
    },
    {
      image: template1,
      title: "Instruction Manuals",
    },
    {
      image: template1,
      title: "Service Agreements",
    },
    {
      image: template1,
      title: "Market Research",
    },
    {
      image: template1,
      title: "Presentation Decks",
    },
    {
      image: template1,
      title: "Training Plans",
    },
    {
      image: template1,
      title: "Proposal Templates",
    },
    {
      image: template1,
      title: "Quality Assurance Documents",
    },
    {
      image: template1,
      title: "Survey Results",
    },
    {
      image: template1,
      title: "Licensing Agreements",
    },
    {
      image: template1,
      title: "Vendor Contracts",
    },
    {
      image: template1,
      title: "Business Plans",
    },
  ];

  return (
    <>
      <div className={`${style.maincontainer}`}>
        <div className={` ${style.frame}`}>
          <div className={` ${style.innerframe}`}>
            {/* first row---------------------------- */}
            <div className={`${style.framefirst}`}>
              <div className={`${style.frameheading}`}>
                <h4 className="text-[16px] font-[500]">
                  Recently used templates
                </h4>
              </div>
              <div className={style.templateRow}>
                <div className={style.templeteImgBox}>
                  <button className={style.addButton}>
                    <span className={style.plusIcon}>+</span>
                  </button>

                  <p className="font-[400] text-[11px] text-[#C9C9C9]">
                    New Document
                  </p>
                </div>
                {recent.map((template, index) => (
                  <TemplateCard
                    key={index}
                    image={template.image}
                    title={template.title}
                    description={template.description}
                  />
                ))}
              </div>
            </div>
            {/* first row end------------------------ */}
            {/* second row start--------------------- */}
            <div className={`${style.framefirst}`}>
              <div className={`${style.frameheading}`}>
                <h4 className="text-[16px] font-[500]">Business And Finance</h4>
              </div>
              <div className={style.templateRow}>
                {BussinessAndFinance.map((template, index) => (
                  <TemplateCard
                    key={index}
                    image={template.image}
                    title={template.title}
                    description={template.description}
                  />
                ))}
              </div>
            </div>
            {/* second row end ------------------------ */}
            {/* third row start------------------------------- */}
            <div className={`${style.framefirst}`}>
              <div className={`${style.frameheading}`}>
                <h4 className="text-[16px] font-[500]">
                  Personal and Professional
                </h4>
              </div>
              <div className={style.templateRow}>
                {personalAndProfessional.map((template, index) => (
                  <TemplateCard
                    key={index}
                    image={template.image}
                    title={template.title}
                    description={template.description}
                  />
                ))}
              </div>
            </div>
            {/* third row end --------------------------------- */}
            {/* fourth row -------------------------------------- */}
            <div className={`${style.framefirst}`}>
              <div className={`${style.frameheading}`}>
                <h4 className="text-[16px] font-[500]">Legal Contracts</h4>
              </div>
              <div className={style.templateRow}>
                {legalContract.map((template, index) => (
                  <TemplateCard
                    key={index}
                    image={template.image}
                    title={template.title}
                    description={template.description}
                  />
                ))}
              </div>
            </div>
            {/* fourth row end ------------------------------------ */}
          </div>
        </div>
      </div>
    </>
  );
};

const TemplateCard = ({ image, title, description }) => {
  return (
    <div className={style.templeteImgBox}>
      <div className={`${style.imagecontainer} `}>
        <Image
          src={image}
          alt={title}
          className="mb-2 rounded-[5px] min-w-[112px] min-h-[144px]"
        />
      </div>
      <div className={`${style.textcontainer} `}>
        <h4 className="  text-[11px] text-[#C9C9C9] font-normal leading-[13.31px] tracking-[-0.02em] text-center">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default DocumentCreationFourth;
