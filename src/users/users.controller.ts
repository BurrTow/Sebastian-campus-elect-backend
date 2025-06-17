import { Controller, Get } from '@nestjs/common';
import { UsersService } from 'src/users/users.service'
import { ApiOperation, ApiResponse } from '@nestjs/swagger' 
import { ReturnedStudentsDto } from 'src/users/dto/students.dto'
import { Student } from '@prisma/client'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get('students')
    @ApiOperation({
        summary: "Get all students",
        description: "Returns a list of all students in the system."
    })

    @ApiResponse({
        status: 200,
        description: 'List of all students retrieved successfully',
        type: [ReturnedStudentsDto]
    })

    @ApiResponse({
        status: 500,
        description: 'an error occurred'
    })


    async findAllStudents(): Promise<Student[]> {
        return await this.usersService.findAllStudents()
    }

}
