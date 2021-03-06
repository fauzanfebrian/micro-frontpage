import Head from "next/head";
import { ILCircle } from "src/assets";
import { api } from "src/consts";
import { Category, Client, Course, Footer, Header, Hero } from "src/parts";

function Home({ data }) {
  return (
    <>
      <Head>
        <title>Micro Course</title>
        <meta
          property="og:title"
          content="Online course with experienced mentor"
        />
        <meta
          property="og:description"
          content="Grow your skills with our online course, many experienced mentor that we have"
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_HOST}/images/il-book.jpeg`}
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta
          property="og:image:alt"
          content="Read more book and get more knowlegde"
        />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_HOST} />
        <meta property="og:type" content="webapp" />
        <meta property="og:locale" content="id_ID" />
      </Head>

      <main>
        <section className="header-clipping pt-10 min-h-screen md:min-h-0">
          <div className="sunshine max-w-full md:block hidden"></div>
          <ILCircle className="absolute left-0 bottom-0 md:block hidden" />
          <div className="container mx-auto h-auto">
            <Header />
            <Hero />
          </div>
        </section>
        <section className="mx-auto mt-24 container pt-8 md:pt-24">
          <Client />
        </section>
        <section className="mx-auto mt-24 container">
          <Course data={data} />
        </section>
        <section className="mx-auto mt-24 container">
          <Category />
        </section>
        <section className="md:px-24 px-0 bg-indigo-1000 pt-12 pb-8 mt-24">
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
