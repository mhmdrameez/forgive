import { NextRequest, NextResponse } from "next/server";
import { getTranslations, setTranslations } from "@/lib/redis";
import { cookies } from "next/headers";

const LANG_COOKIE = "forgive_lang";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const lang = searchParams.get("lang");

    if (!lang) {
        return NextResponse.json({ error: "Language parameter is required" }, { status: 400 });
    }

    const translations = await getTranslations(lang);
    return NextResponse.json({ translations });
}

export async function POST(req: NextRequest) {
    const { lang, translations } = await req.json();

    if (!lang || !translations) {
        return NextResponse.json({ error: "Language and translations are required" }, { status: 400 });
    }

    // Set cookie for SSR detection
    const cookieStore = await cookies();
    cookieStore.set(LANG_COOKIE, lang, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
    });

    // Merge into global Redis cache
    await setTranslations(lang, translations);

    return NextResponse.json({ success: true });
}
