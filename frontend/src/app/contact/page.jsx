import Banner from "@/components/Banner";
import { getContactPage } from "../../../api/controllers/contactPageController";
import Form from "@/components/Form";

export default async function Contact() {
  const props = await getContactPage();
  const { banner = {}, form } = props ?? {};

  return (
    <main>
      <Banner {...banner} />
      <section className="contact">
        <div className="container">
          <div className="contact-form">
            <Form
              region="na1"
              portalId="44606217"
              formId="4f67d4cc-472c-46aa-b1db-f7797315a726"
              shouldResize
            />
          </div>
        </div>
      </section>
    </main>
  );
}
