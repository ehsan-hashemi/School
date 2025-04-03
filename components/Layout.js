// components/Layout.js
import Head from "next/head";

export default function Layout({ children, title = "وب‌سایت مدرسه" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header style={{ background: "#f0f0f0", padding: "10px", textAlign: "center" }}>
        <h2>مدرسه ما</h2>
      </header>
      <main style={{ maxWidth: "1200px", margin: "20px auto", padding: "20px" }}>
        {children}
      </main>
      <footer style={{ background: "#f0f0f0", textAlign: "center", padding: "10px" }}>
        <p>تمام حقوق محفوظ است © 2025</p>
      </footer>
    </>
  );
}