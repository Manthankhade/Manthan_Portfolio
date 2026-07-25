import { type ReactNode, type ButtonHTMLAttributes } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

type Variant = 'primary' | 'outline' | 'ghost';

interface ButtonBaseProps {
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-soft shadow-[0_0_0_1px_rgba(37,99,235,0.4),0_8px_30px_-8px_rgba(37,99,235,0.6)]',
  outline:
    'border border-line text-text hover:border-accent hover:text-accent bg-transparent',
  ghost: 'text-muted hover:text-text bg-transparent',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium font-body transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none';

type ButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> &
  Omit<HTMLMotionProps<'button'>, 'children'>;

export function Button({ variant = 'primary', icon, children, className = '', ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`${base} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon}
    </motion.button>
  );
}

interface LinkButtonProps extends ButtonBaseProps {
  href: string;
  target?: string;
  rel?: string;
  className?: string;
}

export function LinkButton({ variant = 'primary', icon, children, href, target, rel, className = '' }: LinkButtonProps) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`${base} ${variantClasses[variant]} ${className}`}
    >
      {children}
      {icon}
    </motion.a>
  );
}
