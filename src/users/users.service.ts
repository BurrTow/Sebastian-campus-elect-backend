import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service'
import { Student } from '@prisma/client'

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService){}

    /**
     * Retrieves all students from the DATABASE
     * @returns a promise that resolves an array of student objects
     */
    async findAllStudents(): Promise<Student[]> {
    
        return this.prisma.student.findMany()
    }



    /**
     * Returns a studend by their ID
     * @returns
     */
    async findStudentById({ id }: {id: Student['studentId']}): Promise<Student> {
        const student = await this.prisma.student.findUnique({
            where: {
                studentId: id
            }
        })

        if(!student){
            // Use Notification for proper HTTP handling
            // @see @nest/common
            throw new NotFoundException('Student cannot be found')
        }

        return student
    }

    
}
