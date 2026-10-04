import type { EpistemicState, RefutationResult } from "./searm-refutation";

export interface RefutationGraphNode extends RefutationResult {
  label: string;
  parentObjectId?: string;
  children: string[];
}

export interface RefutationGraphViewModel {
  nodes: RefutationGraphNode[];
  selectedObjectId?: string;
  stateFilter?: EpistemicState;
}
