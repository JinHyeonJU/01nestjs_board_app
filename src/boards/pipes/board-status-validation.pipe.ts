import { BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../board.model";

//값이 PUBLIC, PRIVATE만 와야함
export class BoardStatusValidationPipe implements PipeTransform{
  readonly StatusOptions = [
    BoardStatus.PRIVATE,
    BoardStatus.PUBLIC
  ]

  transform(value: any) {
    value = value.toUpperCase();

    if(!this.isStatusValid(value)){
      throw new BadRequestException(value+' isnt is the status oprions');
    }


    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1 //indexOf는 값이 없다면 -1를 리턴해줌. 그것을 이용한 것.
  }
}