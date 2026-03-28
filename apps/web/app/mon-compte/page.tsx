import Container from "@/components/shared/container";
import Button from "@/components/ui/button";

export default function MonComptePage() {
  return (
    <div className="py-14">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-extrabold text-gray-900">Mon compte</h1>
            <p className="mt-3 text-gray-600">
              Connectez-vous à votre espace ou créez un nouveau compte.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">J’ai déjà un compte</h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Connectez-vous pour retrouver vos commandes, adresses et votre panier.
              </p>

              <div className="mt-6">
                <Button href="/connexion" variant="dark">
                  Me connecter
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">Je crée un compte</h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Ouvrez votre compte FAD-DIS pour commander plus facilement.
              </p>

              <div className="mt-6">
                <Button href="/inscription" variant="primary">
                  Créer un compte
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}