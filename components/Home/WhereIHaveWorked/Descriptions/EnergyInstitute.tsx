import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EnergyInstitute() {
  const tasks = [
    {
      text: "Lead the development of multiple projects across various government agencies, using ReactJS, JavaScript, TypeScript, Vite, and Material UI (MUI) for fast, maintainable, and scalable front-end solutions.",
      keywords: [
        "Leading",
        "ReactJS",
        "JavaScript",
        "TypeScript",
        "Vite",
        "Material UI (MUI)",
      ],
    },
    {
      text: "Conduct knowledge transfers, peer mentoring, and thorough code reviews, ensuring high-quality contributions through Pull Request evaluations.",
      keywords: ["knowledge transfers", "peer mentoring", "code reviews"],
    },
    {
      text: "Oversee frontend deployment on Amazon Web Services (AWS) via AWS Amplify, including initial setup, custom domain integration, and developer support.",
      keywords: [
        "Amazon Web Services (AWS)",
        "AWS Amplify",
        "support",
        "custom domain",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Lead Front-End Developer
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Oct 2022 - Present [Part-time]
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() =>
              window.open("https://www.ethosinnovations.co/", "_blank")
            }
          >
            ethosinnovations.co
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />{" "}
                {/* Or your preferred color */}
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
