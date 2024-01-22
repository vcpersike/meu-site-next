"use client";

import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  CloudIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";
import { Button, Typography } from "../../_shared/mods";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Licenciatura em Física - Universidade de São Paulo",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Curso Técnico, Programador Full-Stack - Recode Pro ",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Ciências da Computação, Full Stack - Descomplica",
  },
  {
    icon: CloudIcon,
    children: "Arquiteto de Solução, Full Cycle - Full Cycle",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            Minhas Formações
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            Desenvolvedor Web com ampla expertise e criatividade, acumulando
            mais de 5 anos de experiência na criação de sites, software e
            aplicativos web visualmente cativantes e altamente funcionais. Estou
            comprometido em oferecer soluções de alta qualidade e adoto uma
            abordagem dinâmica para projetos web.
          </Typography>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
