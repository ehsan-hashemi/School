// pages/admin/index.js
import Layout from "../../components/Layout";

export default function AdminPanel() {
  return (
    <Layout title="پنل مدیر">
      <div style={{ padding: "20px" }}>
        <h1>پنل مدیر</h1>
        <section style={{ marginBottom: "20px" }}>
          <h2>افزودن کاربران جدید</h2>
          <p>در این بخش می‌توانید دانش‌آموز، معلم یا مدیر جدید اضافه کنید.</p>
          {/* فرم و منطق افزودن کاربر در آینده */}
        </section>
        <section style={{ marginBottom: "20px" }}>
          <h2>مدیریت اخبار مدرسه</h2>
          <p>اینجا می‌توانید اخبار مدرسه را اضافه، ویرایش یا حذف نمایید.</p>
          {/* فرم‌ها و لیست اخبار */}
        </section>
        <section>
          <h2>لیست دانش‌آموزان</h2>
          <p>مشاهده لیست دانش‌آموزان به همراه جزئیات مربوط به آن‌ها.</p>
          {/* نمایش نتایج به صورت جدول یا لیست */}
        </section>
      </div>
    </Layout>
  );
}