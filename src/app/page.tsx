import { HeroAnimation } from "@/components/home/HeroAnimation";
import { HeroButtons } from "@/components/home/HeroButtons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section id="hero" className="relative flex items-center justify-center min-h-screen overflow-hidden pt-20">
        <HeroAnimation />

        <Container className="relative z-10 w-full text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 mix-blend-multiply dark:mix-blend-normal dark:text-white">
              Forging the Future <br />
              <span className="text-neutral-500/80 dark:text-neutral-400">with Data & Decentralization.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Software Developer specializing in Data Science & Blockchain. I build scalable, data-driven applications that bridge the gap between complex algorithms and intuitive user experiences.
            </p>
            <div className="flex justify-center">
              <HeroButtons />
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-neutral-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6 text-black">About Me</h2>
            <p className="text-neutral-600 mb-4">
              I am a forward-thinking Software Developer with a rigorous academic foundation in Data Science and Blockchain technology. My passion lies in deconstructing complex problems and engineering robust, efficient solutions.
            </p>
            <p className="text-neutral-600 mb-4">
              I thrive at the intersection of data analytics and decentralized systems, constantly exploring new technologies to build applications that make a tangible impact.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="relative bg-neutral-200 rounded-2xl overflow-hidden shadow-xl border border-neutral-100">
            <Image
              src="/myimage.png"
              alt="About Me"
              width={1600}
              height={1600}
              unoptimized={true}
              priority
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </FadeIn>
        </div>
      </Section>

      {/* Recently Work Section */}
      <Section id="recently-work">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn className="relative bg-neutral-100 rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-white/5 order-2 md:order-1">
            <Image
              src="/recent.png"
              alt="Hackbit Studio Recent Work"
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </FadeIn>
          <FadeIn className="order-1 md:order-2" delay={0.2}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
              Recently Work
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Hackbit Studio
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed font-light">
              Hackbit Studio is a high-velocity website creation service designed to redefine digital delivery. We bridge the gap between complex requirements and rapid execution by leveraging a state-of-the-art tech stack.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed">
              Our focus on extreme speed and operational efficiency ensures your business stays ahead with a high-performance web presence built on the latest technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-2 text-sm font-medium text-neutral-500">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                In Development
              </span>
              <span className="flex items-center gap-2 text-sm font-medium text-neutral-500">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Latest Tech Stack
              </span>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            "Python", "TypeScript", "React", "Next.js",
            "SQL", "Node.js", "Git", "Figma"
          ].map((skill, index) => (
            <FadeIn key={skill} delay={index * 0.1} className="flex h-full">
              <div className="flex items-center justify-center p-6 border border-neutral-200 dark:border-white/10 rounded-xl transition-all duration-300 w-full h-full hover:bg-white hover:text-black hover:border-transparent hover:shadow-xl hover:scale-105 group bg-white/5 backdrop-blur-sm">
                <span className="font-medium text-lg group-hover:font-bold transition-all">{skill}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section id="projects" className="bg-neutral-900 text-white">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        </FadeIn>
        <div className="flex flex-col gap-20">
          {[
            {
              id: 1,
              title: "Pusvetma Website Optimization with UCD & AI",
              desc: "Renovated the Pusvetma platform using User-Centered Design principles and integrated Artificial Intelligence to enhance user engagement and operational efficiency.",
              image: "/project-1.png",
              tags: ["UCD", "AI Integration", "Web Optimization"],
              link: "https://github.com/Nurdhuha/pusvetma-website"
            },
            {
              id: 2,
              title: "Real-Time Cold Storage Monitoring",
              desc: "A robust IoT solution for monitoring coolroom temperatures with real-time data visualization, ensuring product safety and compliance.",
              image: "/project-2.png",
              tags: ["IoT", "Real-Time Data", "Visualization"],
              link: "https://github.com/Nurdhuha/monitoring-suhu-pusvetma"
            },
            {
              id: 3,
              title: "Sibookan Unesa",
              desc: "A streamlined web-based reservation system for Gedung A10 Unesa, simplifying room bookings and schedule management.",
              image: "/project-3.png",
              tags: ["Booking System", "Web App", "Management"],
              link: "https://github.com/Nurdhuha/Sibookan"
            },
            {
              id: 4,
              title: "GymPT: AI Personal Trainer",
              desc: "Interactive chatbot-powered platform providing personalized workout routines and diet plans based on user goals and BMI.",
              image: "/project-4.png",
              tags: ["AI Chatbot", "Health Tech", "Personalization"],
              link: "https://github.com/Nurdhuha/GymPT"
            },
            {
              id: 5,
              title: "Melimeal: AI Dietitian",
              desc: "Health-focused app using Naïve Bayes to generate tailored diet recommendations for diabetics, promoting healthier lifestyles.",
              image: "/project-5.png",
              tags: ["Machine Learning", "Healthcare", "Naive Bayes"],
              link: "https://github.com/Nurdhuha/Melimeal"
            },
            {
              id: 6,
              title: "WARNETRA: Internet Café Sim",
              desc: "Immersive simulation game blending internet café management with local urban legends, offering a unique cultural gaming experience.",
              image: "/project-6.png",
              tags: ["Game Dev", "Simulation", "Cultural"],
              link: "https://youtu.be/yNl-YaZbyMU?si=mIOFWrRKs9V8zxhe"
            }
          ].map((project, index) => (
            <FadeIn key={project.id} className="group grid md:grid-cols-2 gap-8 items-center">
              <div className={`relative aspect-video bg-neutral-800 rounded-lg overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-neutral-400 mb-6 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-neutral-800 rounded-full text-neutral-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black transition-colors">
                      Documentation
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-neutral-50 mb-0 pb-20">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Let's Connect</h2>
          <p className="text-neutral-600 mb-8">
            Interested in working together or have a question?
            Feel free to reach out. I'm always open to discussing new projects.
          </p>
          <a href="mailto:nurdhuha.23100@mhs.unesa.ac.id" className="w-full md:w-auto">
            <Button size="lg" className="w-full">
              Send me an email
            </Button>
          </a>
          <div className="mt-12 flex justify-center gap-8">
            <a href="https://www.linkedin.com/in/nur-dhuha" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-black transition-colors underline">LinkedIn</a>
            <a href="https://www.instagram.com/nurdhuhaam/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-black transition-colors underline">Instagram</a>
            <a href="https://github.com/Nurdhuha" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-black transition-colors underline">GitHub</a>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

