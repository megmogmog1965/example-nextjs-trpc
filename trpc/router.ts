//@fixme ファイル名を '...Router' に変更すべきか.

import { z } from 'zod'
import { baseProcedure, createTRPCRouter } from '@/trpc/init'

export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      }
    }),
})

// export type definition of API
export type AppRouter = typeof appRouter