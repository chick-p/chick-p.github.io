import Home from "@/content/home.mdx";
import { config } from "@/config";

export default function Page() {
  return (
    <div>
      <main className="main">
        <h1 className="title-gradient">{config.site.title}</h1>
        <Home />
      </main>
    </div>
  );
}
