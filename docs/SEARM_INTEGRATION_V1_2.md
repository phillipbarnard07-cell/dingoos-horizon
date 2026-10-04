# Horizon v1.2.0 SEARM Integration

This repository consumes the DingoOS SEARM refutation contract.

## Endpoints

- POST /horizon/searm/c4po/refute-and-counter
- GET /horizon/searm/ledger/search
- GET /horizon/searm/ledger/provenance/{object_id}

## Visual model

Claim node -> telemetry anomaly -> tolerance comparison -> contradiction or continuation -> derived counter-hypothesis -> provenance lineage.

Epistemic badges must distinguish HYPOTHESISED, CONTRADICTED, DERIVED and ESTABLISHED. A badge is an epistemic state display, not a declaration of universal truth.

## Required inspector fields

- object_id
- object_type
- status
- prediction
- measured observation
- delta/residual
- tolerance
- mathematical admissibility result
- parent provenance hash
- derived object identifiers
- source/acquisition metadata

## Security

The UI never stores or displays the HMAC secret. Authentication is performed by the backend boundary.

## Evidence discipline

The Horizon inspector is an audit/control surface. It must preserve contradicted hypotheses and their lineage rather than deleting failed branches.
