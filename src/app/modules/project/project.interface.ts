export type TProject = {
    project_id: number;
    title: string;
    description: string;
    contributions: string[];
    duration: string;
    technologies_used: string[];
    live_url: string;
    github_client: string;
    github_server: string;
    image_url: string;
    stack: string;
    team_size?: number;
    status: string;
}