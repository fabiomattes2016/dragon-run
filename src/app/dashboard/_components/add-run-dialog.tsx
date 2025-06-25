"use client"

import type React from "react"

import { useState } from "react"
import { Plus, Calendar, Clock, Zap, Route } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { trainning_session } from "@/generated/prisma"
import { Decimal } from "@/generated/prisma/runtime/library"
import { createOrUpdateTrainingSession } from "@/server/training_session/actions"
import { useRouter } from "next/navigation"

// interface AddRunDialogProps {
//   onAddRun: (run: trainning_session) => void
// }

export function AddRunDialog() {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    distance_km: "",
    duration_minutes: "",
    calories_burned: "",
    date_time: "",
    notes: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.distance_km || Number.parseFloat(formData.distance_km) <= 0) {
      newErrors.distance_km = "Distância deve ser maior que 0"
    }

    if (!formData.duration_minutes || Number.parseInt(formData.duration_minutes) <= 0) {
      newErrors.duration_minutes = "Duração deve ser maior que 0"
    }

    if (!formData.calories_burned || Number.parseInt(formData.calories_burned) <= 0) {
      newErrors.calories_burned = "Calorias devem ser maior que 0"
    }

    if (!formData.date_time) {
      newErrors.date_time = "Data e hora são obrigatórias"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      const distance = formData.distance_km
      const duration = formData.duration_minutes
      const calories = formData.calories_burned
      const pace = (parseFloat(duration) / parseFloat(distance)).toFixed(2)

      const runData: trainning_session = {
        id: "00346d0e-d6d5-494b-8a6a-b6a0c38750dc",
        user_id: "b87f8db8-b073-46b9-a9fe-8553e554d124",
        distance_km: parseFloat(distance) as unknown as Decimal,
        duration_minutes: Number.parseFloat(duration),
        calories_burned: Number.parseFloat(calories),
        average_pace_km_per_min: parseFloat(pace) as unknown as Decimal,
        date_time: new Date(formData.date_time as string),
      }

      console.log(runData);

      // // Simular delay de API
      // await new Promise((resolve) => setTimeout(resolve, 3000))

      await createOrUpdateTrainingSession(runData)

      router.refresh();

      // Reset form
      setFormData({
        distance_km: "",
        duration_minutes: "",
        calories_burned: "",
        date_time: "",
        notes: "",
      })

      setErrors({})
      setIsOpen(false)

      // Simular toast notification
      console.log(`Corrida de ${distance}km registrada com sucesso!`)
    } catch (error) {
      console.error("Erro ao adicionar corrida:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const getCurrentDateTime = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, "0")
    const day = String(now.getDate()).padStart(2, "0")
    const hours = String(now.getHours()).padStart(2, "0")
    const minutes = String(now.getMinutes()).padStart(2, "0")

    return `${year}-${month}-${day}T${hours}:${minutes}`
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
          <Plus className="w-4 h-4 mr-2" />
          Nova Corrida
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Route className="w-5 h-5 text-orange-600" />
            Registrar Nova Corrida
          </DialogTitle>
          <DialogDescription>Preencha os detalhes da sua corrida para acompanhar seu progresso.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="distance" className="flex items-center gap-2">
                <Route className="w-4 h-4" />
                Distância (km) *
              </Label>
              <Input
                id="distance"
                type="number"
                step="0.1"
                min="0.1"
                placeholder="5.0"
                value={formData.distance_km}
                onChange={(e) => handleInputChange("distance_km", e.target.value)}
                className={errors.distance_km ? "border-red-500" : ""}
              />
              {errors.distance_km && <p className="text-sm text-red-500">{errors.distance_km}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Duração (min) *
              </Label>
              <Input
                id="duration"
                type="number"
                min="1"
                placeholder="30"
                value={formData.duration_minutes}
                onChange={(e) => handleInputChange("duration_minutes", e.target.value)}
                className={errors.duration_minutes ? "border-red-500" : ""}
              />
              {errors.duration_minutes && <p className="text-sm text-red-500">{errors.duration_minutes}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="calories" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Calorias Queimadas *
            </Label>
            <Input
              id="calories"
              type="number"
              min="1"
              placeholder="300"
              value={formData.calories_burned}
              onChange={(e) => handleInputChange("calories_burned", e.target.value)}
              className={errors.calories_burned ? "border-red-500" : ""}
            />
            {errors.calories_burned && <p className="text-sm text-red-500">{errors.calories_burned}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="datetime" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Data e Hora *
            </Label>
            <div className="flex gap-2">
              <Input
                id="datetime"
                type="datetime-local"
                value={formData.date_time}
                onChange={(e) => handleInputChange("date_time", e.target.value)}
                className={errors.date_time ? "border-red-500 flex-1" : "flex-1"}
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleInputChange("date_time", getCurrentDateTime())}
              >
                Agora
              </Button>
            </div>
            {errors.date_time && <p className="text-sm text-red-500">{errors.date_time}</p>}
          </div>

          {/* Preview do ritmo calculado */}
          {formData.distance_km && formData.duration_minutes && (
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-orange-700">
                <strong>Ritmo calculado:</strong> {(() => {
                  const pace = Number.parseInt(formData.duration_minutes) / Number.parseFloat(formData.distance_km)
                  const minutes = Math.floor(pace)
                  const seconds = Math.round((pace - minutes) * 60)
                  return `${minutes}:${seconds.toString().padStart(2, "0")}/km`
                })()}
              </p>
            </div>
          )}

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)} disabled={isLoading}>
              Cancelar
            </Button>
            <Button type="submit" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700" disabled={isLoading}>
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Salvando...
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Corrida
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
