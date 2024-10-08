import type { Metadata } from "next";
import { Banner } from "./components/home/Banner";
import { Catalogue } from "./components/home/Catalogue";
import { Contact } from "./components/home/Contact";
import { FooterComponent } from "./components/Footer";
import { Category } from "./components/home/Category";

export default function IndexPage() {
  return (
    <div>
      <Banner />
      <div className="min-w-screen h-fit bg-slate-50 p-5">
        <Category />
        <Catalogue />
      </div>
      <Contact />
      <FooterComponent />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
