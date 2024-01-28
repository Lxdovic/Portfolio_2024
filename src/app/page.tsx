import Sphere from "@/components/r3f/sphere";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold">Hello World!</h1>

      <div className="absolute top-0 -z-10 w-full h-full">
        <Sphere />
      </div>
    </main>
  );
}
