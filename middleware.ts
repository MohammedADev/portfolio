import { NextResponse } from "next/server";

export function middleware() {
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
    script-src-elem 'self' 'unsafe-inline' https:;
    style-src 'self' 'unsafe-inline';
    style-src-elem 'self' 'unsafe-inline';
    style-src-attr 'self' 'unsafe-inline';
    img-src 'self' blob: data: https: http:;
    font-src 'self' https:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self';
    block-all-mixed-content;
    upgrade-insecure-requests;
    connect-src 'self' https: http:;
  `;

  const response = NextResponse.next();
  response.headers.set("Content-Security-Policy", cspHeader.replace(/\n/g, ""));
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}
