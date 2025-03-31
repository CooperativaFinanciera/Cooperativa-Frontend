import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, File } from 'lucide-react';

const FileUploader = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const triggerFileSelect = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <input
                type="file"
                ref={inputRef}
                onChange={handleFileChange}
                className="hidden"
            />

            <motion.button
                animate={{ scale: [1, 1.05, 1], opacity: [1, 0.9, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={triggerFileSelect}
                style={{ backgroundColor: 'rgb(35, 66, 99)' }}

                className="bg-blue-500 text-white rounded-xl px-6 py-3 flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow"
            >
                <UploadCloud />
                Subir su Voucher de su aportación
            </motion.button>

            {selectedFile && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="flex items-center gap-2 bg-gray-100 rounded-xl p-3 shadow-sm"
                >
                    <File className="text-blue-500" />
                    <span>{selectedFile.name}</span>
                </motion.div>
            )}
        </div>
    );
};

export default FileUploader;
