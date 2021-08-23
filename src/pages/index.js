import Head from "next/head";
import { ILCircle } from "src/assets";
import { api } from "src/consts";
import { Category, Client, Course, Footer, Header, Hero } from "src/parts";

function Home({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>Bwa Micro</title>
      </Head>

      <main>
        <section className="header-clipping pt-8 flex flex-1">
          <ILCircle className="absolute left-0 bottom-0" />
          <div className="sunshine"></div>
          <div className="container mx-auto">
            <Header />
            <Hero />
          </div>
        </section>
        <section className="mx-auto mt-24 container">
          <Client />
        </section>
        <section className="mx-auto mt-24 container">
          <Course data={data} />
        </section>
        <section className="mx-auto mt-24 container">
          <Category />
        </section>
        <section className="px-24 bg-indigo-1000 pt-12 pb-8 mt-24">
          <Footer />
        </section>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  try {
    const res = await api.all();
    const data = res.data;
    return { data };
  } catch (err) {
    return err;
  }
};

export default Home;
