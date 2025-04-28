import Image from "next/image";
import { Card } from "./ui/card";

export default function About() {
  return (
    <section className="py-16">
      <div className="max-w-xl mx-auto px-6">
        <Card className="bg-transparent border border-white/20 rounded-2xl p-8">
          {/*── Ligne Image + Intro ─────────────────────────*/}
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Image à gauche */}
            <div className="flex-shrink-0">
              <Image
                src="/images/PhotoMaximeCeleste.jpeg"
                alt="Photo de Maxime Céleste"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>

            {/* Titre + première phrase à droite */}
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">Salut, c’est Maxime 👋</h2>
              <p className="text-muted-foreground max-w-md">
                Je suis développeur web & mobile et j’aide les entreprises et
                indépendants à lancer leur site ou application en quelques
                jours, grâce à mes outils et workflows optimisés.
              </p>
            </div>
          </div>

          {/*── Le reste du contenu en dessous ─────────────────────────*/}
          <div className="mt-5 space-y-6">
            <p className="text-muted-foreground max-w-prose">
              Mon objectif ? Vous livrer un produit clé en main, performant et
              sans prise de tête.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>Site vitrine ou e-commerce sur mesure</li>
              <li>Applications mobiles iOS & Android (React Native)</li>
              <li>SaaS et outils back-office sécurisés</li>
            </ul>
            <p className="text-sm text-muted-foreground max-w-prose">
              Passionné par l’IA, je l’utilise en interne pour accélérer le
              développement de l’application tout en garantissant un résultat
              100 % humain et fiable.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
