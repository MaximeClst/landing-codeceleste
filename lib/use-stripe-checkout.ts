"use client";

export function useStripeCheckout() {
  const redirectToCheckout = async (priceId: string) => {
    console.log("Tentative de redirection avec l'ID de prix:", priceId);

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId }),
      });

      console.log("Réponse de l'API:", response.status);
      const data = await response.json();
      console.log("Données reçues:", data);

      if (!response.ok) {
        console.error("Erreur API:", data);
        alert(
          `Erreur: ${data.error || "Erreur lors de la création de la session"}`
        );
        return;
      }

      const { sessionId, error } = data;

      if (error) {
        console.error("Erreur:", error);
        alert(`Erreur: ${error}`);
        return;
      }

      console.log("Session ID reçu:", sessionId);

      // Rediriger vers Stripe Checkout
      const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
      console.log("Clé publique:", publishableKey);

      if (!publishableKey) {
        alert("Erreur: Clé publique Stripe manquante");
        return;
      }

      const stripe = await loadStripe(publishableKey);

      if (!stripe) {
        alert("Erreur: Impossible de charger Stripe");
        return;
      }

      console.log("Redirection vers Stripe...");
      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (stripeError) {
        console.error("Erreur de redirection:", stripeError);
        alert(`Erreur de redirection: ${stripeError.message}`);
      } else {
        console.log("Redirection réussie");
      }
    } catch (error) {
      console.error("Erreur lors de la redirection:", error);
      alert("Erreur de connexion. Vérifiez votre connexion internet.");
    }
  };

  return { redirectToCheckout };
}

// Fonction pour charger Stripe
async function loadStripe(publishableKey: string) {
  if (typeof window === "undefined") return null;

  try {
    const { loadStripe } = await import("@stripe/stripe-js");
    console.log("Stripe.js chargé");
    return loadStripe(publishableKey);
  } catch (error) {
    console.error("Erreur lors du chargement de Stripe.js:", error);
    return null;
  }
}
