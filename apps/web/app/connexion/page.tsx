import Container from "@/components/shared/container";
import Button from "@/components/ui/button";

export default function ConnexionPage() {
  return (
    <div className="py-14">
      <Container>
        <div className="mx-auto max-w-xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-extrabold text-gray-900">Connexion</h1>
          <p className="mt-3 text-gray-600">
            Cette version est statique pour l’instant. Le branchement viendra ensuite.
          </p>

          <form className="mt-8 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="h-12 w-full rounded-2xl border border-gray-300 px-4 outline-none focus:border-orange-500"
                placeholder="votre@email.com"
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

            <Button type="submit" variant="dark" className="w-full">
              Se connecter
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}