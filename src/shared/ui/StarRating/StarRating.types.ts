export interface StarRatingProps {
  size: number;
  onSelect: (starCount: number) => void;
  selectedStar: number;
  starNumber?: number;
}
