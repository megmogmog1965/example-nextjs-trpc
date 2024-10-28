import { trpc } from '@/trpc/server'

export async function GreetingServer() {
  const greeting = await trpc.hello({ text: 'Yusuke' })

  return (
    <div className="bg-red-100 p-5 border-2 border-red-500">
      <div className="text-red-500 font-bold">Server Component</div>
      <div>{JSON.stringify(greeting)}</div>
    </div>
  )
}
