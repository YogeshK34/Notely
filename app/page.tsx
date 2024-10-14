import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex flex-col items-center justify-center gap-4">
        <div className="inline-block max-w-xl text-center justify-center">
          {/* <span className={title()}>Make&nbsp;</span> */}
          <span className={title({ color: "yellow" })}>Notely&nbsp;</span>
          <br />
          <br />
          <div className={title({ class: "mt-4" })}>
            Capture Thoughts, Create Ideas, Conquer Tasks
          </div>

          <div className={subtitle({ class: "mt-4" })}>
            Never let a great idea slip away. With Notely, you can capture your
            thoughts, organize your tasks, and bring your ideas to life—all in one
            place. Stay inspired, stay productive.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing <Code color="primary">app/page.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
