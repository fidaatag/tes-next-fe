import { ListKelas } from "@/../../src/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";

interface IsiMateriKelasProps {
  isikelas: ListKelas[];
  params: String;
}

const IsiMateriKelas = ({ isikelas, params }: IsiMateriKelasProps) => {
  const detailKelas = isikelas.find((kelas: any) => kelas.id == params);

  return (
    <>
      <div>
        {detailKelas?.sections.map((bab: any) => (
          <Accordion
            type="single"
            collapsible={true}
            className="w-full"
            key={bab.id}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>{bab.title_section}</AccordionTrigger>
              <AccordionContent>
                {bab.modules.map((mod: any) => (
                  <p
                    key={mod.id_module}
                    className="mb-2 cursor-pointer hover:underline"
                  >
                    {mod.title_module}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </>
  );
};

export default IsiMateriKelas;
