// AI Stack dataset: categories, item schema, and curated initial items
// This file is self-contained to avoid modifying global types.

export type AiCategory =
  | "method"
  | "ide"
  | "assistant"
  | "rule"
  | "mcp"
  | "extension"
  | "infra"
  | "evaluation";

export type AiGroup = "ide_dev" | "protocols" | "concepts" | "approaches";

export const AI_GROUPS: readonly AiGroup[] = [
  "ide_dev",
  "protocols",
  "concepts",
  "approaches",
] as const;

export type AiItemLinkset = {
  setup?: string;
  rules?: string;
  example?: string;
};

export type AiItem = {
  id: string;
  name: string;
  category: AiCategory;
  group: AiGroup;
  icon?: string;
  shortWhy?: string;
  links?: AiItemLinkset;
  tags?: string[];
  featured?: boolean;
  heat?: number;
};

export const AI_CATEGORIES: readonly AiCategory[] = [
  "method",
  "ide",
  "assistant",
  "rule",
  "mcp",
  "extension",
  "infra",
  "evaluation",
] as const;

export const aiStackItems: AiItem[] = [
  // Concepts and methodologies
  {
    id: "method-openspec",
    name: "Spec-Driven Development",
    category: "method",
    group: "concepts",
    icon: "i-twemoji-open-book",
    shortWhy: "Develop AI systems guided by specification before execution",
    tags: ["spec", "planning"],
  },
  {
    id: "concepts-agent-coordination",
    name: "Agent-Based Coordination",
    category: "method",
    group: "concepts",
    icon: "i-twemoji-people-holding-hands",
    shortWhy: "Coordinate multiple agents to accomplish complex goals",
    tags: ["agents", "coordination"],
  },
  {
    id: "concepts-token-budget",
    name: "Token Budget Management",
    category: "method",
    group: "concepts",
    icon: "i-twemoji-abacus",
    shortWhy: "Strategically manage context and token usage for LLMs",
    tags: ["tokens", "context"],
  },

  // IDE / Development Environments
  {
    id: "ide-vscode",
    name: "VSCode",
    category: "ide",
    group: "ide_dev",
    icon: "i-logos-visual-studio-code",
    shortWhy: "Popular, professional IDE for coding and AI projects",
    tags: ["ide", "vscode"],
  },
  {
    id: "ide-rider",
    name: "Rider",
    category: "ide",
    group: "ide_dev",
    icon: "i-twemoji-rocket",
    shortWhy: "IDE for .NET development",
    tags: ["ide", "dotnet"],
  },

  // Protocols & Standards (MCP)

  // Emerging approaches
  {
    id: "approaches-context-management",
    name: "Context Management",
    category: "method",
    group: "approaches",
    icon: "i-twemoji-card-index-dividers",
    shortWhy:
      "Control and retain context and memory for long-running agent interactions",
    tags: ["context", "memory"],
  },
  {
    id: "approaches-agent-orchestration",
    name: "Agent Orchestration",
    category: "method",
    group: "approaches",
    icon: "i-twemoji-ringed-planet",
    shortWhy:
      "Coordinate groups of agents to solve multi-step or complex tasks",
    tags: ["agents", "orchestration"],
  },
  {
    id: "approaches-cot",
    name: "Chain-of-Thought Reasoning",
    category: "method",
    group: "approaches",
    icon: "i-twemoji-thought-balloon",
    shortWhy: "Step-by-step reasoning and analysis with language models",
    tags: ["reasoning"],
  },
  {
    id: "approaches-prompt-engineering",
    name: "Prompt Engineering Tools/Techniques",
    category: "method",
    group: "approaches",
    icon: "i-twemoji-hammer-and-wrench",
    shortWhy:
      "Craft and evaluate prompts to achieve precise, targeted model outputs",
    tags: ["prompting"],
  },
];
