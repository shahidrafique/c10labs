import StrapiImage from "./StrapiImage";

export default function Sponsors() {
  return (
    <section className="sponsors">
      <div className="logos-container">
        <ul>
          <li>
            <StrapiImage src="/sponsors/nvidia.png" alt="" />
          </li>
          <li>
            <StrapiImage src="/sponsors/cic.png" alt="" />
          </li>
          <li>
            <StrapiImage src="/sponsors/jp-morgan.png" alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
}
