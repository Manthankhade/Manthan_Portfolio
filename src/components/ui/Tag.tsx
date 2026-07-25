interface TagProps {
  children: string;
  active?: boolean;
  onClick?: () => void;
}

export function Tag({ children, active, onClick }: TagProps) {
  const interactive = typeof onClick === 'function';
  const Component = interactive ? 'button' : 'span';

  return (
    <Component
      onClick={onClick}
      className={[
        'font-mono text-[11px] tracking-wide uppercase rounded-full px-3 py-1.5 border transition-colors duration-200',
        active
          ? 'bg-accent/10 border-accent text-accent'
          : 'border-line text-muted',
        interactive ? 'hover:border-accent hover:text-accent cursor-pointer' : '',
      ].join(' ')}
    >
      {children}
    </Component>
  );
}
