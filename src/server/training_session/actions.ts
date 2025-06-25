"use server";

import { PrismaClient, trainning_session } from "@/generated/prisma";
import { currentUser } from '@clerk/nextjs/server'

const prisma = new PrismaClient();

export async function createOrUpdateTrainingSession(
  trainingSession: trainning_session
) {
  const user = await currentUser()

  if (!user) {
    throw new Error("User not found");
  }

  trainingSession.user_id = user.id;

  await prisma.trainning_session.upsert({
    where: { id: trainingSession.id },
    update: {
      user_id: user.id,
      date_time: trainingSession.date_time,
      distance_km: trainingSession.distance_km,
      duration_minutes: trainingSession.duration_minutes,
      calories_burned: trainingSession.calories_burned,
      average_pace_km_per_min: trainingSession.average_pace_km_per_min,
    },
    create: {
      ...trainingSession,
      id: undefined,
    },
  });
}

export async function getTrainingSessions() {
  const user = await currentUser()

  if (!user) {
    throw new Error("User not found");
  }

  const trainingSessions = await prisma.trainning_session.findMany({
    where: { user_id: user.id },
    orderBy: {
      date_time: 'asc', // ou o campo de ordenação que fizer sentido
    },
    take: 30
  });

  const plainTrainingSessions = trainingSessions.map((session) => ({
    ...session,
    distance_km: Number(session.distance_km),
    duration_minutes: Number(session.duration_minutes),
    calories_burned: Number(session.calories_burned),
    average_pace_km_per_min: Number(session.average_pace_km_per_min),
  }));

  return plainTrainingSessions;
}

export async function getTrainingAvgPace() {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  const avgPace = await prisma.$queryRaw<{ avg: number | null }[]>`
    SELECT AVG(average_pace_km_per_min) FROM trainning_session WHERE user_id = ${user.id}
  `;

  return avgPace[0].avg;
}

export async function getTotalRun() {
  const user = await currentUser()

  if (!user) {
    throw new Error("User not found");
  }

  const total = await prisma.$queryRaw<{ count: number | null }[]>`
    SELECT COUNT(*) FROM trainning_session WHERE user_id = ${user.id}
  `;

  return total[0].count;
}

export async function getTotalDistance() {
  const user = await currentUser()

  if (!user) {
    throw new Error("User not found");
  }

  const total = await prisma.$queryRaw<{ sum: number | null }[]>`
    SELECT SUM(distance_km) FROM trainning_session WHERE user_id = ${user.id}
  `;

  return total[0].sum;
}

export async function getTotalTime() {
  const user = await currentUser()

  if (!user) {
    throw new Error("User not found");
  }

  const total = await prisma.$queryRaw<{ sum: number | null }[]>`
    SELECT SUM(duration_minutes) FROM trainning_session WHERE user_id = ${user.id}
  `;

  return total[0].sum;
}

export async function getTotalCalories() {
  const user = await currentUser()

  if (!user) {
    throw new Error("User not found");
  }

  const total = await prisma.$queryRaw<{ sum: number | null }[]>`
    SELECT SUM(calories_burned) FROM trainning_session WHERE user_id = ${user.id}
  `;

  return total[0].sum;
}
