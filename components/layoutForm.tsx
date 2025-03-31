// components/layouts/ConsultaLayout.tsx
interface Props {
    children: React.ReactNode;
  }
  
  const ConsultaLayout = ({ children }: Props) => {
    return (
      <div className="flex flex-col bg-[#F5F7FA] text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto border border-gray-300">
        <h2
          className="text-xl font-bold bg-[#003366] text-white p-4 rounded-t-lg text-center uppercase"
          style={{ width: "50%", margin: "0 auto" }}
        >
          Tu postulación
        </h2>
        <div className="mt-4">
          {children}
        </div>
      </div>
    );
  };
  
  export default ConsultaLayout;
  