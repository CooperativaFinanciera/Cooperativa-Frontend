import { FaHome, FaIdCard } from 'react-icons/fa';
import { FaMoneyCheckDollar, FaMoneyBill } from 'react-icons/fa6';
import Link from 'next/link';

function SolicitudCredito() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 max-w-[90%] mx-auto">
      {/* Fila 1 */}
      <Link 
        href="/paquete-financiero" 
        className="bg-gray-50 rounded-lg p-5 text-center shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:bg-[#253b4a] hover:border-[#253b4a] group flex flex-col justify-center min-h-[180px]"
      >
        <FaMoneyBill className="text-[#253b4a] text-4xl mx-auto mb-4 transition-colors duration-300 group-hover:text-white" />
        <h3 className="text-lg font-medium text-gray-800 transition-colors duration-300 group-hover:text-white">Paquete Financiero</h3>
        <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-white group-hover:opacity-100 opacity-80">Ver</p>
      </Link>

      <Link 
        href="/creditos" 
        className="bg-gray-50 rounded-lg p-5 text-center shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:bg-[#253b4a] hover:border-[#253b4a] group flex flex-col justify-center min-h-[180px]"
      >
        <FaMoneyCheckDollar className="text-[#253b4a] text-4xl mx-auto mb-4 transition-colors duration-300 group-hover:text-white" />
        <h3 className="text-lg font-medium text-gray-800 transition-colors duration-300 group-hover:text-white">Créditos Otorgados al Público</h3>
        <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-white group-hover:opacity-100 opacity-80">Ver</p>
      </Link>

      {/* Fila 2 */}
      <div className="bg-gray-50 rounded-lg p-5 text-center shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:bg-[#253b4a] hover:border-[#253b4a] group flex flex-col justify-center min-h-[180px]">
        <FaIdCard className="text-[#253b4a] text-4xl mx-auto mb-4 transition-colors duration-300 group-hover:text-white" />
        <h3 className="text-lg font-medium text-gray-800 transition-colors duration-300 group-hover:text-white">Créditos Otorgados a Usted</h3>
        <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-white group-hover:opacity-100 opacity-80">Ver</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-5 text-center shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:bg-[#253b4a] hover:border-[#253b4a] group flex flex-col justify-center min-h-[180px]">
        <FaHome className="text-[#253b4a] text-4xl mx-auto mb-4 transition-colors duration-300 group-hover:text-white" />
        <h3 className="text-lg font-medium text-gray-800 transition-colors duration-300 group-hover:text-white">Solicitud de Crédito</h3>
        <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-white group-hover:opacity-100 opacity-80">Ver</p>
      </div>
    </div>
  );
}

export default SolicitudCredito;