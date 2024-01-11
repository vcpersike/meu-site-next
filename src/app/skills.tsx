"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development:",
    children:
      " Desenvolver experiências web belas e funcionais é minha especialidade. Utilizando as tecnologias mais recentes e as melhores práticas, crio sites performáticos que cativam e envolvem os usuários.",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    children:
      " Sou especialista na criação de aplicativos móveis responsivos e intuitivos que funcionam perfeitamente em dispositivos iOS e Android. Do conceito à implantação, cuido de todas as etapas do processo de desenvolvimento.",
  },
  {
    icon: SwatchIcon,
    title: "Technology Stack",
    children:
      "Tenho ampla experiência nas mais populares tecnologias de desenvolvimento, atuando como desenvolvedor full-cycle. Isso inclui desde a infraestrutura até o desenvolvimento backend. Trabalho com tecnologias como Angular, React no frontend, e C#, Node.js e Go no backend. Além disso, utilizo serviços em nuvem como Azure e AWS para oferecer soluções completas.",
  },
  {
    icon: HashtagIcon,
    title: " Web Optimization",
    children:
      "Desempenho é crucial. Estou em constante aprimoramento na otimização de sites e aplicativos para velocidade, buscando garantir que seus usuários desfrutem de uma experiência rápida e responsiva, o que, por sua vez, melhora a satisfação do usuário e o posicionamento nos mecanismos de busca (SEO). Estou em um contínuo processo de desenvolvimento nesta área.",
  },
  {
    icon: EyeIcon,
    title: "User-Centric Design",
    children:
      "Meu desenvolvimento anda de mãos dadas com o olhar para o design. Eu crio interfaces de usuário que não são apenas funcionais, mas também esteticamente agradáveis, proporcionando uma jornada de usuário agradável e contínua.",
  },
  {
    icon: DocumentTextIcon,
    title: "Testing and Quality Assurance",
    children:
      "Eu testo e depuro aplicativos rigorosamente para garantir um ambiente seguro e livre de bugs para os usuários. Sua tranquilidade é tão importante para mim quanto a funcionalidade do seu projeto.",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          minhas skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          O que eu faço
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          Não sou apenas um desenvolvedor; sou um artesão de sonhos digitais.
          Criar experiências online imersivas não é apenas um trabalho, mas
          minha vocação. Com uma sólida experiência na educação e em projetos
          sociais, desenvolvi habilidades excepcionais de resolução de
          problemas.
          Descubra abaixo como posso te ajudar.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
