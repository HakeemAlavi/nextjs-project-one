import { Pencil } from 'lucide-react';
import { Trash } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from './ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { Input } from './ui/input';

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    paymentMethod: "Credit Card",
  }
  // More invoice data...
];

export function DisplayDemo() {
  return (
    <Table>
      <TableCaption>A list of your tasks.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Task</TableHead>
          <TableHead className="text-right pr-10">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="flex">
                <div className="flex ml-auto">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="mr-1 p-0.5 px-3">
                                <Pencil className=" w-4 h-4"/>
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Edit Task</DialogTitle>
                            </DialogHeader>
                            <DialogDescription>
                                <Input className="mr-1" />
                            </DialogDescription>
                            <DialogFooter>
                                <Button variant="outline">Save</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                    <Button className="p-0.5 px-3">
                        <Trash className=" w-4 h-4 "/>
                    </Button>
                </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
