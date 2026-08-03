export interface Wine {
  id: string;
  name: string;
  vintage: number | null;
  type: string;
  winery: string | null;
  region: string | null;
  country: string | null;
  averageRating: number | null;
  ratingsCount: number | null;
  confidence: number;
}
