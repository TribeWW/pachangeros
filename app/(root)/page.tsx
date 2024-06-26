import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain p-5 md:p-10">
        <div className="wrapper">
          <div className="flex flex-col gap-6">
            <h1 className="h3-bold">See your upcoming matches</h1>
            <p className="p-regular-20 md:p-regular-24">
              Lorem ipsum dolor sit
            </p>
            <Button className="button w-fit mx-auto" size="lg" asChild>
              <Link href="/match/create">Create Match Now</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12"></section>
    </>
  );
}
