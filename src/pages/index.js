import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Productfeed from "../components/Productfeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      {/* Header  */}
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner  */}
        <Banner />
        {/* ProductItems  */}
        <Productfeed products={products} />
      </main>
    </div>
  );
}
//next js application
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return { props: { products } };
}

//GET >>> https://fakestoreapi.com/products
