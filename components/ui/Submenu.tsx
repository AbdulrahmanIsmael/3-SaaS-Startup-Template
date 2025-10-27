import Link from 'next/link';
import { motion } from 'framer-motion';
import { I_submenuProps } from '@/types/ui-types';

const Submenu = ({
  paths,
  position,
  onMouseEnter,
  onMouseLeave,
}: I_submenuProps) => {
  // If there are no items, don't render the submenu
  if (!paths || paths.length === 0) return null;

  const style: React.CSSProperties = {
    position: 'absolute',
    left: position?.x ?? 0,
    top: position?.y ?? 0,
    zIndex: 50,
  };

  return (
    <motion.div
      style={style}
      className="bg-white shadow-lg rounded-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.2,
        ease: 'easeOut',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ul className="p-2">
        {paths.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer py-2 pl-2 pr-30 hover:bg-gray-100 text-gray-500"
          >
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Submenu;
