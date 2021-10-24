# NESTJS FIRST STUDY PROJECT_2021 
- 해당 프로젝트는 간단 게시글 프로젝트.

- NESTJS 앱구조는 [게시글에 관한 모듈]과 [게시글을 만드는 사람에 대한 인증 모듈]이 필요하다.

- 타입 정의 장점 : 다른 코드를 사용할 시 에러가 발생한다. 코드를 읽는 입장에서 더 코드를 쉽게 이해할 수 있다.

- 파이프(Pipe) : 유효성체크(글자길이 등등), 
  값 형식 변환(ex:문자열에서 숫자로)
  ->간단하게 데이터베이스에 넣기전에 검증.

- 커스텀 파이프 구현방법 : implements PipeTransform. PipeTransform은 모든 파이프에 구현해줘야 하는 인터페이스이다.
그리고 transform이라는 메소드를 필요로한다.