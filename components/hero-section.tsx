"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "@/components/hero8-header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";
import { Code } from "./Code";
import { GithubIcon } from "@/src/icons/GithubIcon";
import { StripeIcon } from "@/src/icons/StripeIcon";
import { OpenAiIcon } from "@/src/icons/OpenAiIcon";
import { NextJsIcon } from "@/src/icons/NextJsIcon";
import { TailwindIcon } from "@/src/icons/TailwindIcon";

export default function HeroSection() {
  const keyRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (keyRef.current) {
      const annotation = annotate(keyRef.current, {
        type: "circle",
        color: "#F59E0B",
        padding: 4,
        strokeWidth: 3,
      });
      annotation.show();
    }
  });
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                  Votre projet web,{" "}
                  <span ref={keyRef} className="relative inline-block">
                    clé en main
                  </span>
                  et sans effort
                </h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg">
                  Bénéficiez d’un service expert qui transforme vos idées en un
                  site ou une app performante, livrée <Code>rapidement</Code> et
                  prêt à l’emploi.
                </p>

                <div className="mt-12 flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg">
                    <Link href="/">
                      <span>Get Started</span>
                    </Link>
                  </Button>

                  <Button asChild size="lg" variant="outline">
                    <Link href="/">
                      <span>Take a call</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* { carousel } */}
        <section className="bg-background pb-16 md:pb-32">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">Powering the best teams</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  <div className="flex">
                    <GithubIcon
                      className="mx-auto h-6 w-auto fill-current text-white"
                      aria-label="GitHub"
                    />
                  </div>
                  <div className="flex">
                    <StripeIcon
                      className="mx-auto h-6 w-auto fill-current text-white"
                      aria-label="Stripe"
                    />
                  </div>
                  <div className="flex">
                    <OpenAiIcon
                      className="mx-auto h-6 w-auto fill-current text-white"
                      aria-label="OpenAI"
                    />
                  </div>
                  <div className="flex">
                    <NextJsIcon
                      className="mx-auto h-6 w-auto fill-current text-white"
                      aria-label="Next.js"
                    />
                  </div>
                  <div className="flex">
                    <TailwindIcon
                      className="mx-auto h-6 w-auto fill-current text-white"
                      aria-label="Tailwind CSS"
                    />
                  </div>
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
