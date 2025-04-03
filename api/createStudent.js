import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const studentsPath = path.join(process.cwd(), 'students');

    if (fs.existsSync(studentsPath)) {
        const students = fs.readdirSync(studentsPath);
        res.status(200).json({ students });
    } else {
        res.status(404).json({ message: "هیچ دانش‌آموزی یافت نشد." });
    }
}