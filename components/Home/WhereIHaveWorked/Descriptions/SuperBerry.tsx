import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function SuperBerry() {
  const tasks = [
    {
      text: "Engineered robust and responsive web applications using React, Vue, and collaborated on backend services built with Python and Django.",
      keywords: ["React", "Vue", "Python", "Django"],
    },
    {
      text: "Developed and consumed RESTful APIs, and worked with MySQL to support secure and efficient frontend data handling.",
      keywords: ["RESTful APIs", "MySQL"],
    },
    {
      text: "Integrated several gateway payments for seamless and secure payment processing, enhancing the user checkout experience.",
      keywords: ["gateway payments"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Junior Software Developer
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            July 2019 - Mar 2020 [Full-time]
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() =>
              window.open("https://www.traxiontech.net/", "_blank")
            }
          >
            traxiontech.net
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
