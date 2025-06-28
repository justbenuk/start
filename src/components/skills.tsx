import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import { FaMobile, FaSearchengin } from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiShadcnui } from "react-icons/si";
import { TbBrandNextjs, TbBrandTailwind, TbBrandPrisma, TbBrandGithub } from "react-icons/tb";

export default function Skills() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-10 text-white">
      <Tooltip>
        <TooltipTrigger>
          <div className="flex flex-col items-center justify-center p-4 bg-indigo-600/90 rounded shadow-lg">
            <TbBrandNextjs className="size-12" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          NextJS
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex flex-col items-center justify-center p-4 bg-indigo-600/90 rounded shadow-lg">
            <TbBrandTailwind className="size-12" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          TailwindCSS
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex flex-col items-center justify-center p-4 bg-indigo-600/90 rounded shadow-lg">
            <TbBrandPrisma className="size-12" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          Prisma
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex flex-col items-center justify-center p-4 bg-indigo-600/90 rounded shadow-lg">
            <TbBrandGithub className="size-12" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          Github
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex flex-col items-center justify-center p-4 bg-indigo-600/90 rounded shadow-lg">
            <SiPostgresql className="size-12" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          PostgreSQL
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex flex-col items-center justify-center p-4 bg-indigo-600/90 rounded shadow-lg">
            <SiMongodb className="size-12" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          MongoDB
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex flex-col items-center justify-center p-4 bg-indigo-600/90 rounded shadow-lg">
            <SiShadcnui className="size-12" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          Shadcn/UI
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex flex-col items-center justify-center p-4 bg-indigo-600/90 rounded shadow-lg">
            <FaMobile className="size-12" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          Mobile Responsive
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex flex-col items-center justify-center p-4 bg-indigo-600/90 rounded shadow-lg">
            <FaSearchengin className="size-12" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          Search Engine Responsive
        </TooltipContent>
      </Tooltip>
    </div>

  )
}

