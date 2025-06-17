import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService){}

    /**
     * Retrieves all students from the DATABASE
     * @returns a promise that resolves an array of student objects
     */
    async findAllStudents() {
        return this.prisma.student.findMany()
    }
}
