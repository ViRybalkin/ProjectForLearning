export interface RatingProps {
  feedbackTitle: string;
  ratingTitle: string;
  hasFeedback?: boolean;
  onAccept: (starsCount: number, feedback?: string) => void;
}
