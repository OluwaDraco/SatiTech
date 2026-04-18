# @sati/shared

Shared code for all Sati frontend applications.

## Structure

```
shared/
├── graphql/
│   ├── client.ts       # GraphQL client configuration
│   ├── queries.ts      # GraphQL queries
│   ├── mutations.ts    # GraphQL mutations
│   ├── types.ts        # TypeScript types
│   └── index.ts        # Main export file
├── package.json
├── tsconfig.json
└── README.md
```

## Usage

### In Next.js Frontend

```typescript
import { client, LOGIN_MUTATION, LoginResult } from "@sati/shared/graphql";
```

### In Future Frontend Frameworks

Add to `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@sati/shared/*": ["../shared/*"]
    }
  }
}
```

Or install as a local package:
```bash
npm install file:../shared
```

## Benefits

- **Framework Agnostic**: Use the same GraphQL queries across Next.js, React, React Native, etc.
- **Type Safety**: Shared TypeScript types ensure consistency
- **Single Source of Truth**: Update once, use everywhere
- **Easy Testing**: Test queries independently of UI frameworks
