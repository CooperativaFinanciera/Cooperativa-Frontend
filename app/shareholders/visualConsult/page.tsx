"use client";

import { useState } from "react";
import Image from "next/image";
import fondoImage from "@/app/assets/image/bgAccio.png";
import SearchContainer from "@/components/forms/searchForm";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import ValidationTypeCard from "@/components/cards/validationTypeCard";
import { Box } from "@mui/material";

const Consult = () => {
  const [activeView, setActiveView] = useState<"accionista" | "postulacion" | null>(null);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  // Array de tarjetas
  const cards = [
    {
      title: "Accionista",
      description: "Verifica información como accionista de la cooperativa.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path fill-rule="evenodd" d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.04 16.5.5-1.5h6.42l.5 1.5H8.29Zm7.46-12a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Zm-3 2.25a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 1.5 0V9Zm-3 2.25a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z" clip-rule="evenodd" />
      </svg>

    },
    {
      title: "Tu Postulación",
      description: "Valida tu postulación al sistema de beneficios.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path fill-rule="evenodd" d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5Zm6.61 10.936a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
        <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
      </svg>

    },
  ];

  return (
    <div
      className="relative min-h-screen font-sans text-gray-800 dark:text-gray-200 py-20"
      style={{
        backgroundImage: `url(${fondoImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {!activeView && (
        <div className="flex flex-col bg-[#F5F7FA] text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto border border-gray-300">
          <h2 className="text-2xl font-bold bg-[#003366] text-white p-4 rounded-t-lg text-center uppercase">
            Consultas
          </h2>

          <Box
            sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 2,
              justifyItems: 'center', // Centra los items horizontalmente en la grid
              alignItems: 'streach',
            }}
            className="mt-6 py-6"

          >
            {cards.map((card, index) => (
              <Card key={index}
              sx={{
                width: '100%',         // que llene la columna
                height: '100%',        // ocupar toda la altura
                minHeight: 100,        // o puedes usar height: 240 para forzarlo
                display: 'flex',
                flexDirection: 'column',
              }}
              >
                <CardActionArea
                  onClick={() => setSelectedCard(index)}
                  data-active={selectedCard === index ? '' : undefined}
                  sx={{
                    height: '100%',
                    '&[data-active]': {
                      backgroundColor: 'action.selected',
                      '&:hover': {
                        backgroundColor: 'action.selectedHover',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ height: '100%' }}>
                    <div className="flex justify-center items-center">
                      <Typography variant="body2" color="text.secondary">
                        {card.icon}
                      </Typography>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h2
                        className="text-2xl font-bold text-[rgba(37,70,106,1)] cursor-pointer hover:underline"
                        onClick={(e) => {
                          e.stopPropagation(); // Evita que el evento se propague a CardActionArea
                          setActiveView(index === 0 ? "accionista" : "postulacion");
                        }}
                      >
                        {card.title}
                      </h2>
                    </div>
                    <div className="flex justify-center items-center">
                      <Typography variant="body2" color="text.secondary">
                        {card.description}
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </div>
      )}

      {/* Vistas condicionales */}
      <div className="mt-8">
        {activeView === "accionista" && <SearchContainer />}
        {activeView === "postulacion" && <ValidationTypeCard />}
      </div>
    </div>
  );
};

export default Consult;