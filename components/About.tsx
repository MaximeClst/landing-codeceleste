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
              {/* Cercle violet plus grand avec padding */}
              <div className="relative w-40 h-40 rounded-full p-2 overflow-hidden">
                {/* Image remplit tout l'intérieur du padding */}
                <Image
                  src="/images/PhotoMaximeCeleste.png"
                  alt="Photo de Maxime Céleste"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>

            {/* Titre + première phrase à droite */}
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">Salut, c’est Maxime 👋</h2>
              <p className="text-muted-foreground max-w-md">
                Je suis développeur full stack et j’aide les entreprises et
                indépendants à lancer leur site en quelques jours, grâce à mes
                outils et workflows optimisés.
              </p>
            </div>
          </div>

          {/*── Le reste du contenu en dessous ─────────────────────────*/}
          <div className="mt-5 space-y-6">
            <p className="text-muted-foreground max-w-prose">
              Mon objectif ? Vous livrer un produit clé en main, performant et
              sans prise de tête.
            </p>
            <h3>Trois raisons de faire un site avec Code Celeste :</h3>
            <ul className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              <li>Site vitrine ou e-commerce sur mesure</li>
              <li>Applications mobiles iOS & Android</li>
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
