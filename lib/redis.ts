import Redis from "ioredis";

const redisUrl = process.env.REDIS_CLOUD_URL;

if (!redisUrl) {
    console.warn("REDIS_CLOUD_URL is not defined in environment variables.");
}

const redis = redisUrl ? new Redis(redisUrl) : null;

export default redis;

export async function getTranslations(lang: string): Promise<Record<string, string>> {
    if (!redis) return {};
    return await redis.hgetall(`translations:${lang}`);
}

export async function setTranslations(lang: string, translations: Record<string, string>): Promise<void> {
    if (!redis || Object.keys(translations).length === 0) return;
    // Map object to field-value pairs for hmset
    await redis.hmset(`translations:${lang}`, translations);
    // Set expiry for 30 days
    await redis.expire(`translations:${lang}`, 60 * 60 * 24 * 30);
}
