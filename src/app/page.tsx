import { PriceCard } from '@/components/PriceCard'
// colors: #8ECAE6, #219EBC, #023047, #FFB703, #FB8500

export default function Home() {
    return (
        <>
            <section id="title" className="flex flex-col items-center gap-12 p-12">
                <h1 className="text-4xl font-bold">Bingus is the best</h1>
            </section>
            <section id="services" className="flex flex-col items-center gap-12 p-12">
                <h1 className="text-4xl font-bold">Our services</h1>

            </section>
            <section id="about" className="flex flex-col items-center gap-12 p-12">
                <h1 className="text-4xl font-bold">About bingus</h1>
                <PriceCard />

            </section>
            <section id="contact" className="flex flex-col items-center gap-12 p-12">
                <h1 className="text-4xl font-bold">Contact this rat</h1>

            </section>
        </>
    )
}
