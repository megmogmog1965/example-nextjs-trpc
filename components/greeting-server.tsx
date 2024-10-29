import { trpc } from '@/trpc/server'

export async function GreetingServer({ name }: { name: string }) {
  // tRPC 問い合わせ. Server-Side なので直接接続されている.
  const greeting = await trpc.hello({ text: name })

  return (
    <div className="bg-red-100 p-5 border-2 border-red-500">
      <div className="text-red-500 font-bold">Server Component</div>
      <div>{JSON.stringify(greeting)}</div>
    </div>
  )
}
