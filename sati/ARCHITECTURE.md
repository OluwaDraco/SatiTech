# Sati Architecture

## Overview

Sati uses a monorepo structure designed for multi-platform development. The shared folder contains framework-agnostic code that can be used across different frontend implementations.

## Directory Structure

```
sati/
├── Backend/                    # GraphQL API Server
│   ├── schema/                # GraphQL schema definitions
│   ├── prisma/                # Database schema and migrations
│   ├── utils/                 # Utilities (JWT, bcrypt, etc.)
│   └── server.ts              # Server entry point
│
├── Frontend/                   # Next.js Web Application
│   ├── app/                   # Next.js app directory
│   │   ├── api/               # API routes (server actions)
│   │   │   └── graphql/       # GraphQL operations (imports from shared)
│   │   ├── UI/                # UI components
│   │   └── dashboard/         # Dashboard pages
│   └── components/            # Reusable components
│
├── shared/                     # Shared Code (Framework Agnostic)
│   └── graphql/
│       ├── client.ts          # GraphQL client setup
│       ├── queries.ts         # All GraphQL queries
│       ├── mutations.ts       # All GraphQL mutations
│       ├── types.ts           # TypeScript type definitions
│       └── index.ts           # Main export
│
└── webSocket/                  # WebSocket Server
    ├── server/                # Socket.io server
    └── client/                # Test client

```

## Technology Stack

### Backend

- **Runtime**: Node.js with tsx
- **Server**: GraphQL Yoga
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Authentication**: JWT with jose

### Frontend (Next.js)

- **Framework**: Next.js 14 (App Router)
- **GraphQL Client**: urql
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui

### Shared

- **GraphQL**: urql (peer dependency)
- **Language**: TypeScript

## Data Flow

```
Frontend Components
    ↓
Server Actions (app/api/graphql/queries.ts)
    ↓
Shared GraphQL Operations (@sati/shared/graphql)
    ↓
GraphQL Client (urql)
    ↓
Backend GraphQL Server (localhost:4000)
    ↓
Prisma ORM
    ↓
PostgreSQL Database
```

## Key Design Decisions

### 1. Shared GraphQL Layer

**Why**: Enables code reuse across multiple frontend platforms (web, mobile, desktop)

**Benefits**:

- Single source of truth for API operations
- Consistent types across all frontends
- Easy to add new frontend frameworks
- Simplified testing and maintenance

### 2. Monorepo Structure

**Why**: All related code in one repository

**Benefits**:

- Atomic commits across frontend/backend
- Easier to keep API contracts in sync
- Shared tooling and configuration
- Simplified CI/CD

### 3. TypeScript Path Aliases

The Frontend uses TypeScript path aliases to import from shared:

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"],
      "@sati/shared/*": ["../shared/*"]
    }
  }
}
```

## Adding New Frontend Frameworks

To add a new frontend (e.g., React Native, Vue, etc.):

1. Create new directory: `sati/frontend-mobile/`
2. Add to `tsconfig.json`:
    ```json
    {
        "compilerOptions": {
            "paths": {
                "@sati/shared/*": ["../shared/*"]
            }
        }
    }
    ```
3. Import shared GraphQL:
    ```typescript
    import { client, LOGIN_MUTATION } from "@sati/shared/graphql";
    ```

## Environment Variables

### Backend (.env)

```
DATABASE_URL=postgresql://user:password@localhost:5432/upwork_data
JWT_SECRET=your-secret-key
```

### Frontend (.env.local)

```
NEXT_PUBLIC_GRAPHQL_URL=http://localhost:4000
```

## Development Workflow

1. Start PostgreSQL database: `pg_ctl -D /opt/homebrew/var/postgresql@17 start`
    - To stop: `pg_ctl -D /opt/homebrew/var/postgresql@17 stop`
    - To check status: `pg_ctl -D /opt/homebrew/var/postgresql@17 status`
2. Run Backend: `cd sati/Backend && npx tsx server.ts`
3. Run Frontend: `cd sati/Frontend && npm run dev`
4. Access:
    - Frontend: http://localhost:3000
    - GraphQL API: http://localhost:4000

## Future Considerations

- **Mobile App**: React Native or Flutter (reuses shared/graphql)
- **Desktop App**: Electron (reuses shared/graphql)
- **Admin Panel**: Separate Next.js app (reuses shared/graphql)
- **Microservices**: Backend can be split into separate services while keeping shared GraphQL client
