"use client"

import { CartesianGrid, Line, LineChart, XAxis, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A line chart with dots"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

type PlainTrainingSession = {
  id: string;
  user_id: string;
  date_time: Date | null;
  distance_km: number; // agora é number, não Decimal
  duration_minutes: number;
  calories_burned: number;
  average_pace_km_per_min: number; // idem
};

export function DashboardLineChart({sessions} : {sessions: PlainTrainingSession[]}) {
  return (
    <div className="grid gap-6 mt-8 mb-8 h-fit">
    <Card>
      <CardHeader>
        <CardTitle>Km x Dia</CardTitle>
        <CardDescription>Últimos 30 dias</CardDescription>
      </CardHeader>
      <CardContent className="max-h-[200px] h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={sessions}
              margin={{
                left: 12,
                right: 12,
              }}
              height={200}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date_time"
                tickLine={false}
                axisLine={false}
                tickMargin={5}
                tickFormatter={(value) => {
                  if (!value) return ""
                  const date = new Date(value)
                  return date.toLocaleString("pt-BR", {
                    timeZone: "America/Sao_Paulo",
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                }}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="distance_km"
                type="natural"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={{
                  fill: "var(--color-desktop)",
                }}
                activeDot={{
                  r: 6,
                }}
              />
            </LineChart>
          </ChartContainer>
        </ResponsiveContainer>
      </CardContent>
    </Card>
    </div>
  )
}
