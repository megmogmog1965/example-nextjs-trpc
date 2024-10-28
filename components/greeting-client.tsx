'use client'

import { trpc } from '@/trpc/client'

export function GreetingClient() {
  const greeting = trpc.hello.useQuery({ text: 'Yusuke' })

  return (
    <div className="bg-red-100 p-5 border-2 border-red-500">
      <div className="text-red-500 font-bold">Client Component</div>
      <div>{JSON.stringify(greeting.data)}</div>
    </div>
  )
}
