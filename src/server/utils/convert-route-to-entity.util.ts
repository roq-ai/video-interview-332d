const mapping: Record<string, string> = {
  answers: 'answer',
  invitations: 'invitation',
  organizations: 'organization',
  questions: 'question',
  users: 'user',
  videos: 'video',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
