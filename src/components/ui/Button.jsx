import { forwardRef } from 'react'

const base =
  'inline-flex items-center justify-center font-heading font-medium tracking-tight ' +
  'transition-all duration-300 ease-out rounded focus-visible:outline-none ' +
  'shadow-sm hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] ' +
  'disabled:opacity-50 disabled:pointer-events-none'

const variants = {
  primary:
    'bg-primary text-white hover:bg-primary-dark active:bg-primary-dark',
  outline:
    'border border-line text-ink hover:border-primary hover:text-primary bg-transparent',
  ghost:
    'text-ink hover:text-primary bg-transparent',
}

const sizes = {
  sm: 'text-sm px-4 py-2',
  md: 'text-base px-5 py-2.5',
  lg: 'text-base px-7 py-3.5',
}

/**
 * Button
 * A single, consistent button primitive for the whole site.
 * Adds subtle lift, shadow, and press interactions for a more premium feel.
 */
const Button = forwardRef(
  (
    {
      as: Component = 'button',
      variant = 'primary',
      size = 'md',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Button.displayName = 'Button'

export default Button