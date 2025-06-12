import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    overwrite: true,
    schema: "../Backend/schema.graphql",
    documents: "src/**/*.{tsx,ts}",
    generates: {
        "./src/generated/graphql.ts": {
            preset: "client",
            plugins: [
                "typescript",
                "typescript-operations",
                "typescript-react-apollo",
            ],
            config: {
                withHooks: true,
            },
        },
    },
};

export default config;
