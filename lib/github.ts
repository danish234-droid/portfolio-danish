export interface GitHubProfile {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
}

// Default fallback data if rate-limited or offline (Honest data per FR-GH3)
export const fallbackProfile: GitHubProfile = {
  name: "Danish Ali",
  login: "danish234-droid",
  avatar_url: "https://avatars.githubusercontent.com/u/10000000?v=4",
  bio: "Software Engineering Student & MERN Stack Developer | Faisalabad, Pakistan",
  public_repos: 12,
  followers: 5,
  following: 8,
  html_url: "https://github.com/danish234-droid",
};

export const fallbackRepos: GitHubRepo[] = [
  {
    id: 1,
    name: "workspace-manager",
    description: "Next.js & TypeScript multi-workspace productivity platform with Kanban board, calendar views, and state management.",
    html_url: "https://github.com/danish234-droid",
    homepage: "https://github.com/danish234-droid",
    stargazers_count: 3,
    forks_count: 1,
    language: "TypeScript",
    updated_at: "2026-09-28T12:00:00Z",
    topics: ["nextjs", "react", "typescript", "tailwind", "kanban"],
  },
  {
    id: 2,
    name: "gaming-ecommerce-store",
    description: "Full-featured gaming peripherals e-commerce storefront with Redux Toolkit cart management and responsive UI.",
    html_url: "https://github.com/danish234-droid",
    homepage: "https://github.com/danish234-droid",
    stargazers_count: 2,
    forks_count: 0,
    language: "TypeScript",
    updated_at: "2026-09-15T10:30:00Z",
    topics: ["react", "nextjs", "redux-toolkit", "ecommerce"],
  },
  {
    id: 3,
    name: "atm-management-system",
    description: "CLI and TypeScript banking transaction simulator featuring authentication, balance tracking, and ledger history.",
    html_url: "https://github.com/danish234-droid",
    homepage: "https://unbecoming-icicle.surge.sh/",
    stargazers_count: 1,
    forks_count: 0,
    language: "TypeScript",
    updated_at: "2026-08-20T14:15:00Z",
    topics: ["typescript", "nodejs", "cli"],
  },
  {
    id: 4,
    name: "javascript-games-hub",
    description: "Interactive JavaScript mini-game suite including Guess The Number, Tic Tac Toe, and DOM practice applications.",
    html_url: "https://github.com/danish234-droid",
    homepage: null,
    stargazers_count: 2,
    forks_count: 0,
    language: "JavaScript",
    updated_at: "2026-07-10T16:45:00Z",
    topics: ["javascript", "html5", "css3", "games"],
  },
];

export async function fetchGitHubData(): Promise<{
  profile: GitHubProfile;
  repos: GitHubRepo[];
  isLive: boolean;
}> {
  try {
    const username = "danish234-droid";
    const [profileRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "danish-ali-portfolio",
        },
      }),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "danish-ali-portfolio",
        },
      }),
    ]);

    if (!profileRes.ok || !reposRes.ok) {
      return { profile: fallbackProfile, repos: fallbackRepos, isLive: false };
    }

    const profile = (await profileRes.json()) as GitHubProfile;
    const repos = (await reposRes.json()) as GitHubRepo[];

    return {
      profile: {
        ...fallbackProfile,
        ...profile,
      },
      repos: Array.isArray(repos) && repos.length > 0 ? repos : fallbackRepos,
      isLive: true,
    };
  } catch {
    return { profile: fallbackProfile, repos: fallbackRepos, isLive: false };
  }
}
