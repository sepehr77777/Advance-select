import AdvancedSelect from "./components/AdvancedSelect"
import { mockItems } from "@/data/mockData"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <AdvancedSelect items={mockItems} />
    </div>
  )
}
