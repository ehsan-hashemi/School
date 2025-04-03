export default function handler(req, res) {
    const news = [
        "اطلاعیه جلسه عمومی روز دوشنبه",
        "شروع کلاس‌ها از هفته آینده",
        "افتتاح بخش جدید کتابخانه مدرسه",
    ];
    res.status(200).json({ news });
}