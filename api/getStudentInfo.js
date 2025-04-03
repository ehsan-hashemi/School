import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const { studentName } = req.body;
    const studentPath = path.join(process.cwd(), 'students', studentName);

    if (fs.existsSync(studentPath)) {
        const files = fs.readdirSync(studentPath);
        res.status(200).json({ studentName, files });
    } else {
        res.status(404).json({ message: `هیچ اطلاعاتی برای ${studentName} یافت نشد.` });
    }
}