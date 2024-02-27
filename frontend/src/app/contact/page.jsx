import Banner from "@/components/Banner";
import { getContactPage } from "../../../api/controllers/contactPageController";

export default async function Contact() {
  const props = await getContactPage();
  const { banner = {}, form } = props ?? {};

  return (
    <main>
      <Banner {...banner} />
      <section className="contact">
        <div className="container">
          {/* <section className="contact-form">
            {form.input.map(({ label, type }) => (
              <div className="input-wrapper" key={label}>
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
          </section> */}
        </div>
      </section>
    </main>
  );
}
