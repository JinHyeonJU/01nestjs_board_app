import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = ['My name is', 'HyeonJu']; //private를 사용하지않으면 다른 컴포넌트에서 수정할수있음.

  getAllBoards() {
    return this.boards; //boards배열에 들어있는 모든 값을 가져옴.
  }



}
