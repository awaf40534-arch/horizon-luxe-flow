import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Horizon RH — Éclairer les parcours, révéler les talents" },
      { name: "description", content: "Start-up sociale sénégalaise dédiée à l'orientation des jeunes et au conseil RH innovant pour les entreprises africaines." },
      { name: "author", content: "Horizon RH" },
      { name: "theme-color", content: "#0A1A3F" },
      { property: "og:title", content: "Horizon RH — Éclairer les parcours, révéler les talents" },
      { property: "og:description", content: "Start-up sociale sénégalaise dédiée à l'orientation des jeunes et au conseil RH innovant pour les entreprises africaines." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Horizon RH — Éclairer les parcours, révéler les talents" },
      { name: "twitter:description", content: "Start-up sociale sénégalaise dédiée à l'orientation des jeunes et au conseil RH innovant pour les entreprises africaines." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/72b168d3-3b03-4042-98f7-082b3aa9b8d6/id-preview-352c2067--b6cad973-b4d8-4d4a-a24b-d8640ad165d1.lovable.app-1777770718220.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/72b168d3-3b03-4042-98f7-082b3aa9b8d6/id-preview-352c2067--b6cad973-b4d8-4d4a-a24b-d8640ad165d1.lovable.app-1777770718220.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
