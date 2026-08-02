'use client';

type Props = {
  image?: string;
};

export default function GearImagePreview({ image }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card">
      <div className="aspect-[4/3] bg-muted">
        {image ? (
          <img
            src={image}
            alt="Preview"
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.src =
                'https://placehold.co/800x600?text=Invalid+Image';
            }}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Image preview will appear here
          </div>
        )}
      </div>

      <div className="border-t p-4">
        <h3 className="font-semibold">Live Preview</h3>

        <p className="mt-1 text-sm text-muted-foreground">
          Paste an image URL to preview your gear before publishing.
        </p>
      </div>
    </div>
  );
}
