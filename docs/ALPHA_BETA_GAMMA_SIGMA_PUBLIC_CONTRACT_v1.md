# DingoOS α–β–γ–Σ Public Interface Contract v1

This public-facing contract describes workflow boundaries without exposing private implementation, credentials, private IP, trade secrets or restricted invention data.

## Planes

- α: generation/exploration of candidates.
- β: evidence/challenge/verification assessment.
- γ: governance/safety/authorization assessment.
- Σ: provenance-preserving synthesis of the current state.

## Non-equivalence

`α != β != γ != Σ`

Generation is not verification. Verification is not authorization. Synthesis is not truth.

## Horizon boundary

Horizon consumes versioned, sanitized API representations only. It must not infer private backend state, expose secrets, or represent simulated/speculative material as observed fact.

## Evidence boundary

Public status labels must preserve epistemic and maturity state. A UI status is not scientific certification.

## Governance boundary

Consequential actions remain subject to DingoOS authorization controls and human authority. Public UI cannot grant authorization.

## Continuity boundary

Σ outputs may reference provenance identifiers and current state, but public surfaces must not expose restricted provenance payloads.

## Versioning

This is an interface contract, not a replacement for the private canonical schemas. Changes require compatibility review and provenance.