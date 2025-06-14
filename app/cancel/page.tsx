"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* Icône d'annulation */}
        <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
          <RefreshCw className="w-8 h-8 text-orange-600" />
        </div>

        {/* Titre */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Paiement annulé
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Votre paiement a été annulé. Aucun montant ne vous a été débité. Vous
          pouvez réessayer quand vous le souhaitez.
        </p>

        {/* Actions */}
        <div className="space-y-3">
          <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
            <Link href="/#pricing">
              <RefreshCw className="w-4 h-4 mr-2" />
              Réessayer le paiement
            </Link>
          </Button>

          <Button variant="outline" asChild className="w-full">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l&apos;accueil
            </Link>
          </Button>

          <Button variant="outline" asChild className="w-full">
            <Link href="mailto:contact@codeceleste.fr">
              <Mail className="w-4 h-4 mr-2" />
              Nous contacter
            </Link>
          </Button>
        </div>

        {/* Message d'aide */}
        <div className="mt-6 p-4 bg-orange-50 rounded-lg">
          <p className="text-sm text-orange-700">
            Des questions ? N&apos;hésitez pas à nous contacter pour toute
            assistance.
          </p>
        </div>
      </div>
    </div>
  );
}
