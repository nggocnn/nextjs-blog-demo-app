import Layout from "../components/layout"
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'

export default function AboutUs({ id }) {
  return (
    <Layout>
      <Head>
        <title>About Us</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>About Us</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <h3>Nguyễn Như Ngọc</h3>
          </li>
          <li className={utilStyles.listItem}>
            <h3>Hồ Mạnh Tân</h3>
          </li>
        </ul>
        <h2>{id}</h2>
      </section>
    </Layout>
  )
}

AboutUs.getInitialProps = ({ query: { id } }) => {
  return { id }
}