"use client";

import { SectionLayout } from "@/components/section-layout";
import { Typography } from "@/components/ui/typography";

export const PainSection = () => {
  return (
    <SectionLayout
      variant="card"
      size="base"
      className="flex flex-col items-center justify-center gap-4"
    >
      <div className="flex w-full flex-col items-center gap-3 lg:gap-4 xl:gap-6">
        <Typography variant="h1">J&apos;aime Code Celeste...</Typography>
        <Typography variant="large">
          Mais au final, je perds surtout mon temps à essayer de créer mon site
          moi-même.
        </Typography>
        <div className="flex items-start gap-4 max-lg:flex-col">
          <div className="flex-1 rounded-lg bg-red-500/20 p-4 lg:p-6">
            <Typography variant="h3" className="text-red-500">
              😞 Créer des sites sans Code Celeste
            </Typography>
            <ul className="ml-4 mt-4 flex list-disc flex-col gap-2 text-lg text-foreground/80">
              <li>Limiter dans la personnalisation</li>
              <li>Problème de performance</li>
              <li>La sécurité est peu fiable</li>
              <li>Dépendance à l&apos;écosystème</li>
            </ul>
          </div>
          <div className="flex-1 rounded-lg bg-green-500/20 p-4 lg:p-6">
            <Typography variant="h3" className="text-green-500">
              😎 Créer des sites avec Code Celeste
            </Typography>
            <ul className="ml-4 mt-4 flex list-disc flex-col gap-2 text-lg text-foreground/80">
              <li>Site totalement personnalisable</li>
              <li>Evolutif</li>
              <li>Performance & SEO optimisé</li>
              <li>Sécurité renforcée</li>
              <li>Accompagnement personnalisé</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
