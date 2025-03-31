import { motion } from 'framer-motion';
import React from 'react';
import ReactSlider from 'react-slider';
import clsx from 'clsx';

interface MoneySliderProps {
    value: number;
    onChange: (value: number) => void;
}

const mainColor = 'rgb(35, 66, 99)';
const secondaryColor = 'bg-blue-700';
const secondaryBColor = 'border-blue-700';


const MoneySlider: React.FC<MoneySliderProps> = ({ value, onChange }) => {
    const options = [150, 300, 400, 600, 1000];

    return (
        <div className="mt-2 mb-6">

            {/* SLIDER CON BOTONESS Background */}
            <div className="relative h-20 mb-4">
                {/* Track Background */}
                <div className="absolute w-full h-2 bg-gray-200 rounded-full top-1/2 transform -translate-y-1/2"></div>

                {/* Option Buttons */}
                <div className="absolute w-full flex justify-between items-center top-1/2 transform -translate-y-1/2">
                    {options.map((option, index) => (
                        <motion.div
                            key={index}
                            className={clsx(
                                "h-12 w-12 rounded-full flex items-center justify-center cursor-pointer shadow-md border-2",
                                value === option
                                    ?`${secondaryColor} ${secondaryBColor} text-white`
                                    :"bg-white text-gray-700 border-gray-300"
                            )}

                            whileHover={{ scale: 1.2, y: -5 }}
                            onClick={() => onChange(option)}
                        >
                            ${option}
                        </motion.div>
                    ))}
                </div>


            </div>

            <div className="flex justify-between mt-1 text-sm text-gray-500"
            style={{ color: 'white' }}

            >
                <span>Mínimo (${options[0]})</span>
                <span>Máximo (${options[options.length - 1]})</span>
            </div>
        </div>
    );
};

export default MoneySlider;
