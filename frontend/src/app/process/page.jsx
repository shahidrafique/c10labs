import Banner from "@/components/Banner";
import { getProcessPage } from "../../../api/controllers/processPageController";
import Markdown from "react-markdown";

export default async function Process() {
  const props = await getProcessPage();
  const { banner = {}, processes = [] } = props ?? {};

  return (
    <main>
      <Banner {...banner} />

      <section className="process">
        <div className="container">
          {processes.map(({ title = "", content = "" }) => (
            <div key={title} className="process__box">
              <div className="process__box__title">{title}</div>
              <div className="process__box__image"></div>
              <div className="process__box__content">
                <Markdown>{content}</Markdown>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
