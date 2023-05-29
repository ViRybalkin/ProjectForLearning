export interface StarRatingProps {
  size: number;
  onSelect: (starCount: number) => void;
  starNumber?: number;
  selectedStar?: number;
}
