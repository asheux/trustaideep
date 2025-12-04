declare namespace NodeJS {
  interface ProcessEnv {
    PUBLIC_URL?: string;
    TAID_DEPLOY_ENVIRONMENT?: string;
  }
}

interface Process {
  env: NodeJS.ProcessEnv;
}

declare const process: Process;
