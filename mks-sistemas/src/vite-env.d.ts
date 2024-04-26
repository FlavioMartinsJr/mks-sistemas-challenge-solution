/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_MKSChallengeAPI: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}