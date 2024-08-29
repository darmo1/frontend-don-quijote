

import { FormPropertyWrapper } from "@/app/dashboard/form-property/form-property.server"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export function Modal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Nueva propiedad</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Agrega una nueva propiedad</DialogTitle>
          <DialogDescription>
            Ingresa la información y detalles requeridos del siguiente formulario para agregar  una nueva propiedad 🏠
          </DialogDescription>
        </DialogHeader>
    
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
