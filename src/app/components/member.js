export default function Member({ title, designation, src, linkedin }) {
  return (
    <div className="member">
      <div className="member__image">
        <img src={src} alt={title} />
      </div>
      <div className="member__content">
        <div className="member__content__name">{title}</div>
        <div className="member__content__designation">{designation}</div>
        <a href={linkedin} className="member__content__linked"></a>
      </div>
    </div>
  );
}
