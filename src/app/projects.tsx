"use client";

import { ProjectCard } from "@/components";
import { Typography } from "../../_shared/mods";

const PROJECTS = [
  {
    img: "/image/blog-1.svg",
    title: "Mobile App Development",
    desc: "Meu Prothues. O app Meu Protheus foi desenvolvido especialmente para trazer flexibilidade e agilidade nas aprovações e interatividade com os processos decorrentes do ERP Protheus",
  },
  {
    img: "/image/blog2.svg",
    title: "Landing Page Development",
    desc: "Para serviços de consultoria e assessoria jurídica. Ajuda as pequenas empresas se atualizarem de processos e procedimentos, para que possam se adequar às novas leis e normas vigentes.",
  },
  {
    img: "/image/blog3.svg",
    title: "Mobile App Development",
    desc: "https://voce.poderegularizar.com.br . É um pwa que ajudar a regularização aplicável aos imóveis ocupados predominantemente por população de baixa renda. Na REURB-S as custas de Cartórios são gratuita.",
  },
  {
    img: "/image/blog3.svg",
    title: "Software development",
    desc: "CRM na área de saúde, para atender as necessidades de gestão como agendamento e controle de gastos com pacientes, alocação de paciente em leitos, controle de estoque e financeiro.",
  },
  {
    img: "/image/blog4.svg",
    title: "Software development",
    desc: "CRM do cliente. O sistema foi desenvolvido para atender as necessidades de gestão de clientes e processos internos da empresa que atua no mercado de FIDIC.",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Projetos onde atuei
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Se você tem uma ideia para um aplicativo móvel, software ou website
          que precisa ser concretizada ou aprimorada, estou aqui para
          transformar seus sonhos digitais em realidade. Com expertise e
          profissionalismo, meu compromisso é tornar seus projetos uma
          verdadeira excelência no mundo digital.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
