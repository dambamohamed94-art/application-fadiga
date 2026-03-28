import Container from "@/components/shared/container";
import Button from "@/components/ui/button";

export default function InscriptionPage() {
  return (
    <div className="py-14">
      <Container>
        <div className="mx-auto max-w-2xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-extrabold text-gray-900">Créer un compte</h1>
          <p className="mt-3 text-gray-600">
            Formulaire statique pour le moment, prêt à être branché ensuite.
          </p>

          <form className="mt-8 grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Prénom
              </label>
              <input
                type="text"
                className="h-12 w-full rounded-2xl border border-gray-300 px-4 outline-none focus:border-orange-500"
                placeholder="Votre prénom"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Nom
              </label>
              <input
                type="text"
                className="h-12 w-full rounded-2xl border border-gray-300 px-4 outline-none focus:border-orange-500"
                placeholder="Votre nom"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="h-12 w-full rounded-2xl border border-gray-300 px-4 outline-none focus:border-orange-500"
                placeholder="votre@email.com"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Téléphone
              </label>
              <input
                type="text"
                className="h-12 w-full rounded-2xl border border-gray-300 px-4 outline-none focus:border-orange-500"
                placeholder="+221..."
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                type="password"
                className="h-12 w-full rounded-2xl border border-gray-300 px-4 outline-none focus:border-orange-500"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                className="h-12 w-full rounded-2xl border border-gray-300 px-4 outline-none focus:border-orange-500"
                placeholder="••••••••"
              />
            </div>

            <div className="md:col-span-2">
             <Button type="submit" variant="primary" className="w-full">
              Ouvrir mon compte
            </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}