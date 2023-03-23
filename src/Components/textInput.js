

export default function TextInput(
    { type = 'text', name, id, value, className, autoComplete, required, isFocused, handleChange, checked, disabled, placeholder},
    ref
) {
    

    

    return (
        <div className="bg-transparent text-gray-900  flex flex-col items-start">
            <input
            disabled={disabled}
                type={type}
                name={name}
                checked={checked}
                placeholder={placeholder}
                id={id}
                value={value}
                className={`${className} border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm bg-white`}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}
