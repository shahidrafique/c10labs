"use client";

import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";
import MarkdownLink from "./MarkdownLink";

export default function NotificationBar({
  content,
  buttonText,
  buttonHref,
  show,
}) {
  const [isVisible, setIsVisible] = useState(show);

  return (
    <div
      className="notification-bar"
      style={{ display: isVisible ? "block" : "none" }}
    >
      <div className="container">
        <Markdown components={{ a: MarkdownLink }}>
          {content.toString()}
        </Markdown>
        {/* {buttonText ? <Link href={}>{buttonText}</Link>: null} */}
        <button
          onClick={() => setIsVisible(false)}
          className="material-symbols-rounded"
        >
          <svg
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 22.5L22 24.5L2.53459e-05 2.5L2.00002 0.5L24 22.5Z"
              fill="white"
            />
            <path d="M0 22.5L2 24.5L24 2.5L22 0.5L0 22.5Z" fill="white" />
          </svg>
        </button>
      </div>
    </div>
  );
}
