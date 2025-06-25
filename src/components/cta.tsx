import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-orange-600 to-red-600">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Pronto para despertar seu potencial?
            </h2>
            <p className="mx-auto max-w-[600px] text-orange-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comece sua jornada hoje mesmo. Teste grátis por 14 dias, sem
              compromisso.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="max-w-lg flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button
                type="submit"
                className="bg-white text-orange-600 hover:bg-gray-100"
              >
                Começar
              </Button>
            </form>
            <p className="text-xs text-orange-100">
              Teste grátis por 14 dias. Cancele quando quiser.{" "}
              <Link
                href="/termos"
                className="underline underline-offset-2 hover:text-white"
              >
                Termos de uso
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-8 text-orange-100 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Suporte 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Dados seguros</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
