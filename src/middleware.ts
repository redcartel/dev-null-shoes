import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const reqUrl = new URL(request.url);

    if (/^\/?$/.test(new URL(request.url).pathname)) {
        reqUrl.pathname = '/dev';
        return NextResponse.rewrite(reqUrl);
    }
}