import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from 'src/users/users.service'
import { ApiNotFoundResponse, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger' 
import { ReturnedStudentsDto } from 'src/users/dto/students.dto'
import { Student } from '@prisma/client'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get('students')
    @ApiOperation({
        summary: "Get all students",
        description: "Returns a list of all students in the system.",
    })

    @ApiResponse({
        status: 200,
        description: 'List of all students retrieved successfully',
        type: [ReturnedStudentsDto],
    })

    @ApiResponse({
        status: 500,
        description: 'an error occurred',
    })


    async findAllStudents(): Promise<Student[]> {
        return await this.usersService.findAllStudents()
    }

    @Get('students/find')
        @ApiOperation({
            summary: 'Finds students by ID',
            description: 'Returns a student thta matches the provided ID.',
        })

    @ApiQuery({
        name: 'id',
        required: true,
        description: 'The unique identifier of the student to find.',
        example: 'STUDENT_1',
        type: 'string',
    })

    @ApiResponse({
        status: 200,
        description: 'Student found successfully.',
        type: ReturnedStudentsDto,
    })

    @ApiNotFoundResponse({
        description: 'Student not found.',
    })

    async findStudentById(
        @Query('id') id: Student['studentId'],
    ): Promise<Student>{

        return await this.usersService.findStudentById({
            id: id,
        })
    }
}
