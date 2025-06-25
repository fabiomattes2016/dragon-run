import { AddRunDialog } from "./_components/add-run-dialog"
import Statistics from "./_components/statistics"
import TableRuns from "./_components/table-runs"
import AditionalStatistics from "./_components/aditional-statistics"
import { DashboardLineChart } from "./_components/dashboard-linechart"
import { getTotalCalories, getTotalDistance, getTotalRun, getTotalTime, getTrainingAvgPace, getTrainingSessions } from "@/server/training_session/actions"
// import { getTrainingSessions } from "@/server/training_session/actions"

export default async function RunningDashboard() {
  const sessions = await getTrainingSessions();
  const totalRuns = Number(await getTotalRun());
  const totalDistance = Number(await getTotalDistance());
  const totalDuration = Number(await getTotalTime());
  const totalCalories = Number(await getTotalCalories());
  const averagePace = Number(await getTrainingAvgPace());

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard de Corridas</h1>
            <p className="text-gray-600 mt-1">Acompanhe seu progresso e adicione novas corridas</p>
          </div>

          <AddRunDialog />
        </div>

        {/* Gráfico */}
        <DashboardLineChart sessions={sessions} />

        {/* Estatísticas */}
        <Statistics totalRuns={totalRuns} totalDistance={totalDistance} totalDuration={totalDuration} totalCalories={totalCalories} />

        {/* Estatísticas Adicionais */}
        <AditionalStatistics averagePace={averagePace} totalDistance={totalDistance} totalRuns={totalRuns} />

        {/* Tabela de Corridas */}
        <TableRuns sessions={sessions} />
      </div>
    </div>
  )
}
