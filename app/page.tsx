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
import emailjs from "emailjs-com"

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
    title: "Burgeh Delivery App",
    description: "Aplicativo de delivery de hambúrgueres com interface moderna, cardápio dinâmico e integração de pagamento online.",
    image: "/Burgeh.png?height=200&width=300",
    tech: ["Vue", "Bootstrap", "Node", "MongoDB", "Vercel"],
    github: "#",
    live: "https://food-delivery-tpl.vercel.app/cardapio",
  },
  {
    title: "Landing Page Curso HTML & CSS",
    description: "Landing page moderna para curso de HTML e CSS, com destaque para ofertas, bônus e parcelamento.",
    image: "/Curso.png?height=200&width=300",
    tech: ["Vue", "Bootstrap", "Figma"],
    github: "#",
    live: "https://desvende-a-web-com-html-e-css.vercel.app/",
  },
  {
    title: "Plataforma Resultados Mega-Sena",
    description: "Aplicação web para exibição de resultados, prêmios acumulados e próximos sorteios da Mega-Sena.",
    image: "/Mega.png?height=200&width=300",
    tech: ["Vue", "Bootstrap", "API Loterias", "Node", "Firebase", "Vercel"],
    github: "#",
    live: "https://resultadosdamegasena.com.br",
  },
]

const skills = [
  { name: "Frontend", icon: Code, items: ["React", "Next.js", "Vue", "Angular", "TypeScript", "Tailwind CSS", "Bootstrap"] },
  { name: "Backend", icon: Server, items: ["Node.js", "Python", "Express", "FastAPI", "Laravel"] },
  { name: "Database", icon: Database, items: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "Firebase"] },
  { name: "Mobile", icon: Smartphone, items: ["React Native", "Flutter", "Expo"] },
  { name: "Design", icon: Palette, items: ["Figma", "Adobe XD", "Framer", "Sketch", "Adobe Photoshop", "Adobe Illustrator"] },
  { name: "DevOps", icon: Globe, items: ["Docker", "AWS", "Vercel", "GitHub Actions"] },
]

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  // EmailJS
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const SERVICE_ID = "service_35bw5u8"
  const TEMPLATE_ID = "template_zqu7j3l"
  const PUBLIC_KEY = "_WdXE2a3ULg92lXgI"

  useEffect(() => {
    setMounted(true)
    emailjs.init(PUBLIC_KEY)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const sendEmail = () => {
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      })
      .then(() => {
        alert("Mensagem enviada com sucesso!")
        setForm({ name: "", email: "", subject: "", message: "" })
      })
      .catch((err) => alert("Erro ao enviar: " + err.text))
  }

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
            wil.json
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

      {/* Hero */}
      <section id="início" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y }}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        </motion.div>
        <div className="container mx-auto px-4 text-center z-10">
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="mb-8">
            <div className="max-w-60 mx-auto mb-8 rounded-full p-1">
              <Avatar />
            </div>
          </motion.div>
          <motion.h1 className="text-5xl md:text-7xl font-bold mb-6" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
            Desenvolvedor
            <motion.span className="block text-primary" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
              Full Stack
            </motion.span>
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            Criando experiências digitais incríveis com código limpo e design moderno
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <Button size="lg" className="text-lg px-8" onClick={() => window.open("https://github.com/acioliwilson", "_blank")}>
              Ver Projetos
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => window.location.href = "mailto:acioliwil@gmail.com"}>
              <Mail className="mr-2 h-5 w-5" />
              Contato
            </Button>
          </motion.div>
        </div>
        <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projetos" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-4xl font-bold text-center mb-12" variants={fadeInUp}>
              Projetos em Destaque
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <motion.div key={project.title} variants={fadeInUp} whileHover={{ y: -10 }}>
                  <Card className="overflow-hidden h-full">
                    <div className="relative overflow-hidden">
                      <Image src={project.image || "/placeholder.svg"} alt={project.title} width={300} height={200} className="w-full h-48 object-cover" />
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

      {/* Contact */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="max-w-2xl mx-auto">
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
                    <Input name="name" value={form.name} onChange={handleChange} placeholder="Seu nome" />
                    <Input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Seu email" />
                  </div>
                  <Input name="subject" value={form.subject} onChange={handleChange} placeholder="Assunto" />
                  <Textarea name="message" value={form.message} onChange={handleChange} placeholder="Sua mensagem" rows={5} />
                  <Button className="w-full" onClick={sendEmail}>
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
          <motion.p className="text-muted-foreground" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            © 2025 wil.json
          </motion.p>
        </div>
      </footer>
    </div>
  )
}
