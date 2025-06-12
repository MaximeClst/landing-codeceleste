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
import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Forfaits sur mesure
          </h1>
          <p>
            Choisissez le pack qui correspond à votre projet web, de la vitrine
            simple à la solution SaaS complète.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
          <Card className="flex flex-col h-[500px]">
            <CardHeader className="flex-shrink-0">
              <CardTitle className="font-medium">Starter</CardTitle>
              <span className="my-3 block text-2xl font-semibold">800 €</span>
              <CardDescription className="text-sm">
                Idéal si tu veux lancer ta présence en ligne.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 flex-1 overflow-y-auto">
              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {[
                  "Un design adapté à ton business",
                  "1-3 pages",
                  "Un hébergement sur mesure",
                  "Déploiement rapide (livraison en 7–10 jours)",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="flex-shrink-0">
              <Button asChild variant="outline" className="w-full">
                <Link href="">Choisir Starter</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="relative flex flex-col h-[500px]">
            <span className="bg-gradient-to-br from-purple-400 to-amber-300 absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
              Popular
            </span>

            <CardHeader className="flex-shrink-0">
              <CardTitle className="font-medium">All-in</CardTitle>
              <span className="my-3 block text-2xl font-semibold">1500 €</span>
              <CardDescription className="text-sm">
                Idéal si tu veux un site web complet.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 flex-1 overflow-y-auto">
              <hr className="border-dashed" />
              <ul className="list-outside space-y-3 text-sm">
                {[
                  "Site 5-7 page ou e-commerce",
                  "Page de connexion",
                  "Plateforme de paiement",
                  "Formulaire de contact",
                  "Base de données (Supabase)",
                  "Support 15 jours + Mise à jour contenu",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="flex-shrink-0">
              <Button asChild variant="outline" className="w-full">
                <Link href="">Choisir All-in</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col h-[500px]">
            <CardHeader className="flex-shrink-0">
              <CardTitle className="font-medium">Plan Complet</CardTitle>
              <span className="my-3 block text-2xl font-semibold">2500 €</span>
              <CardDescription className="text-sm">
                Ta solution web clé en main.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 flex-1 overflow-y-auto">
              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {[
                  "Tout dans All-in",
                  "Back-office & authentification sur mesure",
                  "Maintenant offerte 1 mois",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="flex-shrink-0">
              <Button asChild variant="outline" className="w-full">
                <Link href="">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
