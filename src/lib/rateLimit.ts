

import { TRPCError } from '@trpc/server';
import { redis } from './redis';
import {Ratelimit} from "@upstash/ratelimit"


type RateLimitOptions = {
  maxRequests: number;
  windowInSeconds: number;
  uniqueId: string | null; // Unique identifier for the user (e.g., IP or user ID)
  errorMessage?: string;
};

export const ratelimit = new Ratelimit({
  redis,
  limiter:Ratelimit.slidingWindow(10,"10s")
})

// export async function rateLimit({
//   maxRequests,
//   windowInSeconds,
//   uniqueId,
//   errorMessage = 'Too many requests. Please try again later.',
// }: RateLimitOptions) {
//   const key = `rate-limit:${uniqueId}`;

//   // Increment the request count
//   const currentRequests = await redis.incr(key);

//   // If this is the first request, set an expiration time
//   if (currentRequests === 1) {
//     await redis.expire(key, windowInSeconds);
//   }

//   // Throw an error if the limit is exceeded
//   if (currentRequests > maxRequests) {
//     throw new TRPCError({
//       code: 'TOO_MANY_REQUESTS',
//       message: errorMessage,
//     });
//   }
// }