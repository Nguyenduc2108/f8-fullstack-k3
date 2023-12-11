import "@/app/assets/sass/page.scss";
import { Fragment } from "react";
import Home from "./[lang]/home/Home";
import { getDictionary } from "../getDictionary";

export default async function Page({ params }) {
  const lang = await getDictionary(params.lang);
  return (
    <Fragment>
      <div className="container">
        <Home lang={lang} />
      </div>
    </Fragment>
  );
}
