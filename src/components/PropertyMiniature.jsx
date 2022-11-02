export function PropertyMiniature({src, alt, className, columns = 1}) {
    const columnClass = `col-span-${columns}`;

    return (
        <img
            src={src}
            alt={alt}
            className={`h-40 md:h-48 rounded-md w-full object-cover ${columnClass} ${className}`}
        />
    )
}