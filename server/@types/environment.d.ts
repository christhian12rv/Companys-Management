declare global {
	namespace NodeJS {
		interface ProcessEnv {
            SERVER_URL: string;
			PORT: number;
			DATABASE_URL: string;
		}
	}
}

export {};