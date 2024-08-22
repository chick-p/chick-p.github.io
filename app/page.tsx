import { Config } from "./config";

export default function Home() {
  return (
    <main className="main">
      <h1 className="title-gradient">{Config.site.title}</h1>
    </main>
  )
}
