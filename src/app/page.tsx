import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section id="hero" className="flex flex-col justify-center min-h-[80vh]">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
          Creative Developer <br />
          <span className="text-neutral-400">Building Digital Experiences.</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mb-8">
          I craft accessible, pixel-perfect, and performant web experiences.
          Focused on minimalist design and clean code.
        </p>
        <div className="flex gap-4">
          <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Projects
          </Button>
          <Button variant="outline" size="lg" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            About Me
          </Button>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-neutral-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-neutral-600 mb-4">
              I am a passionate developer with a keen eye for design. I believe in creating
              interfaces that are not only visually appealing but also intuitive and easy to use.
            </p>
            <p className="text-neutral-600 mb-4">
              With a background in computer science and a love for art, I bridge the gap
              between technical engineering and creative design.
            </p>
          </div>
          <div className="relative aspect-square bg-neutral-200 rounded-lg overflow-hidden">
            {/* Placeholder for About Image */}
            <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
              About Image Placeholder
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            "JavaScript (ES6+)", "TypeScript", "React", "Next.js",
            "Tailwind CSS", "Node.js", "Git", "Figma"
          ].map((skill) => (
            <div key={skill} className="flex items-center justify-center p-6 border border-neutral-200 rounded-lg hover:border-black transition-colors">
              <span className="font-medium text-lg">{skill}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section id="projects" className="bg-neutral-900 text-white">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="flex flex-col gap-20">
          {[1, 2].map((project) => (
            <div key={project} className="group grid md:grid-cols-2 gap-8 items-center">
              <div className={`relative aspect-video bg-neutral-800 rounded-lg overflow-hidden ${project % 2 === 0 ? 'md:order-2' : ''}`}>
                {/* Placeholder for Project Image */}
                <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
                  Project Image {project}
                </div>
              </div>
              <div className={project % 2 === 0 ? 'md:order-1' : ''}>
                <h3 className="text-2xl font-bold mb-4">Project Title {project}</h3>
                <p className="text-neutral-400 mb-6">
                  A comprehensive solution for X problems. Built with Next.js and Supabase.
                  Features include real-time updates and an intuitive dashboard.
                </p>
                <div className="flex gap-4">
                  <Link href="#" className="text-white underline underline-offset-4 hover:text-neutral-300">
                    View Live
                  </Link>
                  <Link href="#" className="text-white underline underline-offset-4 hover:text-neutral-300">
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Other Projects Section */}
      <Section id="gallery">
        <h2 className="text-3xl font-bold mb-12">More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="aspect-square bg-neutral-100 rounded-lg hover:bg-neutral-200 transition-colors cursor-pointer group relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400 group-hover:opacity-0 transition-opacity">
                Image {item}
              </div>
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-medium">View Project</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-neutral-50 mb-0 pb-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-neutral-600 mb-8">
            Interested in working together or have a question?
            Feel free to reach out. I'm always open to discussing new projects.
          </p>
          <Button size="lg" className="w-full md:w-auto">
            Send me an email
          </Button>
          <div className="mt-12 flex justify-center gap-8">
            <a href="#" className="text-neutral-500 hover:text-black transition-colors underline">LinkedIn</a>
            <a href="#" className="text-neutral-500 hover:text-black transition-colors underline">Twitter</a>
            <a href="#" className="text-neutral-500 hover:text-black transition-colors underline">GitHub</a>
          </div>
        </div>
      </Section>
    </>
  );
}
