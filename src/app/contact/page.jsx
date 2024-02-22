import Banner from "@/components/Banner";
import { getContactPage } from "../../../api/controllers/contactPageController";

export default async function Contact() {
  const props = await getContactPage();
  const { banner, form } = props;

  return (
    <main>
      <Banner {...banner} />
      <section className="contact">
        <div className="container">HubSpot Form</div>
      </section>
    </main>
  );
}
