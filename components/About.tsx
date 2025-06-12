import Image from "next/image";
import { Card } from "./ui/card";

export default function About() {
  return (
    <section className="py-16">
      <div className="max-w-2xl mx-auto px-6">
        <Card className="bg-transparent border border-white/20 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="relative w-40 h-40 rounded-full p-3 overflow-hidden">
                <Image
                  src="/images/PhotoProfil.jpeg"
                  alt="Photo de Maxime Céleste"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">
                Salut, c&apos;est Maxime 👋
              </h2>
              <p className="text-muted-foreground max-w-md text-sm">
                Passionné par les nouvelles technologies web, j&apos;ai toujours
                à cœur d&apos;accompagner les entreprises dans leur transition
                numérique.
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-6">
            <p className="text-muted-foreground max-w-prose text-sm">
              Au fil de mes premières collaborations, j’ai constaté combien il
              peut être complexe de lancer un site professionnel : choix des
              technologies, intégration des formulaires, gestion du suivi
              client… Sans parler du temps investi, loin de votre cœur de
              métier.
            </p>
            <p className="text-muted-foreground max-w-prose text-sm">
              C&apos;est pourquoi j&apos;ai créé Code Celeste :
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>
                Pour vous offrir une vitrine web sur-mesure, qui reflète vos
                valeurs et vos ambitions, sans que vous ayez à toucher une seule
                ligne de code.
              </li>
              <li>
                Pour mettre en place un suivi client personnalisé (formulaires,
                newsletter, CRM léger) qui vous permet de transformer chaque
                visite en opportunité de croissance.
              </li>
              <li>
                Pour accélérer le développement grâce à mes workflows optimisés,
                mêlant méthodes éprouvées et outils IA, tout en garantissant un
                résultat 100 % humain, fiable et évolutif.
              </li>
            </ul>
            <p className="text-sm text-muted-foreground max-w-prose">
              Mon ambition ? Vous délivrer un site clé-en-main, performant et
              pérenne, qui vous libère du temps pour vous concentrer sur
              l&apos;essentiel : votre cœur de métier. Ensemble, passons au
              niveau supérieur !
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
