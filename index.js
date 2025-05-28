const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Danh sách liên hệ</h1><button>Thêm liên hệ</button>');
});

app.listen(3000, () => {
  console.log('Server đang chạy tại http://localhost:3000');
});
