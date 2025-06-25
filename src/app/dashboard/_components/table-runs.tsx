import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type PlainTrainingSession = {
  id: string;
  user_id: string;
  date_time: Date | null;
  distance_km: number; // agora é number, não Decimal
  duration_minutes: number;
  calories_burned: number;
  average_pace_km_per_min: number; // idem
};

export default async function TableRuns({sessions}: {sessions: PlainTrainingSession[]}) {
  const trainingSessions = sessions

  const formatDate = (dateString: Date | string | null) => {
    if (!dateString) return "-"; // caso seja null
      const d = typeof dateString === "string" ? new Date(dateString) : dateString;
      return d.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
  };

  const formatPace = (pace: number) => {
    const minutes = Math.floor(pace);
    const seconds = Math.round((pace - minutes) * 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}/km`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Histórico de Corridas</CardTitle>
        <CardDescription>
          Suas corridas mais recentes e estatísticas detalhadas
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Data/Hora</TableHead>
              <TableHead>Distância</TableHead>
              <TableHead>Duração</TableHead>
              <TableHead>Ritmo Médio</TableHead>
              <TableHead>Calorias</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trainingSessions.map((session) => (
              <TableRow key={session.id}>
                <TableCell className="font-medium">
                  {formatDate(session.date_time)}
                </TableCell>
                <TableCell>{session.distance_km} km</TableCell>
                <TableCell>{session.duration_minutes} min</TableCell>
                <TableCell>{formatPace(session.average_pace_km_per_min)}</TableCell>
                <TableCell>{session.calories_burned} cal</TableCell>
                <TableCell>
                  <Badge
                    variant={session.distance_km >= 5 ? "default" : "secondary"}
                    className={
                      session.distance_km >= 5
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }
                  >
                    {session.distance_km >= 5 ? "Longa" : "Curta"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
