import { Fragment } from "react";
import Header from "../headers/Header";
import Main from "../main/Main";

export default function Home({ lang }) {
  return (
    <Fragment>
      <Header lang={lang} />
      <Main lang={lang} />
    </Fragment>
  );
}
