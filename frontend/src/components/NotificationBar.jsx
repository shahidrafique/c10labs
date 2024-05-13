import Markdown from "react-markdown";
import MarkdownLink from "./MarkdownLink";

export default function NotificationBar({ content, hide }) {
  return (
    <div className="notification-bar">
      <div className="container">
        <Markdown components={{ a: MarkdownLink }}>{content}</Markdown>

        <button onClick={hide} className="material-symbols-rounded">
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
