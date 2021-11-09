import Layout from "../components/layout"
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'

export default function AboutUs() {
  return (
    <Layout>
      <Head>
        <title>About Us</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>About Us</h2>
        <ul className={utilStyles.list}>
          <li>sdfsdf</li>
        </ul>
      </section>
    </Layout>
  )
}