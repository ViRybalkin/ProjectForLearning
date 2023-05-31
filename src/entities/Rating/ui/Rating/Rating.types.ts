export interface RatingProps {
  feedbackTitle: string;
  ratingTitle: string;
  onAccept: (starsCount: number, feedback?: string) => void;
  rate?: number;
  hasFeedback?: boolean;
}
