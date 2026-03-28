import Container from "@/components/shared/container";
import { footerLinks, siteConfig } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-black text-white">
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <h3 className="text-3xl font-extrabold tracking-tight text-orange-400">
              {siteConfig.brandName}
            </h3>

            <p className="mt-5 max-w-md text-base leading-8 text-gray-300">
              {siteConfig.tagline}. Commandez vos produits alimentaires,
              boissons, produits frais et essentiels du quotidien dans une
              expérience moderne, simple et rassurante.
            </p>

            <div className="mt-6 space-y-2 text-sm text-gray-300">
              <p>{siteConfig.address}</p>
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold tracking-tight">Boutique</h4>
            <ul className="mt-5 space-y-3 text-sm text-gray-300">
              {footerLinks.boutique.map((item) => (
                <li key={item} className="transition hover:text-orange-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold tracking-tight">Service client</h4>
            <ul className="mt-5 space-y-3 text-sm text-gray-300">
              {footerLinks.serviceClient.map((item) => (
                <li key={item} className="transition hover:text-orange-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold tracking-tight">Informations</h4>
            <ul className="mt-5 space-y-3 text-sm text-gray-300">
              {footerLinks.informations.map((item) => (
                <li key={item} className="transition hover:text-orange-300">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-[24px] border border-orange-500/20 bg-orange-500/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                Orange Money
              </p>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Code marchand :
              </p>
              <p className="mt-1 text-2xl font-extrabold tracking-tight text-white">
                {siteConfig.orangeMoneyMerchantCode}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {siteConfig.brandName} — Tous droits réservés.</p>
          <p>Paiement sécurisé • Orange Money • Livraison rapide</p>
        </div>
      </Container>
    </footer>
  );
}