"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CommentCardProps {
    name: string;
    about: string;
    phone: string;
    email: string;
    avatar: string;
    introduction: string;
    place: string;
}

const CommentCard = ({ name, introduction, about, phone, email, avatar, place }: CommentCardProps) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-300 flex max-w-3xl mx-auto overflow-hidden"
    >
        <div className="bg-gray-900 text-white w-[34%] flex-shrink-0 p-3 flex flex-col items-center justify-center" 
                style={{height: "392px" }} // Fixed dimensions
        >
            <Image
                src={avatar}
                alt={name}
                width={120}
                height={120}
                className="rounded-full object-cover border-4 border-gray-700 mb-4 shadow-md"
            />
            <h3 className="text-xl font-bold text-center">{name}</h3>
            <div className="mt-4 text-sm space-y-2">
                <p>
                    <a
                        href="https://whatsapp.com/channel/0029Vaf4il905MUazhwZ5M17" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-green-400 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            className="mr-1"
                        >
                            <path
                                fill="#25D366"
                                d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.72.045.477-.099.883z"
                            />
                            <path
                                fill="#25D366"
                                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.031 18.75c-1.189 0-2.349-.3-3.375-.875l-3.734 1.148 1.148-3.75c-.601-1.042-.923-2.229-.923-3.47C5.147 7.773 8.21 4.69 12.031 4.69c1.868 0 3.628.729 4.949 2.052 1.32 1.323 2.052 3.08 2.052 4.944-.001 3.83-3.065 7.064-7.001 7.064z"
                            />
                        </svg>
                        {phone}
                    </a>
                </p>
                <p className="text-xs">✉️ {email}</p>
                <p>📍 {place}</p>
            </div>

        </div>

        <div className="w-auto p-6 flex flex-col justify-center">
            <h4 className="text-lg font-semibold mb-3">Sobre mí</h4>
            <p className="text-gray-700 dark:text-gray-300 text-base">
                {about}
            </p>
            <h4 className="text-lg font-semibold mb-3">Introducción</h4>
            <p className="text-gray-700 dark:text-gray-300 text-base">
                {introduction}
            </p>
        </div>
    </motion.div>
);

export default CommentCard;
