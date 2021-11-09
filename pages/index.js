import Layout from "../components/layout"
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Home</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Home Page</h2>
        <ul className={utilStyles.list}>
          <li>ádfsdf</li>
        </ul>
      </section>
    </Layout>
  )
}