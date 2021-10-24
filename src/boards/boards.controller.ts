import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  /* 접근제한자private를 생성자 파라미터(boardsService)에 선언하면
    생성자 파라미터(boardsService)는 접근제한자가 사용되었으니 암묵적으로 클래스 프로퍼티로 선언됨
    - 현재 클래스 어느 메소드에서도 사용할 수 있음. ex) this.boardsService
    - 접근제한자private는 현재 클래스에서만 사용할 수 있음. */
  constructor(private boardsService: BoardsService) {}


  @Get('/')
  getAllBoard() {
    return this.boardsService.getAllBoards();
  }
}