// استيراد وحدة HTTP المدمجة
const http = require('http');

const hostname = '127.0.0.1'; // المضيف المحلي (localhost)
const port = 3000; // المنفذ الذي سيستمع عليه الخادم

// إنشاء الخادم
const server = http.createServer((req, res) => {
  // تعيين رأس الاستجابة
  res.statusCode = 200; // رمز حالة HTTP 200 يعني "نجاح"
  res.setHeader('Content-Type', 'text/plain'); // نوع محتوى نصي عادي

  // إنهاء الاستجابة وإرسال النص
  res.end('Hello World from Basic Node Server!\n');
});

// تشغيل الخادم للاستماع على المنفذ والمضيف المحدد
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
