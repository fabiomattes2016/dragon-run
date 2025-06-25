import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  TrendingUp,
  Calendar,
  MapPin,
  Timer,
  Trophy,
} from "lucide-react";

export default function Features() {
  return (
    <section id="recursos" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge className="bg-orange-100 text-orange-800">
              Recursos Poderosos
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Tudo que você precisa para dominar a corrida
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ferramentas profissionais para corredores de todos os níveis,
              desde iniciantes até atletas de elite.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
          <Card className="border-orange-100 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-2">
                <Target className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Planejamento Inteligente</CardTitle>
              <CardDescription>
                Crie planos de treino personalizados baseados em seus objetivos
                e nível atual.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-orange-100 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Análise de Performance</CardTitle>
              <CardDescription>
                Monitore seu progresso com gráficos detalhados e métricas
                avançadas.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-orange-100 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-2">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Agenda Inteligente</CardTitle>
              <CardDescription>
                Organize seus treinos com lembretes automáticos e sincronização
                com calendário.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-orange-100 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-2">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Rotas e GPS</CardTitle>
              <CardDescription>
                Descubra novas rotas, salve suas favoritas e acompanhe em tempo
                real.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-orange-100 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-2">
                <Timer className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Cronômetro Avançado</CardTitle>
              <CardDescription>
                Controle intervalos, voltas e tempos com precisão profissional.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-orange-100 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-2">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Conquistas</CardTitle>
              <CardDescription>
                Desbloqueie medalhas, bata recordes pessoais e compartilhe suas
                vitórias.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
