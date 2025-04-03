// pages/login/index.js
import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();

    if (data.success) {
      // هدایت به پنل براساس نقش کاربر
      if (data.role === "student") {
        router.push("/student");
      } else if (data.role === "teacher") {
        router.push("/teacher");
      } else if (data.role === "admin") {
        router.push("/admin");
      }
    } else {
      setError("ورود ناموفق است. لطفا اطلاعات را بررسی کنید.");
    }
  };

  return (
    <Layout title="ورود به سایت">
      <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
        <h1>صفحه ورود</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>
              نام کاربری:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              رمز عبور:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </label>
          </div>
          <button type="submit" style={{ padding: "10px 20px" }}>ورود</button>
        </form>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </div>
    </Layout>
  );
}