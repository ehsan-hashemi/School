export default function handler(req, res) {
    const { newNews } = req.body;
    // ذخیره خبر جدید در دیتابیس یا فایل محلی (مثال ساده)
    console.log(`خبر جدید: ${newNews}`);
    res.status(200).json({ message: "خبر جدید اضافه شد!" });
}