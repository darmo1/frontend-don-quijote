import { Suspense } from "react";
import { SignupForm } from "./signup-form";
import { SpinnerLoading } from "@/app/_components/spinner-loading";

export default function SingnUpPage() {
  return (
    <div>
      <Suspense fallback={<SpinnerLoading />}>
        <SignupForm />
      </Suspense>
    </div>
  );
}
