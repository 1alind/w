// server.js (الكود المعدل)

// استيراد وحدة HTTP المدمجة
const http = require('http');

// 💡 التعديل الرئيسي: استخدم المنفذ المعين بواسطة البيئة (Railway) أو استخدم 3000 محليًا.
const port = process.env.PORT || 3000;
const hostname = '0.0.0.0'; // التعديل: استخدم '0.0.0.0' للسماح بالوصول من أي مضيف (ضروري للنشر السحابي)

// إنشاء الخادم
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from Basic Node Server deployed on Railway!\n');
});

// تشغيل الخادم
server.listen(port, hostname, () => {
  // لاحظ استخدام ${port} في الرسالة
  console.log(`Server running on port ${port}`);
});
