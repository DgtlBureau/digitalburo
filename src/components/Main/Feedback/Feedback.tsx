import { FeedbackDataMain } from '@/src/utils/DataLayers/FeedbackData';
import { FeedbackClient } from './FeedbackClient';

export const NewFeedback = () => {
  return <FeedbackClient feedback={FeedbackDataMain} />;
};
