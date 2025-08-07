import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EnsVision() {
  const tasks = [
    {
      text: "Built and maintained a health management system using Angular, Node.js, NestJS, and MongoDB, delivering reliable end-to-end functionality",
      keywords: ["Angular", "Node.js", "MongoDB", "NestJS"],
    },
    {
      text: "Designed and implemented secure RESTful APIs, following best practices for data privacy and aligning with HIPAA compliance standards.",
      keywords: ["RESTful APIs", "HIPAA"],
    },
    {
      text: "Collaborated closely with project managers (PMs), product owners (POs), mobile developers, and QA/DevOps teams to ensure the system met usability, performance, and regulatory requirements.",
      keywords: ["teams", "regulatory requirements"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full Stack Developer
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Feb 2024 - Aug 2024 [Contract]
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() =>
              window.open("https://strongwill.great-site.net/", "_blank")
            }
          >
            strongwill.net
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
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
