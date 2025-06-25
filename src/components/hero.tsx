import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Star, Play } from "lucide-react";
import {
  SignInButton,
  SignedOut
} from '@clerk/nextjs'

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10" />
      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                🔥 Novo Sistema de Treinos
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Desperte o{" "}
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Dragão
                </span>{" "}
                que há em você
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                O Dragon Runner é o sistema completo para controlar seus treinos
                de corrida, monitorar seu progresso e alcançar seus objetivos
                com a força de um dragão.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <SignedOut>
                <SignInButton>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Começar Agora
                  </Button>
                </SignInButton>
              </SignedOut>
              <Button
                variant="outline"
                size="lg"
                className="border-orange-200 text-orange-700 hover:bg-orange-50"
              >
                <Link href="/dashboard">
                  Ver Demo
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.9/5</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>+10.000 corredores</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20 absolute -top-4 -left-4" />
              <Image
                src="/placeholder.svg?height=400&width=400"
                width="400"
                height="400"
                alt="Dragon Runner App"
                className="relative z-10 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
