import { FaBook, FaBookOpen, FaHome, FaIdCard } from 'react-icons/fa';
import Link from 'next/link';

function Normativas() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 max-w-[90%] mx-auto">
      {/* Fila 1 */}
      <Link 
        href="/reglamento-interno" 
        className="bg-gray-50 rounded-lg p-5 text-center shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:bg-[#253b4a] hover:border-[#253b4a] group"
      >
        <FaBook className="text-[#253b4a] text-3xl mx-auto mb-3 transition-colors duration-300 group-hover:text-white" />
        <h3 className="text-lg font-medium text-gray-800 transition-colors duration-300 group-hover:text-white">Reglamento Interno</h3>
        <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-white group-hover:opacity-100 opacity-80">Ver Reglamento Interno</p>
      </Link>

      <Link 
        href="/resoluciones" 
        className="bg-gray-50 rounded-lg p-5 text-center shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:bg-[#253b4a] hover:border-[#253b4a] group"
      >
        <FaBookOpen className="text-[#253b4a] text-3xl mx-auto mb-3 transition-colors duration-300 group-hover:text-white" />
        <h3 className="text-lg font-medium text-gray-800 transition-colors duration-300 group-hover:text-white">Resoluciones</h3>
        <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-white group-hover:opacity-100 opacity-80">Ver Resoluciones</p>
      </Link>

      {/* Fila 2 */}
      <div className="bg-gray-50 rounded-lg p-5 text-center shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:bg-[#253b4a] hover:border-[#253b4a] group">
        <FaIdCard className="text-[#253b4a] text-3xl mx-auto mb-3 transition-colors duration-300 group-hover:text-white" />
        <h3 className="text-lg font-medium text-gray-800 transition-colors duration-300 group-hover:text-white">Puesto</h3>
        <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-white group-hover:opacity-100 opacity-80">Jefe de Area</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-5 text-center shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:bg-[#253b4a] hover:border-[#253b4a] group">
        <FaHome className="text-[#253b4a] text-3xl mx-auto mb-3 transition-colors duration-300 group-hover:text-white" />
        <h3 className="text-lg font-medium text-gray-800 transition-colors duration-300 group-hover:text-white">Dirección</h3>
        <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-white group-hover:opacity-100 opacity-80">GUAYAQUIL</p>
      </div>
    </div>
  );
}

export default Normativas;