import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge className="bg-orange-100 text-orange-800">
                Resultados Comprovados
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Transforme sua corrida em uma jornada épica
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Junte-se a milhares de corredores que já descobriram o poder do
                Dragon Runner para alcançar seus objetivos mais ambiciosos.
              </p>
            </div>
            <ul className="grid gap-4">
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Melhore seu tempo em até 30% nos primeiros 3 meses</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Reduza o risco de lesões com treinos balanceados</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Mantenha a motivação com desafios personalizados</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Conecte-se com uma comunidade ativa de corredores</span>
              </li>
            </ul>
          </div>
          <Image
            src="/placeholder.svg?height=400&width=500"
            width="500"
            height="400"
            alt="Corredor usando Dragon Runner"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </div>
    </section>
  );
}
