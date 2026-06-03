import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

type BackButtonProps = {
  fallbackTo?: string;
  label?: string;
  className?: string;
};

export const BackButton = ({
  fallbackTo = "/",
  label = "Back",
  className = "",
}: BackButtonProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate(fallbackTo);
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className={`inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background/90 px-5 py-2.5 font-cinzel text-[10px] uppercase tracking-[0.2em] text-primary transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground ${className}`}
    >
      <ArrowLeft className="h-3.5 w-3.5" />
      {label}
    </button>
  );
};
