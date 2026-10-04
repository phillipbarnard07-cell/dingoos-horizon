export type EpistemicState =
  | "HYPOTHESISED"
  | "CONTRADICTED"
  | "DERIVED"
  | "ESTABLISHED";

export interface CounterHypothesis {
  object_type: "COUNTER_HYPOTHESIS";
  derived_from: string;
  parent_provenance_hash: string;
  prediction: number[];
  status: "DERIVED";
}

export interface RefutationResult {
  object_id: string;
  status: EpistemicState;
  deltas: number[];
  tolerance: number;
  provenance_hash: string;
  counter_hypothesis?: CounterHypothesis | null;
}

export interface LedgerQuery {
  state?: EpistemicState;
  object_type?: string;
  keyword?: string;
}
