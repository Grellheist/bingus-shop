export const PriceCard = () => {
    return (
        <div className="w-full bg-green-200 p-10 rounded-xl shadow-xl hover:scale-105 transition duration-300 group z-30">
            <h3 className="mb-4 text-2xl font-medium text-gray-600 flex justify-center"></h3>
            <div className="flex items-baseline justify-center">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-7xl font-extrabold"></span>
                <span className="text-xl ml-1 font-normal text-gray-600">/month</span>
            </div>
            <ul className="space-y-5 my-7">
                <li className="flex space-x-3">
                    <i className="bi bi-check-circle-fill text-green-700" />
                    <span className="leading-tight text-gray-600">
                    </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-700">
                    <i className="bi bi-check-circle-fill text-gray-700" />
                    <span className="leading-tight text-gray-600">
                    </span>
                </li>
            </ul>
            <button
                className="bg-green-700 text-white transition-all rounded-lg text-lg p-2 w-full group-hover:bg-green-800"
            >Choose Plan</button
            >
        </div>
    )
}
