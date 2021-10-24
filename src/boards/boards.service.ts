import { Injectable, NotFoundException, Patch } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid'; //v1버전이며 명칭을 uuid로 한다.
import { CreateBoardDto } from './dto/create-board.dto';
import { timingSafeEqual } from 'crypto';

@Injectable()
export class BoardsService {
  private boards: Board[] = []; //private를 사용하지않으면 다른 컴포넌트에서 수정할수있음.

  //모든 게시글 출력
  getAllBoards(): Board[] {
    return this.boards; //boards배열에 들어있는 모든 값을 가져옴.
  }

  //게시글 작성
  createBoard(createBoardDto: CreateBoardDto) {
    const {title, description} = createBoardDto; //Dto 생성
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC
    }

    this.boards.push(board);
    return board;
  }

  //Id로 특정 게시글 찾기. find 메소드로 찾기
  getBoardById(id: string): Board {
    const found = this.boards.find((board) => board.id === id);
    
    // 게시글이 없을때 예외처리
    if(!found) {
      throw new NotFoundException(id+'의 게시글을 찾을 수 없습니다.');
    }
    return found;
  }

  //Id로 특정 게시물 삭제. return이 없으니 리턴값을 void.
  deleteBoard(id: string): void {
    const found = this.getBoardById(id);
    this.boards = this.boards.filter((board) => board.id !== found.id) //id가 다른것만 남겨준다. 즉, 같은것은 없애기
  }

  //특정게시물 수정
  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id); //getBoardById를 이용해 특정게시물 모든 정보 가져오기
    board.status = status;
    return board;
  }
}
