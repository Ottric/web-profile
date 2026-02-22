import { Download, EllipsisVertical, SquareArrowOutUpRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getPDFInfo, PDFInfo } from "@/lib/pdf";

type DocItemType = PDFInfo & { id: number; fileName: string; path: string };

export async function DocTable() {
  const pdfFiles = [
    { id: 1, fileName: "GDSC_basicLinux101.pdf", path: "/pdf/GDSC_basicLinux101.pdf" },
    { id: 2, fileName: "GDSC_react101.pdf", path: "/pdf/GDSC_react101.pdf" },
    { id: 3, fileName: "GDSC_figma101.pdf", path: "/pdf/GDSC_figma101.pdf" },
    {
      id: 4,
      fileName: "CCNA_introductionToNetworks.pdf",
      path: "/pdf/CCNA_introductionToNetworks.pdf",
    },
    {
      id: 5,
      fileName: "CCNA_switchingRoutingWirelessEssentials.pdf",
      path: "/pdf/CCNA_switchingRoutingWirelessEssentials.pdf",
    },
    { id: 6, fileName: "Letter-NSTDA-NECTEC.pdf", path: "/pdf/Letter-NSTDA-NECTEC.pdf" },
    { id: 7, fileName: "Letter-GJ-ARS.pdf", path: "/pdf/Letter-GJ-ARS.pdf" },
  ];

  const pdfInfos = await Promise.all(pdfFiles.map((file) => getPDFInfo(file.path)));

  const DocItems: DocItemType[] = pdfFiles.map((file, idx) => ({
    id: file.id,
    fileName: file.fileName,
    path: file.path,
    ...pdfInfos[idx],
  }));

  return (
    <div className="my-12 flex w-full flex-col items-center gap-4 md:mx-12">
      <h1 className="text-2xl font-bold">Documentation</h1>
      <div className="bg-card w-full max-w-6xl overflow-hidden border md:rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="text-lg hover:bg-transparent">
              <TableHead className="py-4 pl-8">File Name</TableHead>
              <TableHead className="hidden py-4 lg:table-cell">Author</TableHead>
              <TableHead className="hidden py-4 min-[54rem]:table-cell">Modified Date</TableHead>
              <TableHead className="py-4 text-right">File Size</TableHead>
              <TableHead className="w-4 px-8" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {DocItems.map((item) => (
              <TableRow key={item.id} className="group">
                <TableCell className="flex items-center pl-6 group-hover:underline">
                  <Image
                    src="/icon/pdf.svg"
                    alt="PDF Icon"
                    width={48}
                    height={48}
                    className="mr-2 inline-block"
                  />
                  <span className="truncate font-medium">{item.fileName}</span>
                </TableCell>
                <TableCell className="hidden font-mono lg:table-cell">{item.Author}</TableCell>
                <TableCell className="hidden font-mono min-[54rem]:table-cell">
                  {item.ModDate}
                </TableCell>
                <TableCell className="text-right font-mono">{item.Size}</TableCell>
                <TableCell className="w-4 px-8">
                  <div className="hidden justify-end gap-2 md:flex">
                    <Button
                      variant="ghost"
                      className="dark:hover:bg-accent focus:bg-accent focus:text-accent-foreground cursor-pointer px-2 py-1 has-[>svg]:px-2.5"
                      asChild
                    >
                      <Link href={item.path} target="_blank" rel="noopener noreferrer">
                        <SquareArrowOutUpRight size={24} />
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="dark:hover:bg-accent focus:bg-accent focus:text-accent-foreground cursor-pointer px-2 py-1 has-[>svg]:px-2.5"
                      asChild
                    >
                      <Link href={item.path} target="_self" rel="noopener noreferrer" download>
                        <Download size={24} />
                      </Link>
                    </Button>
                  </div>
                  <Menubar className="border-none bg-inherit shadow-none md:hidden">
                    <MenubarMenu>
                      <MenubarTrigger className="cursor-pointer">
                        <EllipsisVertical size={24} />
                      </MenubarTrigger>
                      <MenubarContent align="end" className="bg-card border-none shadow-lg">
                        <MenubarItem>
                          <Link
                            href={item.path}
                            className="flex w-full cursor-pointer items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <SquareArrowOutUpRight size={20} className="mr-2" />
                            View
                          </Link>
                        </MenubarItem>
                        <MenubarItem>
                          <Link
                            href={item.path}
                            className="flex w-full cursor-pointer items-center"
                            target="_self"
                            rel="noopener noreferrer"
                            download
                          >
                            <Download size={20} className="mr-2" />
                            Download
                          </Link>
                        </MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
