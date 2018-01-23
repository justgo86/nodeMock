//Express 기본모듈 불러오기
var express = require('express'), 
    http    = require('http'),
    path    = require("path");

//Express의 미들웨어 불러오기
var bodyParser  = require('body-parser'),
    static      = require('serve-static');

//익스프레스 객체 생성
var app = express();
var router = express.Router();




//기본 속성 설정
app.set('port', process.env.PORT || 3000);

//body-parser를 사용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({extended:false}));

//body-parser를 사용해 applicatiopn/json 파싱
app.use(bodyParser.json());

app.use(static(path.join(__dirname, "public")));

//미들웨어에서 파라미터 확인
/*app.use(function(req, res, next){
    console.log('첫 번째 미들웨어에서 요청을 처리함.');
    
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;
    
    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>Param id : ' + paramId +'</p></div>');
    res.write('<div><p>Param password : ' + paramPassword +'</p></div>');
    res.end()
});*/

//라우팅 함수 등록
router.route('/process/login').post(function(req, res){
    console.log("/process/login 처리함.");
    
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;
    
    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express 서버에서 Router가 응답한 결과입니다.</h1>');
    res.write('<div><p>Param id : ' + paramId +'</p></div>');
    res.write('<div><p>Param password : ' + paramPassword +'</p></div>');
    res.write('<br><br><a href="/login2.html">로그인 페이지로 돌아가기</a>');
    res.end()
})

app.use('/', router);
app.all('*', function(req, res){
    res.status(404).send('<h1>ERROR - 페이지를 찾을 수 없습니다.</h1>');
});

http.createServer(app).listen(3000, function(){
    console.log('Express 서버가 3000번 포트에서 시작됨.');
})