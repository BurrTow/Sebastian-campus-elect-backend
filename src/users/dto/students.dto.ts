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