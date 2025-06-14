"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    // Récupérer le session_id depuis l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const sessionIdParam = urlParams.get("session_id");
    setSessionId(sessionIdParam);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* Icône de succès */}
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>

        {/* Titre */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Paiement réussi !
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Merci pour votre confiance ! Votre paiement a été traité avec succès.
          Nous vous contacterons dans les plus brefs délais pour finaliser votre
          projet.
        </p>

        {/* Détails du paiement */}
        {sessionId && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-500 mb-2">Référence de paiement</p>
            <p className="text-xs font-mono text-gray-700 break-all">
              {sessionId}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="space-y-3">
          <Button asChild className="w-full bg-green-600 hover:bg-green-700">
            <Link href="/">
              <ArrowRight className="w-4 h-4 mr-2" />
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

        {/* Message de confirmation email */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700">
            Un email de confirmation vous a été envoyé avec tous les détails de
            votre commande.
          </p>
        </div>
      </div>
    </div>
  );
}
