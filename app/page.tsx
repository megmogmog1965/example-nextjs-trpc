import { GreetingClient } from '@/components/greeting-client'
import { GreetingServer } from '@/components/greeting-server'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GreetingClient />
      <GreetingServer />
    </main>
  )
}
