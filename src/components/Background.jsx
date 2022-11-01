export function Background({className, src, alt}) {
    return (
        <div className={`zw-screen h-screen absolute relative bg-gray-black overflow-hidden ${className}`}>
            <img
                src={src}
                className={"absolute -z-100 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 h-min-[45%] object-cover md:blur-none h-screen md:w-screen"}
                alt={alt}/>
        </div>
    );
}