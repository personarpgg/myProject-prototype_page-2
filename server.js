const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // 적절한 포트 번호를 선택하세요.

// 정적 파일 서빙을 위한 미들웨어 설정
app.use(express.static(path.join(__dirname, 'public')));

// 루트 경로에 접속했을 때 index.html 서빙
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 서버 실행
app.listen(port, () => {
    console.log(`서버 실행 http://localhost:${port}`);
});
