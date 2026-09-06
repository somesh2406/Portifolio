export const LINKEDIN_URL = "https://www.linkedin.com/in/someswara-rao-gorle/";
export const GITHUB_URL = "https://github.com/somesh2406/";
export const EMAIL = "someshg2406@gmail.com";

export const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Work", id: "work" },
  { label: "Engineering", id: "engineering" },
  { label: "Stack", id: "stack" },
  { label: "Contact", id: "contact" },
];

export const ARC_CENTER = {
  x: -110,
  y: 300,
};

export const arcData = [
  {
    radius: 330,
    start: -92,
    end: 16,
    dot: -46,
    value: "03",
    suffix: "+",
    label: "YEARS ENGINEERING",
  },
  {
    radius: 395,
    start: -56,
    end: 60,
    dot: 2,
    value: "04",
    suffix: "",
    label: "CORE DOMAINS",
  },
  {
    radius: 460,
    start: -14,
    end: 72,
    dot: 44,
    value: "2023",
    suffix: "",
    label: "CAREER START",
  },
];

export const coreStack = [
  "React",
  "Go",
  "Java",
  "Platform Engineering",
  "SSO",
  "CI/CD",
];

export const workingStack = [
  "React Native",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "Rust",
  "Redis",
  "Kafka",
  "Android",
  "Docker",
  "Jenkins",
  "Linux",
  "Nginx",
  "Azure",
  "Bash",
];

export const learningStack = ["Kubernetes", "Terraform"];

export function polarPoint(
  centerX: number,
  centerY: number,
  radius: number,
  angleDegrees: number,
) {
  const angle = (angleDegrees * Math.PI) / 180;

  return {
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle),
  };
}

export function createArcPath(
  centerX: number,
  centerY: number,
  radius: number,
  startAngle: number,
  endAngle: number,
) {
  const start = polarPoint(centerX, centerY, radius, startAngle);
  const end = polarPoint(centerX, centerY, radius, endAngle);

  const delta = Math.abs(endAngle - startAngle);
  const largeArcFlag = delta > 180 ? 1 : 0;

  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
}
