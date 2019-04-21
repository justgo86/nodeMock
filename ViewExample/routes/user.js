var login = function(req, res) {
    console.log('user(user2.js 모듈 안에 있는 login 호출됨.');

    //요청 파라미터 확인
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.id || req.query.password;

    console.log('요청 파라미터 : ' + paramId + ', ' + paramPassword);

    //데이터베이스 객체 참조
    var database = req.app.get('database');

    //데이터베이스 객체가 초기화된 경우, authUser 함수 호출하여 사용자 인증
    if(database.db) {
        authUser(database, paramId, paramPassword, function(err, docs) {
            //오류가 발생했을 때 클라이언트로 오류 전송
            if(err) {
                console.error('사용자 로그인 인증 중 에러 발생 : ')
            }
        })
    }

}