import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { title } from 'process';
import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
  /* 접근제한자private를 생성자 파라미터(boardsService)에 선언하면
    생성자 파라미터(boardsService)는 접근제한자가 사용되었으니 암묵적으로 클래스 프로퍼티로 선언됨
    - 현재 클래스 어느 메소드에서도 사용할 수 있음. ex) this.boardsService
    - 접근제한자private는 현재 클래스에서만 사용할 수 있음. */
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(
    @Body() createBoardDto: CreateBoardDto
    ): Board {
      return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board{
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    this.boardsService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus
  ) {
    return this.boardsService.updateBoardStatus(id, status);
  }
}