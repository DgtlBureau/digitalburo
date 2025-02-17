import { getTeamMetadata } from '@/src/utils/getTeamMetadata';
import { TeamClient } from './TeamClient';

const getAllTeam = () => {
  const teamMetadata = getTeamMetadata('src/team');
  return teamMetadata;
};

export const Team = () => {
  const team = getAllTeam();

  return <TeamClient team={team} />;
};
