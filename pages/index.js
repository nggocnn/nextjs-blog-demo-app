import Layout from "../components/layout"
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'
import Link from "next/link"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Home</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Home Page</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href={`/posts`}>
              <a>Posts</a>
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href={{
              pathname:"/about-us",
              query: {id: "12345678"}
            }}
              as="about-us-with-id"
            >
              <a>About Us</a>
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  )
}