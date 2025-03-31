"use client";
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface LegalAdviseModalProps {
    open: boolean;
    onClose: () => void;
    onAccept: () => void;
}

const LegalAdviseModal: React.FC<LegalAdviseModalProps> = ({ open, onClose, onAccept }) => {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <h2 className="text-xl font-bold text-[rgb(35,66,99)]">Aviso Legal</h2>
                </DialogHeader>

                <div className="max-h-64 overflow-y-auto text-sm text-black space-y-3">

                    <p>
                        Toda la información proporcionada <span className="font-bold">debe ser verídica, si los datos son falsos o fraudulentos, se iniciarán acciones legales</span> ante las instituciones correspondientes y se inhabilitará su solicitud de ser accionista de esta institución financiera ANEUPI.
                    </p>
                    <p>
                        No trates de hacerte daño a ti mismo, llena todos tus datos de manera transparente, honesta y real.
                    </p>
                    <p className="font-bold">
                        Siempre se trabaja por la seriedad y calidad.
                    </p>
                </div>

                <DialogFooter className="flex justify-between mt-4">
                    <Button variant="outline" onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button className="bg-[rgb(35,66,99)] text-white hover:bg-opacity-90" onClick={onAccept}>
                        Finaliza tu postulación
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default LegalAdviseModal;
