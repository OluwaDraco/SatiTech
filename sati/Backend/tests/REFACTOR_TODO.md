# Refactor TODO

## Extract Resolver Logic

**Problem:** Resolver logic is embedded in schema builders. Unit tests copy the logic instead of testing the actual code.

**Solution:** Extract resolvers into separate files so they can be imported and tested directly.

**Steps:**
1. Create `schema/resolvers/` directory
2. Extract resolver functions (loginResolver, createUserResolver, etc.)
3. Import and use them in schema builders
4. Update unit tests to import and test the actual resolver functions

**Benefit:** Test the real production code, not copies. No duplication.

---
*Status: TODO*
