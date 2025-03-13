import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h4 className="text-lg font-bold mb-4">Alternate Consulting</h4>
          <p className="text-muted-foreground">
            Transforming HR through AI and evidence-based strategies. We help organizations
            maximize their human potential with cutting-edge solutions.
          </p>

          <div className="border-t mt-8 pt-8 text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Alternate Consulting. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;