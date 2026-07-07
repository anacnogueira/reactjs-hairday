import Header from "../core-components/header";

export default function PageHome() {
    return (
        <main className="relative p-3 flex gap-3 flex-col md:flex-row max-w-360 mx-auto">
            <Header className="absolute top-0 left-0"/>
        </main>
    )
}