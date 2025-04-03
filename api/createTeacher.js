import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const { teacherName } = req.body;
    const folderPath = path.join(process.cwd(), 'teachers', teacherName);

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        res.status(200).json({ message: `پوشه برای ${teacherName} ایجاد شد.` });
    } else {
        res.status(400).json({ message: "این پوشه قبلاً موجود است!" });
    }
}