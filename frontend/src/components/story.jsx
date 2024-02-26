import Link from "next/link";
import StrapiImage from "./StrapiImage";

const label = {
  event: "Register",
  press: "Read More",
  video: "Watch",
};
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function Story({
  title,
  src,
  type,
  link,
  eventDate,
  inner = false,
}) {
  const date = new Date(Date.parse(eventDate));
  return (
    <article className={inner ? "story story--inner" : "story"}>
      <div className="story__image">
        <StrapiImage src={src} alt={title} />
      </div>
      <div className="story__content">
        <div className="upper">
          <div className="tag">
            {type}
            {/* {months[date.getMonth()]} {date.getDate()}, */}
            {/* {date.getFullYear()} */}
          </div>
          <h3 className="story__content__title">{title}</h3>
        </div>
        <div className="story__content__more">
          {type == "event" && Date.parse(eventDate) < Date.now() ? (
            "Event Ended"
          ) : (
            <Link href={link} target="_blank" className="button__more">
              {label[type]}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
