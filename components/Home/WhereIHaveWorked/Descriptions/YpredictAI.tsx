import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function YpredictAI() {
  const tasks = [
    {
      text: "Developed scalable frontend features using React, TypeScript, GraphQL, and component libraries like Ant Design (AntD), within a microservices-based architecture.",
      keywords: ["React", "TypeScript", "GraphQL", "microservices"],
    },
    {
      text: "Utilized Docker to standardize development environments across frontend and backend services, improving integration and deployment consistency.",
      keywords: ["Docker", "frontend", "backend"],
    },
    {
      text: "Translated Figma designs into responsive, interactive client components, ensuring pixel-perfect implementation and enhanced user experience.",
      keywords: ["Figma", "responsive", "user experience"],
    },
    {
      text: "Actively collaborated with cross-functional teams in Scrum ceremonies, contributing to sprint planning, daily stand-ups, and retrospectives.",
      keywords: ["retrospectives", "sprint planning", "collaborated"],
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
            Sept 2025 - Jun 2025 [Contract]
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() =>
              window.open("https://www.comfactechoptions.com/", "_blank")
            }
          >
            comfactechoptions.com
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
