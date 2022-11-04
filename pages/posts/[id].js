import Layout from '../../components/layout';
import Counts from '../../components/counts';

import { getAllCounts, getAverageCounts } from '../../lib/counts';
import Head from 'next/head';

export async function getStaticProps({ params }) {
  const gymData = await getAverageCounts(params.id);
  console.log(gymData)
  return {
    props: {
      gymData,
    },
    revalidate: 60
  };
}

export async function getStaticPaths() {
  const paths = await getAllCounts();
  return {
    paths,
    fallback: false,
  };
}

export default function Gym({ gymData }) {
  return (
    <Layout>
      <Head>
        <title>
          {gymData.name}
        </title>
      </Head>
      <Counts postData={gymData} />
    </Layout>
  );
}
