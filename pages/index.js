import Head from "next/head";
import InnerContext from "../Context";
import {
  Conatct,
  Footer,
  Header,
  Main,
  Price,
  Process,
  Protfolio,
  Service,
  Testimonial,
} from "../Components";
export default function Home() {
  return (
    <InnerContext>
      <Head>
        <title>Nu Terra Labs </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Main />
      </div>
      <Service />
      <Process />
      <Protfolio />
      <Conatct />
     
      <div className="bg-gray-900">
        <Price />
        <Footer />
      </div>
    </InnerContext>
  );
}
