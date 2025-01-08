import PropTypes from 'prop-types';

export default function Button({ children, variant = 'primary', ...props }) {
    const variants = {
        primary: 'bg-accent text-primary hover:bg-accent/90',
        secondary: 'bg-secondary text-primary hover:bg-secondary/90',
        outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-primary'
    };

    return (
        <button
            className={`px-6 py-2 rounded-lg transition-all ${variants[variant]}`}
            {...props}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline'])
};

Button.defaultProps = {
    variant: 'primary'
};