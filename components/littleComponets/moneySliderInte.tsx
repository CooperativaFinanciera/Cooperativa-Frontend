import { motion } from 'framer-motion';
import React from 'react';
import ReactSlider from 'react-slider';
import clsx from 'clsx';

interface MoneySliderProps {
    value: number;
    onChange: (value: number) => void;

}

const mainColor = 'rgb(35, 66, 99)';

const MoneySliderInteractive: React.FC<MoneySliderProps> = ({ value, onChange}) => {
    const options = [150, 300, 400, 600, 1000];

    return (

        <div className="mt-4">
            {/* Slider */}
            <div className="h-12 px-4 sm:px-6 lg:px-8">
                <ReactSlider
                    className="mt-14"
                    
                    min={options[0]}
                    max={options[options.length - 1]}
                    step={25}
                    value={value}
                    onChange={(val: number) => onChange(val)}
                    renderThumb={(props, state) => (
                        <div
                            {...props}
                            style={{ ...props.style, zIndex: 20 }}

                            className="relative flex flex-col items-center w-8 h-8 -mt-2 outline-none"
                        >
                            <div className="absolute top-0 inline-block px-2 py-1 mb-2 -mt-8 text-xs text-white bg-gray-900 rounded-sm whitespace-nowrap"
                                                        >
                                

                                ${state.valueNow}
                            </div>
                            <div className="w-8 h-8 bg-white border-4 border-blue-700 rounded-full shadow-lg cursor-pointer" />
                        </div>
                    )}
                    renderTrack={(props, state) => (
                        <div
                            {...props}
                            className={clsx('h-4 rounded-full cursor-pointer', {
                                'bg-blue-700 z-10': state.index === 0,
                                'bg-gray-300': state.index === 1,
                            })}
                        />
                    )}
                />
            </div>
        </div>
    );
};

export default MoneySliderInteractive;
