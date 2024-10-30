import type { Metadata } from "next";
import { Banner } from "./components/home/Banner";
import { TopProducts } from "./components/home/TopProducts";
import { Contact } from "./components/home/Contact";
import { FooterComponent } from "./components/Footer";
import { Category } from "./components/home/Category";
import { Catalogue } from "./components/home/Catalogue";

export default function IndexPage() {
  return (
    <div>
      <Banner />
      <div className="min-w-screen h-fit bg-slate-50 p-5">
        <Category />
        <TopProducts />
      </div>
      <Catalogue/>
      <Contact />
      <FooterComponent />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
