import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const fetchBlogPosts = async () => {
  try {
    // Use a CORS proxy to fetch the RSS feed
    const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://burakb.substack.com/feed');
    const data = await response.json();

    if (!data.items) {
      throw new Error('No items found in feed');
    }

    return data.items.slice(0, 3).map((item) => ({
      title: item.title,
      date: new Date(item.pubDate).toLocaleDateString(),
      description: item.description,
      link: item.link,
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};

const BlogFeed = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: fetchBlogPosts,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full border-2">
        <CardHeader className="border-b bg-muted/50">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">Latest Blog Posts</CardTitle>
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
          <CardDescription>
            Stay updated with our latest insights on HR and AI
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6">
          {isLoading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-1/4 mt-2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-3 bg-muted rounded w-full"></div>
                    <div className="h-3 bg-muted rounded w-5/6 mt-2"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <Card className="border-destructive">
              <CardContent className="pt-6">
                <p className="text-destructive">Failed to load blog posts. Please check back later.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {posts?.map((post, index) => (
                <Card key={index} className="border border-muted">
                  <CardHeader>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                    <CardDescription>{post.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: post.description }}
                    />
                    <Button variant="link" className="mt-2 p-0" asChild>
                      <a 
                        href={post.link}
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
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BlogFeed;