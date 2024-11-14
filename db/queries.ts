import { cache } from 'react'
import db from './drizzle'
import { courses, userProgress } from './schema'
import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';

export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany()
  return data;
})


export const getUserProgress = cache(async () => {
  const { userId } = await auth()

  if(!userId) {
    return null
  }

  const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
      activeCourse: true,
    }
  })

  return data
})


// unfinished func
export const getCourseById = cache(async (courseId: number) => {
  const data = await db.query.courses.findFirst({
    where: eq(courses.id, courseId),    
  })

  return data
})



