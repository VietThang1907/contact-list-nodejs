const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Hiển thị danh sách liên hệ (ví dụ)
app.get('/', (req, res) => {
  res.send('<h1>Danh sách liên hệ</h1><a href="/add-contact">Thêm liên hệ</a>');
});


app.listen(3000, () => {
  console.log('Server đang chạy tại http://localhost:3000');
});