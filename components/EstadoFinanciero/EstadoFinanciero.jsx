import { FaBalanceScale, FaHome, FaIdCard } from 'react-icons/fa';
import { FaMoneyCheckDollar, FaMoneyBillTrendUp } from 'react-icons/fa6';
import Link from 'next/link';

function ContactCard({ href, icon: Icon, title, description }) {
  return (
    <Link 
      href={href} 
      className="bg-gray-50 rounded-lg p-5 text-center shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:bg-[#253b4a] hover:border-[#253b4a] group"
    >
      <Icon className="text-[#253b4a] text-3xl mx-auto mb-3 transition-colors duration-300 group-hover:text-white" />
      <h3 className="text-lg font-medium text-gray-800 transition-colors duration-300 group-hover:text-white">{title}</h3>
      <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-white group-hover:opacity-100 opacity-80">{description}</p>
    </Link>
  );
}

export default function EstadoFinanciero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 max-w-[90%] mx-auto">
      {/* Fila 1 */}
      <ContactCard
        href="/creditosEF"
        icon={FaMoneyCheckDollar}
        title="Total"
        description="de ingresos"
      />

      <ContactCard
        href="/aportaciones-mensuales"
        icon={FaMoneyBillTrendUp}
        title="Aportaciones Mensuales"
        description="Ver Aportaciones Mensuales"
      />

      <ContactCard
        href="/Balances"
        icon={FaBalanceScale}
        title="Balances"
        description="Mensuales"
      />

      {/* Fila 2 */}
      <div className="bg-gray-50 rounded-lg p-5 text-center shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:bg-[#253b4a] hover:border-[#253b4a] group">
        <FaIdCard className="text-[#253b4a] text-3xl mx-auto mb-3 transition-colors duration-300 group-hover:text-white" />
        <h3 className="text-lg font-medium text-gray-800 transition-colors duration-300 group-hover:text-white">Otros</h3>
        <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-white group-hover:opacity-100 opacity-80">ingresos</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-5 text-center shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:bg-[#253b4a] hover:border-[#253b4a] group">
        <FaHome className="text-[#253b4a] text-3xl mx-auto mb-3 transition-colors duration-300 group-hover:text-white" />
        <h3 className="text-lg font-medium text-gray-800 transition-colors duration-300 group-hover:text-white">Ganancias</h3>
        <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-white group-hover:opacity-100 opacity-80">los creditos</p>
      </div>
    </div>
  );
}