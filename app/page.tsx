import Button from "@/components/button"

export default function Home() {
  return (
    <div className="flex flex-col items-start space-y-4 p-8">
      <Button>Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="destructive">Click me</Button>
      <Button variant="outline">Click me</Button>
      <Button variant="ghost">Click me</Button>
      <Button variant="link">Click me</Button>
      <Button variant="custom1">Click me</Button>
      <Button variant="custom2">Click me</Button>
      <Button variant="custom3">Click me</Button>
    </div>
  )
}
