"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Avatar from "@/components/Avatar"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Moon,
  Sun,
  Code,
  Palette,
  Smartphone,
  Server,
  Database,
  Globe,
  ArrowDown,
  Send,
} from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com Next.js, Stripe e dashboard administrativo.",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description: "Aplicativo de gerenciamento de tarefas com drag & drop e colaboração em tempo real.",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description: "Site de portfólio responsivo com animações suaves e design moderno.",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
]

const skills = [
  { name: "Frontend", icon: Code, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { name: "Backend", icon: Server, items: ["Node.js", "Python", "Express", "FastAPI"] },
  { name: "Database", icon: Database, items: ["PostgreSQL", "MongoDB", "Redis", "Prisma"] },
  { name: "Mobile", icon: Smartphone, items: ["React Native", "Flutter", "Expo"] },
  { name: "Design", icon: Palette, items: ["Figma", "Adobe XD", "Framer", "Sketch"] },
  { name: "DevOps", icon: Globe, items: ["Docker", "AWS", "Vercel", "GitHub Actions"] },
]

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <motion.header
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div className="text-2xl font-bold" whileHover={{ scale: 1.05 }}>
            Wil.dev
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {["Início", "Sobre", "Projetos", "Skills", "Contato"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-4"
          >
            <motion.div initial={false} animate={{ rotate: theme === "dark" ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.div>
          </Button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="início" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y }}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        </motion.div>

        <div className="container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-full p-1">
              <Avatar />
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Desenvolvedor
            <motion.span
              className="block text-primary"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Full Stack
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Criando experiências digitais incríveis com código limpo e design moderno
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button size="lg" className="text-lg px-8" onClick={() => window.open("https://github.com/acioliwilson", "_blank")}>
              Ver Projetos
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" onClick={() => window.location.href = "mailto:acioliwil@gmail.com"}>
              <Mail className="mr-2 h-5 w-5" />
              Contato
            </Button>
          </motion.div>

          <motion.div
  className="flex justify-center space-x-6"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.1, duration: 0.8 }}
>
  <motion.a
    href="https://github.com/acioliwilson"
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors"
    whileHover={{ scale: 1.2, y: -5 }}
    whileTap={{ scale: 0.9 }}
  >
    <Github className="h-6 w-6" />
  </motion.a>

  <motion.a
    href="https://www.linkedin.com/in/wilsonacioli/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors"
    whileHover={{ scale: 1.2, y: -5 }}
    whileTap={{ scale: 0.9 }}
  >
    <Linkedin className="h-6 w-6" />
  </motion.a>

  <motion.a
    href="mailto:acioliwil@gmail.com"
    className="text-muted-foreground hover:text-primary transition-colors"
    whileHover={{ scale: 1.2, y: -5 }}
    whileTap={{ scale: 0.9 }}
  >
    <Mail className="h-6 w-6" />
  </motion.a>
</motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 className="text-4xl font-bold text-center mb-12" variants={fadeInUp}>
              Sobre Mim
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <p className="text-lg text-muted-foreground mb-6">
                  Sou um desenvolvedor full stack apaixonado por criar soluções digitais inovadoras. Com mais de 12 anos
                  de experiência, especializo-me em React, Next.js, Vue, Angular e Node.js.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Minha jornada começou com curiosidade sobre como as coisas funcionam na web, e hoje transformo ideias
                  em produtos digitais que fazem a diferença.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "TypeScript", "React", "Next.js", "Node.js"].map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Developer at work"
                    width={400}
                    height={400}
                    className="rounded-xl w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-4xl font-bold text-center mb-12" variants={fadeInUp}>
              Projetos em Destaque
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, _index) => (
                <motion.div
                  key={project.title}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden h-full">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <Button size="sm" variant="secondary">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                        <Button size="sm" variant="secondary">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-4xl font-bold text-center mb-12" variants={fadeInUp}>
              Habilidades
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, _index) => (
                <motion.div
                  key={skill.name}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardHeader className="text-center">
                      <skill.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <CardTitle>{skill.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {skill.items.map((item) => (
                          <Badge key={item} variant="secondary">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto"
          >
            <motion.h2 className="text-4xl font-bold text-center mb-12" variants={fadeInUp}>
              Vamos Conversar
            </motion.h2>

            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Entre em Contato</CardTitle>
                  <CardDescription>Tem um projeto em mente? Vamos transformar sua ideia em realidade!</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Seu nome" />
                    <Input type="email" placeholder="Seu email" />
                  </div>
                  <Input placeholder="Assunto" />
                  <Textarea placeholder="Sua mensagem" rows={5} />
                  <Button className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2024 Wil.dev - Feito com ❤️ e muito código.
          </motion.p>
        </div>
      </footer>
    </div>
  )
}
