interface HeroImageProps {
  className?: string;
  children: React.ReactNode;
}

export function HeroImage({ children }: HeroImageProps) {
  return (
    <div className="p-5 lg:p-0">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/CL-es-20241216-TRIFECTA-perspective_fa92697f-c8e9-4b93-af22-dcc9bb37c84d_large.jpg"
        className="absolute top-0 right-0 bottom-0 left-0 -z-20 w-full h-screen object-cover"
        alt="Imagen de Netflix"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/75 -z-10"></div>
      {children}
    </div>
  );
}
