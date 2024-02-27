import Banner from "@/components/Banner";
import { getContactPage } from "../../../api/controllers/contactPageController";
import Script from "next/script";

export default async function Contact() {
  const props = await getContactPage();
  const { banner, form } = props;

  return (
    <main>
      <Banner {...banner} />
      <section className="contact">
        <div className="container">
          {/* <Script
            charset="utf-8"
            type="text/javascript"
            src="//js.hsforms.net/forms/embed/v2.js"
          />
          <Script src="/contact-form.js" /> */}

          <section className="contact-form">
            {form.input.map(({ label, type }) => (
              <div className="input-wrapper">
                <label>{label}</label> <input type={type} />
              </div>
            ))}
            <div className="input-wrapper">
              <label>message</label> <textarea />
            </div>
            <input
              type="submit"
              className="button button--submit"
              label={form.submitButton.text}
            />
          </section>
        </div>
      </section>
    </main>
  );
}
