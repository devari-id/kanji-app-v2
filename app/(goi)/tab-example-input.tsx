import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Fragment } from "react/jsx-runtime";

const tabs = [
  {
    value: "examples",
    label: "Examples",
    content: {
      title: "Examples",
      description: "Example description",
      content: "Main Content",
    },
  },
  {
    value: "create-example-manually",
    label: "Create Example Manually",
    content: {
      title: "Examples",
      description: "Example description",
      content: "Main Content",
    },
  },
  {
    value: "create-example-automatically",
    label: "Generate Example With AI",
    content: {
      title: "Examples",
      description: "Example description",
      content: "Main Content",
    },
  },
];

export default function TabExampleInput() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="w-full flex items-center justify-center">
        {tabs.map((tab, i) => (
          <Fragment key={i}>
            <TabsTrigger value={tab.value}>{tab.label}</TabsTrigger>
          </Fragment>
        ))}
      </TabsList>
      {tabs.map((tab, i) => (
        <TabsContent key={i} value={tab.value}>
          <Card>
            <CardHeader>
              <CardTitle>{tab.content.title}</CardTitle>
              <CardDescription>{tab.content.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {tab.content.content}
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}
