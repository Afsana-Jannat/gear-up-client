import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <Loader2 className="h-12 w-12 animate-spin" />

        <div className="space-y-1 text-center">
          <h2 className="text-xl font-bold">Loading...</h2>

          <p className="text-sm text-muted-foreground">
            Please wait while we fetch your data.
          </p>
        </div>
      </div>
    </div>
  );
}
