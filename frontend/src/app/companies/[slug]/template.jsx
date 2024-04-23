import Banner from "@/components/Banner";
import Link from "next/link";
import { getCompaniesPageHeader } from "../../../../api/controllers/companyHeaderController";
import CompaniesNav from "@/components/CompaniesNav";

export default async function Layout({ children }) {
  const { banner = {}, menu: { links = [] } = {} } =
    await getCompaniesPageHeader();

  return (
    <main>
      <Banner {...banner} />
      <CompaniesNav links={links} />
      {children}
    </main>
  );
}
