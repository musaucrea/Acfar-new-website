
export interface Resource {
  id: string;
  title: string;
  type: 'article' | 'tract' | 'video' | 'audio';
  category: string;
  description: string;
}

export interface SearchResult {
  resources: Resource[];
  aiAnalysis?: string;
}
