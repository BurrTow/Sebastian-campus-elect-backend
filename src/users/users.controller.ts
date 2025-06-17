import { Controller, Get } from '@nestjs/common';
import { UsersService } from 'src/users/users.service'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get('students')
    async findAllStudents() {
        return await this.usersService.findAllStudents()
    }

}
