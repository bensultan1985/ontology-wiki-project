export interface Concept {
  conceptId: string | number;
  displayName: string | null | undefined;
  description: string | null | undefined;
  parentIds: number[] | null;
  childIds: number[] | null;
  alternateNames: string[] | null;
}

export interface RenderTree {
  id: number;
  name: string;
  children?: readonly RenderTree[];
}

export interface Matches {
  id: number;
  matches: number;
}
