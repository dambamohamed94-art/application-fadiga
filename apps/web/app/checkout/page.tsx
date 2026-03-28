"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Container from "@/components/shared/container";
import { useCartStore } from "@/store/cart-store";
import { siteConfig } from "@/lib/site-data";

type PaymentMethod = "merchant-code" | "qr-code";
type DeliveryMode = "delivery" | "pickup";

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.getTotal());

  const [checkoutMode, setCheckoutMode] = useState<"guest" | "account">("guest");
  const [deliveryMode, setDeliveryMode] = useState<DeliveryMode>("delivery");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("merchant-code");

  const deliveryFee = useMemo(() => {
    return deliveryMode === "delivery" ? 1500 : 0;
  }, [deliveryMode]);

  const grandTotal = total + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="py-16">
        <Container>
          <div className="rounded-[32px] border border-gray-200 bg-white p-10 text-center shadow-sm md:p-12">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
              Votre panier est vide
            </h1>
            <p className="mt-4 text-base leading-7 text-gray-600 md:leading-8">
              Ajoutez des produits avant de passer à l’étape de paiement.
            </p>

            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-black"
              >
                Retour à la boutique
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <section className="border-b border-gray-200 bg-gray-50 py-8">
        <Container>
          <div className="text-sm text-gray-500">
            <Link href="/" className="hover:text-orange-600">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link href="/panier" className="hover:text-orange-600">
              Panier
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-gray-800">Checkout</span>
          </div>

          <div className="mt-5">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Paiement
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              Finaliser votre commande
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600 md:leading-8">
              Complétez vos informations, choisissez votre mode de livraison et
              validez votre paiement Orange Money.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                  Étape 1
                </p>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900">
                  Mode de commande
                </h2>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setCheckoutMode("guest")}
                    className={`rounded-[24px] border p-5 text-left transition ${
                      checkoutMode === "guest"
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 bg-white hover:border-orange-300"
                    }`}
                  >
                    <p className="text-lg font-bold text-gray-900">Commander sans compte</p>
                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      Le plus rapide pour valider votre panier immédiatement.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCheckoutMode("account")}
                    className={`rounded-[24px] border p-5 text-left transition ${
                      checkoutMode === "account"
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 bg-white hover:border-orange-300"
                    }`}
                  >
                    <p className="text-lg font-bold text-gray-900">Utiliser un compte</p>
                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      Connectez-vous ou créez un compte pour retrouver vos commandes.
                    </p>
                  </button>
                </div>

                {checkoutMode === "account" ? (
                  <div className="mt-6 rounded-[24px] bg-gray-50 p-5">
                    <p className="text-sm leading-7 text-gray-600">
                      Cette partie sera reliée ensuite à la connexion réelle.
                    </p>
                    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <Link
                        href="/connexion"
                        className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
                      >
                        Me connecter
                      </Link>
                      <Link
                        href="/inscription"
                        className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600"
                      >
                        Créer un compte
                      </Link>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                  Étape 2
                </p>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900">
                  Informations client
                </h2>

                <form className="mt-6 grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Prénom
                    </label>
                    <input
                      type="text"
                      placeholder="Votre prénom"
                      className="h-12 w-full rounded-2xl border border-gray-300 px-4 outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Nom
                    </label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="h-12 w-full rounded-2xl border border-gray-300 px-4 outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Téléphone
                    </label>
                    <input
                      type="text"
                      placeholder="+221 ..."
                      className="h-12 w-full rounded-2xl border border-gray-300 px-4 outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      className="h-12 w-full rounded-2xl border border-gray-300 px-4 outline-none focus:border-orange-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Adresse
                    </label>
                    <input
                      type="text"
                      placeholder="Votre adresse"
                      className="h-12 w-full rounded-2xl border border-gray-300 px-4 outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Ville
                    </label>
                    <input
                      type="text"
                      placeholder="Votre ville"
                      className="h-12 w-full rounded-2xl border border-gray-300 px-4 outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Quartier / précision
                    </label>
                    <input
                      type="text"
                      placeholder="Précisez votre zone"
                      className="h-12 w-full rounded-2xl border border-gray-300 px-4 outline-none focus:border-orange-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Note de livraison
                    </label>
                    <textarea
                      placeholder="Instructions complémentaires"
                      rows={4}
                      className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                    />
                  </div>
                </form>
              </div>

              <div className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                  Étape 3
                </p>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900">
                  Livraison
                </h2>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setDeliveryMode("delivery")}
                    className={`rounded-[24px] border p-5 text-left transition ${
                      deliveryMode === "delivery"
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 bg-white hover:border-orange-300"
                    }`}
                  >
                    <p className="text-lg font-bold text-gray-900">Livraison</p>
                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      Livraison à domicile selon votre zone.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliveryMode("pickup")}
                    className={`rounded-[24px] border p-5 text-left transition ${
                      deliveryMode === "pickup"
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 bg-white hover:border-orange-300"
                    }`}
                  >
                    <p className="text-lg font-bold text-gray-900">Retrait boutique</p>
                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      Récupérez votre commande en magasin.
                    </p>
                  </button>
                </div>
              </div>

              <div className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                  Étape 4
                </p>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900">
                  Paiement Orange Money
                </h2>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("merchant-code")}
                    className={`rounded-[24px] border p-5 text-left transition ${
                      paymentMethod === "merchant-code"
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 bg-white hover:border-orange-300"
                    }`}
                  >
                    <p className="text-lg font-bold text-gray-900">Code marchand</p>
                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      Paiement via le code marchand Orange Money.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("qr-code")}
                    className={`rounded-[24px] border p-5 text-left transition ${
                      paymentMethod === "qr-code"
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 bg-white hover:border-orange-300"
                    }`}
                  >
                    <p className="text-lg font-bold text-gray-900">Scan QR</p>
                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      Paiement rapide via scan QR Orange Money.
                    </p>
                  </button>
                </div>

                {paymentMethod === "merchant-code" ? (
                  <div className="mt-6 rounded-[24px] bg-black p-6 text-white">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
                      Orange Money
                    </p>
                    <p className="mt-3 text-sm leading-7 text-gray-300">
                      Utilisez le code marchand ci-dessous pour effectuer votre paiement.
                    </p>
                    <p className="mt-5 text-3xl font-extrabold tracking-tight text-orange-300 md:text-4xl">
                      {siteConfig.orangeMoneyMerchantCode}
                    </p>
                  </div>
                ) : (
                  <div className="mt-6 rounded-[24px] border border-orange-200 bg-orange-50 p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
                      Orange Money QR
                    </p>
                    <p className="mt-3 text-sm leading-7 text-gray-700">
                      Le QR code réel sera branché plus tard. Cette zone est déjà prête pour l’intégration.
                    </p>
                    <div className="mt-5 flex h-40 items-center justify-center rounded-2xl border border-dashed border-orange-300 bg-white text-sm font-medium text-orange-500 md:h-44">
                      Zone QR Code
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="rounded-[32px] border border-gray-200 bg-white p-7 shadow-sm xl:sticky xl:top-28 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                  Récapitulatif
                </p>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900">
                  Votre commande
                </h2>

                <div className="mt-6 space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start justify-between gap-4 rounded-2xl bg-gray-50 p-4"
                    >
                      <div>
                        <p className="font-bold text-gray-900">{item.name}</p>
                        {item.unit ? (
                          <p className="mt-1 text-sm text-gray-500">{item.unit}</p>
                        ) : null}
                        <p className="mt-2 text-sm text-gray-500">
                          Quantité : {item.quantity}
                        </p>
                      </div>

                      <p className="font-semibold text-gray-900">
                        {(item.price * item.quantity).toLocaleString()} FCFA
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-3 border-t pt-6 text-sm">
                  <div className="flex items-center justify-between text-gray-600">
                    <span>Sous-total</span>
                    <span className="font-semibold text-gray-900">
                      {total.toLocaleString()} FCFA
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-gray-600">
                    <span>Livraison</span>
                    <span className="font-semibold text-gray-900">
                      {deliveryFee.toLocaleString()} FCFA
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-3 text-base">
                    <span className="font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-extrabold tracking-tight text-orange-600 md:text-3xl">
                      {grandTotal.toLocaleString()} FCFA
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-black"
                >
                  Confirmer la commande
                </button>

                <p className="mt-4 text-center text-xs leading-6 text-gray-500">
                  Cette validation est statique pour l’instant. Le branchement réel
                  sera ajouté avec les routes API et Orange Money.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}