import { Suspense } from "react";
import { SignupForm } from "./signup-form";

export default function SingnUpPage() {
  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <SignupForm />
      </Suspense>
    </div>
  );
}
