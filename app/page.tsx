"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Forfaits sur mesure</h1>
        <p className="text-lg text-gray-600 mb-12">
          Des solutions adaptées à chaque étape de votre projet web ou mobile
        </p>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {/* Starter Pack */}
          <Card className="border shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Starter</CardTitle>
              <p className="text-blue-600 text-xl font-bold mt-2">
                À partir de 800€
              </p>
            </CardHeader>
            <CardContent>
              <ul className="text-left space-y-2">
                <li>✅ Site vitrine 1 à 3 pages</li>
                <li>✅ Design responsive</li>
                <li>✅ Formulaire de contact</li>
                <li>✅ SEO de base</li>
                <li>✅ Livraison en 7 à 10 jours</li>
              </ul>
              <Button className="mt-6 w-full">Choisir ce pack</Button>
            </CardContent>
          </Card>

          {/* Business Pack */}
          <Card className="border shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Business</CardTitle>
              <p className="text-blue-600 text-xl font-bold mt-2">
                À partir de 1300€
              </p>
            </CardHeader>
            <CardContent>
              <ul className="text-left space-y-2">
                <li>✅ Site 5 à 7 pages ou petit e-commerce</li>
                <li>✅ Design sur mesure</li>
                <li>✅ CMS + Paiement en ligne</li>
                <li>✅ Newsletter & SEO optimisé</li>
                <li>✅ Support 15 jours</li>
              </ul>
              <Button className="mt-6 w-full">Choisir ce pack</Button>
            </CardContent>
          </Card>

          {/* Entreprise Pack */}
          <Card className="border shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Entreprise
              </CardTitle>
              <p className="text-blue-600 text-xl font-bold mt-2">
                À partir de 2000€
              </p>
            </CardHeader>
            <CardContent>
              <ul className="text-left space-y-2">
                <li>✅ Site, app mobile ou SaaS sur mesure</li>
                <li>✅ Admin personnalisé + Authentification</li>
                <li>✅ Connexion API / BD</li>
                <li>✅ Mise en ligne stores + Formation</li>
                <li>✅ Maintenance 1 mois</li>
              </ul>
              <Button className="mt-6 w-full">Choisir ce pack</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
