/*
Interface : 변수의 타입 체크
Classes   : 변수의 타입 체크, 인스턴스 생성
*/
export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus; //PUBLIC, PRIVATE 이외의 값은 ERROR
}

//PUBLIC, PRIVATE 두가지 값만 나옴
export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE'
}