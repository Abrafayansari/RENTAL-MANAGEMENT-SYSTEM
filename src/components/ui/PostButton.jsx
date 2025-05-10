import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PostButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/upload"); // Replace with your actual route
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 90 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="  z-50 bg-[var(--secondary-color)] hover:bg-[var(--primary-color)] text-white p-3 rounded-full shadow-lg transition-all duration-200"
    >
      <Plus className="w-6 h-6" />
    </motion.button>
  );
};

export default PostButton;
