# DingoOS Horizon — Governed Contract Boundary v1.0

## Purpose
Horizon is the public/human-facing control surface. It does not expose private backend implementation, secrets, protected IP, security roots or unrestricted execution authority.

## Contract
Human → Horizon → Versioned API Contract → Governed DPO/URO → Core

## Epistemic display requirements
UI must distinguish at minimum: SOURCE_ONLY, HYPOTHESISED, FORMALISED, SIMULATED, IMPLEMENTED, TESTED, SUPPORTED, CONTRADICTED, REFUTED, REPLICATED, VALIDATED_FOR_DOMAIN and SUPERSEDED.

UI labels are representations of governed backend state; the frontend does not independently promote a claim to truth.

## Refutation boundary
SEARM refutation results are evidence-bearing contract objects. A contradiction or refutation remains linked to its target claim, observation, tolerance/context and provenance lineage.

## Governance boundary
Horizon may request generation, verification, analysis, simulation, evidence inspection and authorization workflows exposed by versioned contracts. It must not invent authority, bypass C-4PO/SEARM, bypass Snowflake publication gates or expose private governance/IP material.

## Power and safety display
Where applicable, Horizon should expose human-readable summaries of consequence class, authority status, uncertainty, safety state, verification state, revocation state and required human authorization without exposing protected internal policy or secrets.

## No absolute authority
Horizon never presents C-5PO, C-4PO, C-3PO or any agent as an infallible truth oracle or absolute sovereign.

## Failure handling
Contradictions, failures, unavailable evidence and insufficient authority must be visible as governed states rather than silently converted into success.

## Security
Authentication, authorization, transport security, provenance integrity and IP classification remain backend responsibilities. Public UI payloads must contain only contract-approved projections.