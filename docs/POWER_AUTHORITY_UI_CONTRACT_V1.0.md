# DingoOS Horizon — Power & Authority UI Contract v1.0

Public projections may represent:
- authority status: PROPOSED / ACTIVE / SUSPENDED / REVOKED / EXPIRED;
- consequence class: LOW / MODERATE / HIGH / CRITICAL;
- whether human authorization is required;
- verification and challenge status;
- uncertainty state;
- safety state;
- revocability and expiry;
- governed provenance reference.

Public projections must not expose:
- private credentials;
- HMAC or mTLS secrets;
- security roots;
- unrestricted internal control paths;
- protected IP;
- hidden implementation details;
- authority material not approved for public projection.

The UI must never infer that capability, confidence, consensus or cryptographic integrity constitutes authorization or scientific truth.