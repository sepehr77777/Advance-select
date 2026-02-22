import { SelectItem } from "@/types/select"

export const mockItems: SelectItem[] = Array.from(
  { length: 1000 },
  (_, i) => ({
    id: i,
    name: `Item ${i}`,
    group: i % 3 === 0 ? "Frontend" : i % 3 === 1 ? "Backend" : "DevOps"
  })
)
