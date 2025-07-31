
import { CustomerDashboard } from "@/components/dashboards/customer-dashboard";

export default function DashboardPage() {
  // In a real application, you would fetch the user's role
  // and conditionally render the appropriate dashboard.
  // For now, we default to the CustomerDashboard.
  return <CustomerDashboard />;
}
