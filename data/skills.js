import { 
  Code2, 
  Database, 
  Globe, 
  Layout, 
  Server, 
  Smartphone, 
  Terminal, 
  Wrench 
} from "lucide-react";

export const skills = [
  {
    category: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    items: ["JavaScript", "Python", "Java", "SQL", "HTML/CSS", "Dart"]
  },
  {
    category: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    items: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Flutter"]
  },
  {
    category: "Backend",
    icon: <Server className="w-5 h-5" />,
    items: ["Node.js", "REST APIs"]
  },
  {
    category: "Database",
    icon: <Database className="w-5 h-5" />,
    items: ["PostgreSQL", "MySQL", "Firebase","Supabase"]
  },
  {
    category: "Tools",
    icon: <Wrench className="w-5 h-5" />,
    items: ["Git","GitHub", "VS Code", "Figma","xampp"]
  }
];
