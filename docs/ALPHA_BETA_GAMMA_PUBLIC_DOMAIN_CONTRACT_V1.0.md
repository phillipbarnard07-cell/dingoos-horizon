# DingoOS Horizon — Alpha–Beta–Gamma Public Domain Contract v1.0

## Purpose

Horizon implements the **Alpha domain** of the DingoOS Alpha–Beta–Gamma architecture.

The three domains are:

- **Alpha:** public/front-end presentation and input;
- **Beta:** protected backend computation and DingoOS IP;
- **Gamma:** background studies, hypotheses, theories, evidence and competing explanations.

Horizon must expose Alpha safely without exposing Beta internals or treating Gamma material as truth.

## 1. Alpha responsibilities

Horizon may capture:

- human questions;
- requests;
- supplied documents;
- user theories;
- requirements;
- constraints;
- selected research resources;
- observations;
- interface actions.

The frontend must attach the information necessary for backend provenance binding through the versioned API contract.

## 2. Beta boundary

Horizon must not contain or expose:

- private algorithms;
- backend credentials;
- security roots;
- unrestricted execution paths;
- protected research implementation;
- private IP;
- internal policy secrets.

Horizon receives only contract-approved projections.

## 3. Gamma boundary

Gamma research context may be represented in the UI as:

- background study;
- source;
- hypothesis;
- competing explanation;
- prior evidence;
- contradiction;
- failed approach;
- unresolved question.

The UI must not label a Gamma source or theory as established fact merely because it was retrieved.

## 4. Required public epistemic labels

At minimum support:

```
SOURCE_ONLY
HYPOTHESISED
FORMALISED
PREDICTED
SIMULATED
TESTED
MEASURED
SUPPORTED
PARTIALLY_SUPPORTED
CONTRADICTED
REFUTED
INCONCLUSIVE
REPLICATED
INDEPENDENTLY_REPLICATED
VALIDATED_FOR_SPECIFIED_DOMAIN
SUPERSEDED
```

## 5. Governance display

Where authorized, Horizon should display:

- consequence class;
- authorization state;
- human authorization requirement;
- uncertainty;
- safety state;
- security classification at public-safe granularity;
- verification state;
- refutation state;
- revocation/expiry;
- provenance reference;
- publication state.

## 6. Failure-first UI rule

The frontend must visibly distinguish:

- unavailable;
- insufficient evidence;
- contradicted;
- refuted;
- inconclusive;
- blocked by authorization;
- blocked by safety;
- blocked by security;
- outside capability.

These states must never silently become success.

## 7. Alpha-to-Beta request contract

Conceptually:

```
Horizon
 → Alpha envelope
 → versioned API
 → FoundationObject
 → Beta
```

The UI does not invoke private implementation directly.

## 8. Gamma presentation

Gamma content should be shown with provenance and status.

Example:

```
Background theory
Source: ...
Epistemic state: SOURCE_ONLY
Evidence: ...
Contradictions: ...
Limitations: ...
```

This allows users to compare research context without confusing retrieval with validation.

## 9. Symmetric theory display

User-proposed and externally sourced theories must be displayable through the same status model.

The UI must not promote or demote a theory solely because of:

- who proposed it;
- institutional prestige;
- popularity;
- ownership;
- system confidence.

## 10. C-3PO/C-4PO/SEARM/C-5PO display

Where exposed:

- C-3PO = proposal/generation;
- C-4PO = verification/audit;
- SEARM = adversarial/refutation;
- C-5PO = continuity/governance.

No agent is presented as an infallible truth oracle.

## 11. Public projection rule

A public response is a projection:

```
Private canonical object
 → security/IP policy
 → governance policy
 → epistemic policy
 → public projection
 → Horizon
```

The reverse direction cannot reconstruct private canonical state merely from the projection.

## 12. Final UI grammar

> **Alpha presents. Beta constructs. Gamma contextualises. The governed DingoOS runtime tests, verifies, challenges and preserves the result.**

