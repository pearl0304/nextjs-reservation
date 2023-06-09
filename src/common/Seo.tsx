import Head from "next/head";

type SeoType = {
  title: string
}

export default function Seo({title}: SeoType) {
  return (
    <Head>
      <title>{title} | HungryTable</title>
    </Head>
  )
}
