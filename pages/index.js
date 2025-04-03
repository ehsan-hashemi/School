// pages/index.js
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="اخبار مدرسه">
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>اخبار مدرسه</h1>
        <div style={{ margin: "20px 0" }}>
          <article style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <h2>خبر ۱</h2>
            <p>جزئیات خبر شماره ۱...</p>
          </article>
          <article style={{ border: "1px solid #ccc", padding: "10px" }}>
            <h2>خبر ۲</h2>
            <p>جزئیات خبر شماره ۲...</p>
          </article>
        </div>
        <Link href="/login">
          <a style={{ fontSize: "20px", textDecoration: "underline" }}>ورود</a>
        </Link>
      </div>
    </Layout>
  );
}