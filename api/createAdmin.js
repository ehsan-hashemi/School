import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const { adminName } = req.body;
    const folderPath = path.join(process.cwd(), 'admins', adminName);

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        res.status(200).json({ message: `پوشه برای ${adminName} ایجاد شد.` });
    } else {
        res.status(400).json({ message: "این پوشه قبلاً موجود است!" });
    }
}
