import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GradientButton({ to, children, ariaLabel }: { to: string; children: React.ReactNode; ariaLabel?: string }) {
  return (
    <Button asChild variant="gradient" size="xl" aria-label={ariaLabel}>
      <Link to={to as never}>{children}<ArrowRight aria-hidden="true" /></Link>
    </Button>
  );
}
