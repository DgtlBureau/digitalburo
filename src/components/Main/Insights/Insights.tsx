import { getInsightsMetadata } from '@/src/utils/getInsightsMetadata';
import { postsSorting } from '@/src/utils/postsSorting';
import { InsightsClient } from './InsightsClient';

const postMetadata = getInsightsMetadata();
const sortedPosts = postsSorting(postMetadata);

export const Insights = () => {
  return <InsightsClient posts={sortedPosts} />;
};
