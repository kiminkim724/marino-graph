import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { getAllCounts } from '../lib/counts';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
  const allGymData = await getAllCounts();
  return {
    props: {
      allGymData,
    },
  };
}

export default function Home({ allGymData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXl}>NEU Gym Headcounts</h1>
        <ul className={utilStyles.list}>
          {allGymData.map(({ params }) => (
            <li className={utilStyles.listItem} key={params.id}>
              <Link href={`/posts/${params.id}`}>
                <a>{params.gym}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}