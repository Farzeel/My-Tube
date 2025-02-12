import { z } from 'zod';
import { baseProcedure, createTRPCRouter, protectedProcedure } from '../init';
import { categoriesRouter } from '@/modules/categories/server/procedure';
// import { TRPCError } from '@trpc/server';
export const appRouter = createTRPCRouter({
categories:categoriesRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;