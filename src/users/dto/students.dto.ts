import { ApiProperty } from '@nestjs/swagger'
import { Student, $Enums } from '@prisma/client'

export class ReturnedStudentsDto implements Partial<Student> {
    @ApiProperty({
        description: 'Unique identifier for the student',
        example: '123abc'
    })

    studentId: string

    @ApiProperty({
        description: 'Department where the student belongs to',
        example: 'Computer Science'
    })
    department: string

    @ApiProperty({
        description: 'Student\'s assigned email',
        example: 'bigburr@gmail.com'

    })
    email: string

    @ApiProperty({
        description: 'name of the student',
        example: 'burr'

    })
    name: string

    @ApiProperty({
        description: 'Role of the student',
        enum: $Enums.Role,
        example: $Enums.Role.STUDENT
    })
    role: $Enums.Role
}

export class CreateStudentDto{
    @ApiProperty({
        description: 'Unique identifier for student',
        example: '123abc',
    })
    studentId: string

    @ApiProperty({
        description: 'Departmetn of the student',
        example: '123abc',
    })
    department: string

    @ApiProperty({
        description: 'Email of the student',
        example: 'jkim@addu.edu.ph'
    })
    email: string

    @ApiProperty({
        description: 'Full name of the student',
        example: 'Ji-woo Kim',
    })
    name: string
}