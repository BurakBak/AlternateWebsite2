import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const BlogFeed = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold">Latest Blog Posts</h3>
        <Button variant="outline" size="sm" asChild>
          <a 
            href="https://burakb.substack.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            Visit Blog
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>

      {/* Blog post cards */}
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">The Future of HR Analytics</CardTitle>
            <CardDescription>March 10, 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Exploring how AI is transforming HR metrics and decision-making processes.
            </p>
            <Button variant="link" className="mt-2 p-0" asChild>
              <a 
                href="https://burakb.substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Read more
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Evidence-Based HR Practices</CardTitle>
            <CardDescription>March 5, 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Why data-driven decision making is crucial for modern HR departments.
            </p>
            <Button variant="link" className="mt-2 p-0" asChild>
              <a 
                href="https://burakb.substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Read more
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Building High-Performance Teams</CardTitle>
            <CardDescription>February 28, 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Strategic approaches to team building in the modern workplace.
            </p>
            <Button variant="link" className="mt-2 p-0" asChild>
              <a 
                href="https://burakb.substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Read more
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogFeed;
