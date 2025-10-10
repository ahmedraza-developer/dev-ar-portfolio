"use client";
// Components
import data from "@/data/projects.json";
import { ThreeDMarquee } from "../../src/components/ui/3d-marquee";
import { useState } from "react";
// Next
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Drawer, 
  DrawerClose, 
  DrawerContent, 
  DrawerDescription, 
  DrawerFooter, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerTrigger 
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, Eye, Send } from "lucide-react";
import { toast } from "sonner";

// Media imports
import Website1 from "media/projects/websites/1.png";
import Website2 from "media/projects/websites/2.png";
import Website3 from "media/projects/websites/3.png";
import Website4 from "media/projects/websites/4.png";
import Website5 from "media/projects/websites/5.png";
import Website6 from "media/projects/websites/6.png";
import Website7 from "media/projects/websites/7.png";
import Website8 from "media/projects/websites/8.png";
import Ecommerce1 from "media/projects/ecommerce/1.png";
import Ecommerce2 from "media/projects/ecommerce/2.png";
import Lp1 from "media/projects/landing-pages/1.png";
import Lp2 from "media/projects/landing-pages/2.png";
import Lp3 from "media/projects/landing-pages/3.png";
import Lp4 from "media/projects/landing-pages/4.png";
import Lp5 from "media/projects/landing-pages/5.png";
import Lp6 from "media/projects/landing-pages/6.png";
import Lp7 from "media/projects/landing-pages/7.png";
import Lp8 from "media/projects/landing-pages/8.png";
import Lp9 from "media/projects/landing-pages/9.png";
import Lp10 from "media/projects/landing-pages/10.png";
import Lp11 from "media/projects/landing-pages/11.png";
import Lp12 from "media/projects/landing-pages/12.png";
import Lp13 from "media/projects/landing-pages/13.png";
import Lp14 from "media/projects/landing-pages/14.png";
import Lp15 from "media/projects/landing-pages/15.png";
import Lp16 from "media/projects/landing-pages/16.png";
import EmailTemplates1 from "media/projects/email-templates/1.png";
import EmailTemplates2 from "media/projects/email-templates/2.png";
import EmailTemplates3 from "media/projects/email-templates/3.png";
import EmailTemplates4 from "media/projects/email-templates/4.png";
import EmailTemplates5 from "media/projects/email-templates/5.png";
import EmailTemplates6 from "media/projects/email-templates/6.png";
import EmailTemplates7 from "media/projects/email-templates/7.png";

type Project = {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  tags: string[];
  link: string;
  category: string;
  rating: number;
  ratingCount: number;
};

type ProjectData = {
  [key: string]: Project[];
};

type FeedbackForm = {
  rating: number;
  whatLiked: string;
  whatDisliked: string;
  improvements: string;
  additionalComments: string;
};

const projects: ProjectData = {
  all: [
    // Websites
    {
      id: 1,
      image: Website1,
      title: "Crystallite Digital",
      description: "Modern digital agency website with responsive design",
      tags: ["Nextjs 13", "Bootstrap 5", "Jquery"],
      link: "https://crystallitedigital.com/",
      category: "website",
      rating: 4.5,
      ratingCount: 12
    },
    {
      id: 2,
      image: Website2,
      title: "Infinity Animations",
      description: "Animation studio portfolio with modern UI/UX",
      tags: ["Nextjs 14", "Tailwind Css", "Shadcn Ui"],
      link: "https://infinityanimations.com/",
      category: "website",
      rating: 4.8,
      ratingCount: 8
    },
    {
      id: 3,
      image: Website3,
      title: "Portfolio Web App",
      description: "Web app with HTML5, CSS3, Bootstrap, PHP, Jquery, Javascript, Slick",
      tags: ["HTML 5", "CSS 3", "Bootstrap 5", "Php", "Jquery", "Javascript", "Slick"],
      link: "https://portfolio.mhrizwan.com/web-apps/001/",
      category: "website",
      rating: 4.3,
      ratingCount: 10
    },
    {
      id: 4,
      image: Website4,
      title: "Portfolio Website",
      description: "Tailwind CSS, Javascript, Embla slider",
      tags: ["HTML 5", "Tailwind CSS", "Javascript", "Embla"],
      link: "https://portfolio.mhrizwan.com/websites/001/",
      category: "website",
      rating: 4.2,
      ratingCount: 7
    },
    {
      id: 5,
      image: Website5,
      title: "Bestselling Publisher",
      description: "Nextjs, Tailwind CSS, Jquery, Javascript, Embla",
      tags: ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      link: "https://bestsellingpublisher.com/",
      category: "website",
      rating: 4.6,
      ratingCount: 9
    },
    {
      id: 6,
      image: Website6,
      title: "Website Design Hub",
      description: "Nextjs, Tailwind CSS, Javascript, Swiper, Slick, Material Tailwind",
      tags: ["Nextjs 14", "Tailwind CSS", "Javascript", "Swiper", "Slick", "Material Tailwind"],
      link: "https://webiste-design-hub.vercel.app/",
      category: "website",
      rating: 4.7,
      ratingCount: 6
    },
    {
      id: 7,
      image: Website7,
      title: "Mini Investments",
      description: "Nextjs 14, Tailwind CSS",
      tags: ["Nextjs 14", "Tailwind CSS"],
      link: "https://www.mini-investments.net/",
      category: "website",
      rating: 4.1,
      ratingCount: 5
    },
    // Virtual Assistant
    {
      id: 8,
      image: Website8,
      title: "Baby Siri - Virtual Assistant",
      description: "AI-powered virtual assistant interface",
      tags: ["HTML5", "CSS3", "Javascript ES6"],
      link: "https://baby-siri.netlify.app/",
      category: "virtualAssistant",
      rating: 4.6,
      ratingCount: 11
    },
    // Landing Pages
    {
      id: 9,
      image: Lp1,
      title: "Children Book Illustration",
      description: "Creative landing page for book illustration services",
      tags: ["HTML 5", "CSS 3", "Jquery", "Slick"],
      link: "https://jumpto1.com/children-book-illustration-services/",
      category: "landingPages",
      rating: 4.3,
      ratingCount: 9
    },
    {
      id: 10,
      image: Lp2,
      title: "iOS App Development",
      description: "Landing page for iOS app development services",
      tags: ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Embla"],
      link: "https://jumpto1.com/ios-app-development-services/",
      category: "landingPages",
      rating: 4.2,
      ratingCount: 8
    },
    {
      id: 11,
      image: Lp3,
      title: "Page View",
      description: "Landing page with Bootstrap, Jquery, Slick",
      tags: ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      link: "https://jumpto1.com/page-view/",
      category: "landingPages",
      rating: 4.0,
      ratingCount: 7
    },
    {
      id: 12,
      image: Lp4,
      title: "Page View 1",
      description: "Landing page with Bootstrap, Jquery, Slick",
      tags: ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      link: "https://jumpto1.com/page-view-1/",
      category: "landingPages",
      rating: 4.1,
      ratingCount: 7
    },
    {
      id: 13,
      image: Lp5,
      title: "SEO Services",
      description: "Landing page for SEO services with GSAP animations",
      tags: ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Embla", "GSAP"],
      link: "https://seoresultspro.com/seo-services/",
      category: "landingPages",
      rating: 4.4,
      ratingCount: 8
    },
    {
      id: 14,
      image: Lp6,
      title: "Children Book Illustrator",
      description: "Landing page for book illustrator",
      tags: ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      link: "https://www.bookwritingcube.com/children-book-illustrator/",
      category: "landingPages",
      rating: 4.2,
      ratingCount: 6
    },
    {
      id: 15,
      image: Lp7,
      title: "Book Publishing Service",
      description: "Landing page for book publishing service",
      tags: ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      link: "https://www.bookpublishingservice.us/",
      category: "landingPages",
      rating: 4.0,
      ratingCount: 6
    },
    {
      id: 16,
      image: Lp8,
      title: "Amazon Book Publishing",
      description: "Landing page for Amazon book publishing services",
      tags: ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      link: "https://www.bookwritingcube.com/amazon-book-publishing-services/",
      category: "landingPages",
      rating: 4.1,
      ratingCount: 6
    },
    {
      id: 17,
      image: Lp9,
      title: "Audio Book Production",
      description: "Landing page for audio book production services",
      tags: ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      link: "https://www.bookwritingcube.com/audio-book-production-services/",
      category: "landingPages",
      rating: 4.2,
      ratingCount: 5
    },
    {
      id: 18,
      image: Lp10,
      title: "Book Publishing Services",
      description: "Landing page for book publishing services",
      tags: ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      link: "https://www.bookwritingcube.com/lp/book-publishing-services/",
      category: "landingPages",
      rating: 4.3,
      ratingCount: 5
    },
    {
      id: 19,
      image: Lp11,
      title: "Marketing LP2",
      description: "Landing page for marketing",
      tags: ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      link: "https://www.bookwritingcube.com/marketing-lp2/",
      category: "landingPages",
      rating: 4.0,
      ratingCount: 4
    },
    {
      id: 20,
      image: Lp12,
      title: "Case Studies",
      description: "Landing page for case studies",
      tags: ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      link: "https://bestsellingpublisher.com/case-studies",
      category: "landingPages",
      rating: 4.5,
      ratingCount: 7
    },
    {
      id: 21,
      image: Lp13,
      title: "Book Marketing Company",
      description: "Landing page for book marketing company",
      tags: ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      link: "https://bestsellingpublisher.com/book-marketing-company",
      category: "landingPages",
      rating: 4.4,
      ratingCount: 7
    },
    {
      id: 22,
      image: Lp14,
      title: "Book Marketing Company LP",
      description: "Landing page for book marketing company LP",
      tags: ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      link: "https://bestsellingpublisher.com/lp/book-marketing-company",
      category: "landingPages",
      rating: 4.3,
      ratingCount: 6
    },
    {
      id: 23,
      image: Lp15,
      title: "Book Publishing Company LP",
      description: "Landing page for book publishing company LP",
      tags: ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      link: "https://bestsellingpublisher.com/lp/book-publishing-company",
      category: "landingPages",
      rating: 4.2,
      ratingCount: 6
    },
    {
      id: 24,
      image: Lp16,
      title: "Audiobook Production Services",
      description: "Landing page for audiobook production services",
      tags: ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      link: "https://bestsellingpublisher.com/audiobook-production-services",
      category: "landingPages",
      rating: 4.1,
      ratingCount: 5
    },
    // Ecommerce
    {
      id: 25,
      image: Ecommerce1,
      title: "FSF Mart",
      description: "Full-featured e-commerce platform",
      tags: ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Javascript"],
      link: "https://fsf-mart-pk.netlify.app/",
      category: "ecommerce",
      rating: 4.2,
      ratingCount: 15
    },
    {
      id: 26,
      image: Ecommerce2,
      title: "Modern E-commerce",
      description: "Next.js based e-commerce solution",
      tags: ["Nextjs 14", "Tailwind Css", "React Hook Form", "Shadcn Ui", "Magic Ui", "Reactjs 18", "Typescript"],
      link: "https://ecommerce-nextjs-sandy-one.vercel.app/",
      category: "ecommerce",
      rating: 4.7,
      ratingCount: 6
    },
    // Email Templates
    {
      id: 27,
      image: EmailTemplates1,
      title: "Jumpto1 Halloween Email",
      description: "Halloween themed email template for Jumpto1",
      tags: ["HTML 5", "CSS3"],
      link: "https://farooqaziz.netlify.app/work/jumpto1-email-template-helloween/",
      category: "emailTemplates",
      rating: 4.5,
      ratingCount: 4
    },
    {
      id: 28,
      image: EmailTemplates2,
      title: "Infinity Animations Halloween Email",
      description: "Halloween themed email template for Infinity Animations",
      tags: ["HTML 5", "CSS3"],
      link: "https://farooqaziz.netlify.app/work/infinityanimations-email-template-helloween/",
      category: "emailTemplates",
      rating: 4.4,
      ratingCount: 4
    },
    {
      id: 29,
      image: EmailTemplates3,
      title: "H&W Email Template 2",
      description: "Email template for H&W",
      tags: ["HTML 5", "CSS3"],
      link: "https://farooqaziz.netlify.app/work/h&w-email-template-2/",
      category: "emailTemplates",
      rating: 4.3,
      ratingCount: 3
    },
    {
      id: 30,
      image: EmailTemplates4,
      title: "H&W Email Template 1",
      description: "Email template for H&W",
      tags: ["HTML 5", "CSS3"],
      link: "https://farooqaziz.netlify.app/work/h&w-email-template-1/",
      category: "emailTemplates",
      rating: 4.2,
      ratingCount: 3
    },
    {
      id: 31,
      image: EmailTemplates5,
      title: "Bitswits Email Template",
      description: "Email template for Bitswits",
      tags: ["HTML 5", "CSS3"],
      link: "https://farooqaziz.netlify.app/work/bitswits-email-template/",
      category: "emailTemplates",
      rating: 4.1,
      ratingCount: 2
    },
    {
      id: 32,
      image: EmailTemplates6,
      title: "Infinity Animations Thank You Email",
      description: "Thank you email template for Infinity Animations",
      tags: ["HTML 5", "CSS3"],
      link: "https://farooqaziz.netlify.app/work/infinityanimations-email-template-thankyou/",
      category: "emailTemplates",
      rating: 4.0,
      ratingCount: 2
    },
    {
      id: 33,
      image: EmailTemplates7,
      title: "Infinity Animations Email",
      description: "Email template for Infinity Animations",
      tags: ["HTML 5", "CSS3"],
      link: "https://farooqaziz.netlify.app/work/infinityanimations-email-template/",
      category: "emailTemplates",
      rating: 4.0,
      ratingCount: 2
    }
  ],
  website: [],
  virtualAssistant: [],
  landingPages: [],
  ecommerce: [],
  emailTemplates: []
};

// Populate category-specific arrays
type CategoryKey = keyof typeof projects;
projects.all.forEach(project => {
  if (projects[project.category as CategoryKey]) {
    projects[project.category as CategoryKey].push(project);
  }
});

// Type for StarRating props
interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  interactive?: boolean;
  size?: string;
}

const StarRating = ({ rating, onRatingChange, interactive = false, size = "w-4 h-4" }: StarRatingProps) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${size} cursor-pointer transition-colors duration-200 ${
            star <= (interactive ? hoveredRating || rating : rating)
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300"
          }`}
          onClick={() => interactive && onRatingChange?.(star)}
          onMouseEnter={() => interactive && setHoveredRating(star)}
          onMouseLeave={() => interactive && setHoveredRating(0)}
        />
      ))}
    </div>
  );
};

// Type for RatingDrawer props
interface RatingDrawerProps {
  project: Project;
  onSubmit?: (feedbackData: any) => void;
}

const RatingDrawer = ({ project, onSubmit }: RatingDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackForm>({
    rating: 0,
    whatLiked: "",
    whatDisliked: "",
    improvements: "",
    additionalComments: ""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (feedback.rating === 0) {
      toast.error("Please provide a rating");
      return;
    }

    try {
      // Email submission logic would go here
      const emailData = {
        projectTitle: project.title,
        projectLink: project.link,
        rating: feedback.rating,
        whatLiked: feedback.whatLiked,
        whatDisliked: feedback.whatDisliked,
        improvements: feedback.improvements,
        additionalComments: feedback.additionalComments,
        timestamp: new Date().toISOString()
      };

      // Here you would typically send to your backend/email service
      console.log("Feedback submitted:", emailData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Thank you for your feedback! Your review has been submitted.");
      setIsOpen(false);
      
      // Reset form
      setFeedback({
        rating: 0,
        whatLiked: "",
        whatDisliked: "",
        improvements: "",
        additionalComments: ""
      });
      
      onSubmit?.(emailData);
    } catch (error) {
      toast.error("Failed to submit feedback. Please try again.");
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer">
          <StarRating rating={project.rating} onRatingChange={() => {}} />
          <span className="text-xs text-white">({project.ratingCount})</span>
        </div>
      </DrawerTrigger>
      <DrawerContent className="max-w-2xl mx-auto">
        <DrawerHeader>
          <DrawerTitle className="text-2xl font-bold">
            Rate & Review: {project.title}
          </DrawerTitle>
          <DrawerDescription>
            Share your feedback about this project to help me improve
          </DrawerDescription>
        </DrawerHeader>
        <form onSubmit={handleSubmit} className="px-4 space-y-6 overflow-y-auto">
          <div className="space-y-2">
            <Label htmlFor="rating" className="text-base font-medium">
              Overall Rating *
            </Label>
            <StarRating
              rating={feedback.rating}
              onRatingChange={(rating: number) => setFeedback(prev => ({ ...prev, rating }))}
              interactive={true}
              size="w-8 h-8"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatLiked" className="text-base font-medium">
              What did you like about this project?
            </Label>
            <Textarea
              id="whatLiked"
              placeholder="Tell me what impressed you the most..."
              value={feedback.whatLiked}
              onChange={(e) => setFeedback(prev => ({ ...prev, whatLiked: e.target.value }))}
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatDisliked" className="text-base font-medium">
              What could be better?
            </Label>
            <Textarea
              id="whatDisliked"
              placeholder="Share what you didn't like or found confusing..."
              value={feedback.whatDisliked}
              onChange={(e) => setFeedback(prev => ({ ...prev, whatDisliked: e.target.value }))}
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="improvements" className="text-base font-medium">
              Suggestions for improvement
            </Label>
            <Textarea
              id="improvements"
              placeholder="How can I make this project better?"
              value={feedback.improvements}
              onChange={(e) => setFeedback(prev => ({ ...prev, improvements: e.target.value }))}
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalComments" className="text-base font-medium">
              Additional Comments
            </Label>
            <Textarea
              id="additionalComments"
              placeholder="Any other feedback or suggestions?"
              value={feedback.additionalComments}
              onChange={(e) => setFeedback(prev => ({ ...prev, additionalComments: e.target.value }))}
              className="min-h-[80px]"
            />
          </div>

          <DrawerFooter className="flex-row gap-4 px-0">
            <DrawerClose asChild>
              <Button variant="outline" className="flex-1">
                Cancel
              </Button>
            </DrawerClose>
            <Button type="submit" className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              <Send className="w-4 h-4 mr-2" />
              Submit Feedback
            </Button>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
};

export const ProjectCard = () => {
  const [visibleItems, setVisibleItems] = useState<{ [key: string]: number }>(() => {
    return Object.keys(projects).reduce((acc, key) => {
      acc[key] = 9;
      return acc;
    }, {} as { [key: string]: number });
  });

  const handleLoadMore = (tabKey: string) => {
    setVisibleItems(prev => ({
      ...prev,
      [tabKey]: prev[tabKey] + 6
    }));

    setTimeout(() => {
      const gridContainer = document.querySelector(`[data-tab="${tabKey}"]`);
      if (gridContainer) {
        const lastElement = gridContainer.lastElementChild;
        if (lastElement) {
          lastElement.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
          });
        }
      }
    }, 100);
  };

  const handleFeedbackSubmit = (feedbackData: any) => {
    // Here you can handle the feedback submission
    // For example, send to your backend or email service
    console.log("Feedback received:", feedbackData);
  };

  const getTabDisplayName = (tabKey: string) => {
    const displayNames: { [key: string]: string } = {
      all: "All Projects",
      website: "Websites",
      virtualAssistant: "Virtual Assistant",
      landingPages: "Landing Pages",
      ecommerce: "E-commerce",
      emailTemplates: "Email Templates"
    };
    return displayNames[tabKey] || tabKey;
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <div className="relative z-10 flex items-center justify-center py-[80px]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore my diverse range of projects and rate them to help me improve
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8 bg-gray-800 border-gray-700">
              {Object.keys(projects).map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="text-gray-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white transition-all duration-300"
                >
                  {getTabDisplayName(tab)}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(projects).map(([tabKey, projectList]) => (
              <TabsContent value={tabKey} key={tabKey} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-tab={tabKey}>
                  {projectList.slice(0, visibleItems[tabKey]).map((project) => (
                    <div key={project.id} className="relative overflow-hidden group bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="aspect-video relative overflow-hidden">
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 rounded-full px-3 py-1">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <RatingDrawer project={project} onSubmit={handleFeedbackSubmit} />
                          <Link 
                            href={`/projects/${project.id}`}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                          >
                            <Eye className="w-4 h-4" />
                            View
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {projectList.length > visibleItems[tabKey] && (
                  <div className="text-center">
                    <button
                      onClick={() => handleLoadMore(tabKey)}
                      className="relative bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Load More Projects
                    </button>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export function ProjectLayout() {
  return (
    <>
      <section>
        <div className="relative z-10 mx-auto flex h-screen w-full flex-col items-center justify-center overflow-hidden">
          <div className="absolute z-10 inset-0 h-full w-full bg-black/60 dark:bg-black/70" />
          <ThreeDMarquee
            className="pointer-events-none absolute inset-0 h-full w-full"
            images={data.images}
          />
          <div className="container">
            <div className="text-center text-white relative z-10">
              <h2 className="lg:text-[50px] md:text-[40px] sm:text-[30px] text-[22px] font-bold">Real-World Project Insights</h2>
              <div className="relative z-10 mt-4">
                <span className="h-[3px] sm:w-[4%] w-[7%] bg-fuchsia-600 absolute sm:top-[20px] top-[15px] xl:left-[38%] lg:left-[36%] md:left-[32%] sm:left-[28%] left-[18%] rounded"></span>
                <span className="block font-sans sm:text-[30px] text-[22px] leading-tigth">
                  Behind the Code
                </span>
                <span className="h-[3px] sm:w-[4%] w-[7%] bg-fuchsia-600 absolute sm:top-[20px] top-[15px]  xl:right-[38%] lg:right-[36%] md:right-[32%] sm:right-[28%] right-[18%] rounded"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProjectCard />
    </>
  );
}