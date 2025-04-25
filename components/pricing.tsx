import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Forfaits sur mesure
          </h1>
          <p>
            Choisissez le pack qui correspond à votre projet web ou mobile, de
            la vitrine simple à la solution SaaS complète.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
          {/* Starter Pack */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-medium">Starter</CardTitle>
              <span className="my-3 block text-2xl font-semibold">800 €</span>
              <CardDescription className="text-sm">
                Idéal pour les projets simples
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed" />
              <ul className="list-outside space-y-3 text-sm">
                {[
                  "Site vitrine (1–3 pages)",
                  "Design responsive",
                  "Formulaire de contact",
                  "SEO de base",
                  "Livraison en 7–10 jours",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="mt-auto">
              <Button asChild variant="outline" className="w-full">
                <Link href="#contact">Choisir ce pack</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Business Pack (avec ruban Populaire) */}
          <Card className="relative">
            <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
              Populaire
            </span>

            <div className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-medium">Business</CardTitle>
                <span className="my-3 block text-2xl font-semibold">
                  1 300 €
                </span>
                <CardDescription className="text-sm">
                  Parfait pour les TPE/PME
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <hr className="border-dashed" />
                <ul className="list-outside space-y-3 text-sm">
                  {[
                    "Site 5–7 pages ou petit e-commerce (≤ 20 produits)",
                    "Design sur mesure",
                    "CMS + Paiement en ligne",
                    "Newsletter & SEO optimisé",
                    "Support 15 jours",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="mt-auto">
                <Button asChild variant="outline" className="w-full">
                  <Link href="#contact">Choisir ce pack</Link>
                </Button>
              </CardFooter>
            </div>
          </Card>

          {/* Entreprise Pack */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-medium">Entreprise</CardTitle>
              <span className="my-3 block text-2xl font-semibold">2 000 €</span>
              <CardDescription className="text-sm">
                Solution complète sur mesure
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed" />
              <ul className="list-outside space-y-3 text-sm">
                {[
                  "Site, app mobile ou SaaS sur mesure",
                  "Admin personnalisé + authentification",
                  "Connexion API / base de données",
                  "Mise en ligne stores + formation",
                  "Maintenance offerte 1 mois",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="mt-auto">
              <Button asChild variant="outline" className="w-full">
                <Link href="#contact">Choisir ce pack</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
