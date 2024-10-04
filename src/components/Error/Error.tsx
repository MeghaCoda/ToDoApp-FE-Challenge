import './Error.css'

interface ErrorProps {
    message: string;
}

const Error: React.FC<ErrorProps> = ({ message }: ErrorProps) => {
    return <div className="error-message">{message}</div>
}

export default Error;