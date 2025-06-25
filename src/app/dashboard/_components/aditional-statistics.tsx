import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AditionalStatistics(
  {
    totalRuns,
    totalDistance,
    averagePace
  }: {
    totalRuns: number;
    totalDistance: number;
    averagePace: number;
  }
) {
  const formatPace = (pace: number) => {
    const minutes = Math.floor(pace);
    const seconds = Math.round((pace - minutes) * 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}/km`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-8">
      <Card>
        <CardHeader>
          <CardTitle>Ritmo Médio Geral</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-blue-600">
            {formatPace(averagePace)}
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Baseado em {totalRuns} corridas
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Distância Média</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-green-600">
            {(totalDistance / totalRuns).toFixed(1)} km
          </div>
          <p className="text-sm text-muted-foreground mt-2">Por corrida</p>
        </CardContent>
      </Card>
    </div>
  );
}
