import StrapiImage from "./StrapiImage";

export default function Sponsors({ logos }) {
  return (
    <section className="sponsors">
      <div className="logos-container">
        <ul>
          {logos.map(({ logos: [{ url }] }) => (
            <li>
              <StrapiImage src={url} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
