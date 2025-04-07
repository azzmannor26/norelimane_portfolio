let userConfig = undefined
try {
    // try to import ESM first
    userConfig = await import('./v0-user-next.config.mjs')
} catch (e) {
    try {
        // fallback to CJS import
        userConfig = await import("./v0-user-next.config");
    } catch (innerError) {
        // ignore error
    }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // This is crucial for static exports
    basePath: process.env.NODE_ENV === 'production' ? '/norelimane_portfolio' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/norelimane_portfolio' : '',
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,  // Required for static export
    },
    experimental: {
        webpackBuildWorker: true,
        parallelServerBuildTraces: true,
        parallelServerCompiles: true,
    },
}

if (userConfig) {
    // ESM imports will have a "default" property
    const config = userConfig.default || userConfig

    for (const key in config) {
        if (
            typeof nextConfig[key] === 'object' &&
            !Array.isArray(nextConfig[key])
        ) {
            nextConfig[key] = {
                ...nextConfig[key],
                ...config[key],
            }
        } else {
            nextConfig[key] = config[key]
        }
    }
}

export default nextConfig