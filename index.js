const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Hiển thị danh sách liên hệ (ví dụ)
app.get('/', (req, res) => {
  res.send('<h1>Danh sách liên hệ</h1><a href="/add-contact">Thêm liên hệ</a>');
});

// Hiển thị form thêm liên hệ
app.get('/add-contact', (req, res) => {
  res.sendFile(__dirname + '/views/addContact.html');
});

// Xử lý form thêm liên hệ
app.post('/add-contact', (req, res) => {
  const { name, phone } = req.body;
  // TODO: Lưu thông tin liên hệ vào database hoặc file
  console.log('Thêm liên hệ:', name, phone);
  res.send(`<p>Đã thêm liên hệ: ${name} - ${phone}</p><a href="/">Quay lại</a>`);
});

app.listen(3000, () => {
  console.log('Server đang chạy tại http://localhost:3000');
});