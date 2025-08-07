import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TrouveTavoie() {
  const tasks = [
    {
      text: "Worked extensively with JavaScript, TypeScript, and React to build performant and responsive user interfaces.",
      keywords: ["JavaScript", "TypeScript", "Next.js", "React"],
    },
    {
      text: "Ensured application reliability through end-to-end testing with Cypress, including payment gateway workflows, and implemented multilingual support for global accessibility.",
      keywords: [
        "Cypress",
        "payment gateway workflows",
        "multilingual support",
      ],
    },
    {
      text: "Collaborated closely with fellow developers, contributing technical insights during regular syncs and code reviews.",
      keywords: ["technical insights", "code reviews"],
    },
    {
      text: "Participated in feature demos to stakeholders and team members, showcasing progress and gathering feedback for iterative improvements.",
      keywords: ["feedback", "progress"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Frontend Developer
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Dec 2020 - Jul 2023 [Full-time]
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("http://prlbpo.technology/", "_blank")}
          >
            prlbpo.technology
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
