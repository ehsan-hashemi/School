// pages/api/login.js
const users = [
    { username: "student1", password: "pass123", role: "student" },
    { username: "teacher1", password: "pass123", role: "teacher" },
    { username: "admin1", password: "pass123", role: "admin" }
  ];
  
  export default function handler(req, res) {
    if (req.method === "POST") {
      const { username, password } = req.body;
      const user = users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        res.status(200).json({ success: true, role: user.role });
      } else {
        res.status(401).json({ success: false });
      }
    } else {
      res.status(405).json({ message: "روش نامعتبر" });
    }
  }  