"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-20 text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          Algo mal pasó con la carga de página, 💥
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Porfavor intenta de nuevo ahora o más tarde
        </p>
        <div className="flex space-x-4">
          <Button
            variant="destructive"
            onClick={() => reset()}
            className="text-white font-bold py-2 px-4 rounded"
          >
            Intenta de nuevo
          </Button>
        </div>
        {error.digest && (
          <p className="fixed bottom-4 left-4 text-sm text-gray-500">
            Error digest: {error.digest}
          </p>
        )}
      </main>
    </div>
  );
}
