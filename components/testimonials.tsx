import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Marie Dubois",
    role: "Fondatrice - Boutique Éco",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote:
      "Maxime a transformé ma vision en réalité. Mon site e-commerce est maintenant opérationnel et génère des ventes dès le premier mois. Un vrai professionnel !",
  },
  {
    name: "Thomas Martin",
    role: "Consultant Indépendant",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote:
      "Code Celeste m'a livré un site professionnel en seulement 10 jours. Le suivi client est impeccable et le résultat dépasse mes attentes.",
  },
  {
    name: "Sophie Laurent",
    role: "Coach en Développement Personnel",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    quote:
      "Grâce à Maxime, j'ai enfin une présence web qui reflète ma valeur. Le formulaire de contact fonctionne parfaitement et j'ai déjà de nouveaux clients !",
  },
  {
    name: "Pierre Moreau",
    role: "Artisan Boulanger",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    quote:
      "Je ne connaissais rien au web mais Maxime a tout simplifié. Mon site de commandes en ligne fonctionne comme un charme. Je recommande !",
  },
  {
    name: "Camille Rousseau",
    role: "Architecte d'Intérieur",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    quote:
      "Code Celeste a créé un site qui met parfaitement en valeur mes réalisations. L'interface est intuitive et les clients adorent naviguer sur mon portfolio.",
  },
  {
    name: "Lucas Bernard",
    role: "Startup Tech",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    quote:
      "Maxime a développé notre MVP en un temps record. Son expertise technique et sa réactivité ont été déterminantes pour notre lancement.",
  },
  {
    name: "Emma Durand",
    role: "Thérapeute Holistique",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    quote:
      "Mon site reflète parfaitement mon approche bienveillante. Les patients peuvent facilement prendre rendez-vous en ligne. Un vrai gain de temps !",
  },
  {
    name: "Antoine Leroy",
    role: "Restaurateur",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    quote:
      "Code Celeste a créé un site qui fait saliver ! Les commandes en ligne ont boosté mon chiffre d'affaires de 40% dès le premier mois.",
  },
  {
    name: "Julie Moreau",
    role: "Photographe",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    quote:
      "Maxime a su mettre en valeur mes photos avec un design épuré et élégant. Mes clients adorent naviguer sur mon site et les réservations affluent !",
  },

  {
    name: "Sarah Lefevre",
    role: "Naturopathe",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    quote:
      "Mon site transmet parfaitement ma philosophie de vie. Les patients peuvent consulter mes services et prendre RDV facilement. Un vrai succès !",
  },
  {
    name: "Nicolas Girard",
    role: "Avocat",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    quote:
      "Code Celeste a créé un site professionnel qui inspire confiance. Mes clients apprécient la clarté des informations et la facilité de prise de contact.",
  },
];

const chunkArray = (
  array: Testimonial[],
  chunkSize: number
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3)
);

export default function WallOfLoveSection() {
  return (
    <section id="testimonial">
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-title text-3xl font-semibold">
              Loved by the Community ❤️
            </h2>
            <p className="text-body mt-6">
              Ils ont fait confiance à Code Celeste pour leur projet.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="space-y-3">
                {chunk.map(({ name, role, quote, image }, index) => (
                  <Card key={index}>
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                      <Avatar className="size-9">
                        <AvatarImage
                          alt={name}
                          src={image}
                          loading="lazy"
                          width="120"
                          height="120"
                        />
                        <AvatarFallback>ST</AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium">{name}</h3>

                        <span className="text-muted-foreground block text-sm tracking-wide">
                          {role}
                        </span>

                        <blockquote className="mt-3">
                          <p className="text-gray-700 dark:text-gray-300">
                            {quote}
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
