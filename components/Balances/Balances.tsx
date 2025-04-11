import { useState } from 'react';

function Balances() {
  const [selectedYear, setSelectedYear] = useState(2023);
  const years = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
  
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const expenses = [
    { name: "Sueldos y salarios", amount: 0 },
    { name: "Alquiler", amount: 0 },
    { name: "Servicios públicos", amount: 0 },
    { name: "Marketing", amount: 0 },
    { name: "Gastos administrativos", amount: 0 },
    { name: "Impuestos", amount: 0 }
  ];

  // Datos de ejemplo
  const monthlyIncome = 31;
  const totalIncome = monthlyIncome * months.length;
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const netProfit = totalIncome - totalExpenses;

  return (
    <div className="max-w-[90%] mx-auto p-5 font-sans">
      <h1 className="text-2xl font-bold text-[#253b4a] mb-5 ">Balances Mensuales</h1>
      
      <div className="flex flex-wrap gap-2 mb-6 ">
        {years.map(year => (
          <button
            key={year}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedYear === year
                ? 'bg-[#253b4a] text-white border-[#253b4a]'
                : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                 
            }`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>
      
      
      
      <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
        <div className="flex bg-gray-100 border-b border-gray-300">
          <div className="flex-1 p-3 font-semibold text-center text-green-700 border-r border-gray-300">
            Ingresos Mensuales
          </div>
          <div className="flex-1 p-3 font-semibold text-center text-red-700">
            Egresos
          </div>
        </div>
        
        <div className="flex">
          {/* Columna de Ingresos */}
          <div className="flex-1 border-r border-gray-300">
            {months.map((month) => (
              <div key={month} className="flex border-b border-gray-200 last:border-b-0">
                <div className="flex-[2] p-3">{month}</div>
                <div className="flex-1 p-3 text-right font-mono">${monthlyIncome}</div>
              </div>
            ))}
            <div className="flex border-b-0 bg-gray-50 font-bold">
              <div className="flex-[2] p-3">Total Ingresos Anuales</div>
              <div className="flex-1 p-3 text-right font-mono">${totalIncome}</div>
            </div>
          </div>
          
          {/* Columna de Egresos */}
          <div className="flex-1">
            {expenses.map((expense) => (
              <div key={expense.name} className="flex border-b border-gray-200 last:border-b-0">
                <div className="flex-[2] p-3">{expense.name}</div>
                <div className="flex-1 p-3 text-right font-mono">${expense.amount}</div>
              </div>
            ))}
            <div className="flex border-b-0 bg-gray-50 font-bold">
              <div className="flex-[2] p-3">Total Egresos</div>
              <div className="flex-1 p-3 text-right font-mono">${totalExpenses}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-5 text-right text-base p-3 bg-gray-100 rounded-lg">
        Ganancia Neto: <span className="font-bold text-green-700">${netProfit}</span>
      </div>
    </div>
  );
}

export default Balances;